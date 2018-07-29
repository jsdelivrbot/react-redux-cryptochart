import axios from 'axios';

const CRYPTO_MCAP_URL = 'https://api.coinmarketcap.com/v2/ticker/?limit=10';
const PRICE_GRAPH_URL = 'https://min-api.cryptocompare.com/data/histoday?tsym=USD&limit=10&fsym=';

export const FETCH_COINS = 'FETCH_COINS';

export function fetchCoins() {
  let payload = [];
  let request = axios.get(CRYPTO_MCAP_URL)
    .then((response) => {
      const data = response.data.data;
      for (let key in data) {
        payload.push({
          name: data[key].name,
          symbol: data[key].symbol,
          market_cap: data[key].quotes.USD.market_cap,
          price: data[key].quotes.USD.price,
          volume_24h: data[key].quotes.USD.volume_24h,
          circulating_supply: data[key].circulating_supply,
          percent_change_24h: data[key].quotes.USD.percent_change_24h,
          price_points: [7477.5, 7333.93, 7405.4, 7398.64, 7718, 8395.82, 8170.23, 7937.25, 8182.89, 8230.87, 8237.66]
        });
      }
      return payload;
    })
    .then(coinArr => {
        let promiseArr = coinArr.map(currObj => {
          return currObj.symbol === "MIOTA" ? axios.get(`${PRICE_GRAPH_URL}IOTA`) : axios.get(`${PRICE_GRAPH_URL}${currObj.symbol}`);
        });
        return Promise.all(promiseArr).then(elems => {
          for (let i = 0; i < elems.length; i++) {
            coinArr[i].price_points = elems[i].data.Data.map(curr_points => {
              return curr_points.close;
            });
          }
          return coinArr;
        });
      }
    );

  return {
    type: FETCH_COINS,
    payload: request
  }
}

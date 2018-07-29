import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class CryptoList extends Component {
  renderCoinInfo(coin) {
    const floatToUSD = (floatNum) => {
      return '$' + (floatNum).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    }

    return (
      <tr key={coin.name}>
        <td>{coin.name}</td>
        <td>{coin.symbol}</td>
        <td>{floatToUSD(coin.market_cap)}</td>
        <td>{floatToUSD(coin.price)}</td>
        <td>{floatToUSD(coin.volume_24h)}</td>
        <td>{`${(coin.circulating_supply).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} ${coin.symbol}`}</td>
        <td>{`${coin.percent_change_24h}%`}</td>
        <td><Chart data={coin.price_points} color="red" units="$" /></td>
      </tr>
    )
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Symbol</th>
            <th>Market Cap ($)</th>
            <th>Price ($)</th>
            <th>Volume (24h)</th>
            <th>Circulating Supply</th>
            <th>Change (24h)</th>
            <th>Price Graph (24h)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.coins.map(this.renderCoinInfo)}
        </tbody>
      </table>

    )
  }
}

function mapStateToProps({ coins }) {
  return { coins };
}

//export default CryptoList;
export default connect(mapStateToProps)(CryptoList);

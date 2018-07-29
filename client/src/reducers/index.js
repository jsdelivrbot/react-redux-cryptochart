import { combineReducers } from 'redux';
import CoinsReducer from './reducer_coins_dummy';

const rootReducer = combineReducers({ // mapping of our state (similar to the state in a top most react component)
  coins: CoinsReducer,
});

export default rootReducer;

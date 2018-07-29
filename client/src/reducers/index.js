import { combineReducers } from 'redux';
import DummyCoinsReducer from './reducer_coins_dummy';
import CoinsReducer from './reducer_coins';

const rootReducer = combineReducers({ // mapping of our state (similar to the state in a top most react component)
  // coins: DummyCoinsReducer,
  coins: CoinsReducer,
});

export default rootReducer;

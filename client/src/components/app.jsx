import React, { Component } from 'react';
import CryptoList from '../containers/Cryptolist';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>CryptoChart</h1>
        <CryptoList />
      </div>
    )
  }
}

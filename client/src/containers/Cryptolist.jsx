import React, { Component } from 'react';

class CryptoList extends Component {
  render() {
    return (
      <table class="table table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Market Cap ($)</th>
            <th>Price ($)</th>
            <th>Volume (24h)</th>
            <th>Circulating Supply</th>
            <th>Change (24h)</th>
            <th>Price Graph (7d)</th>
          </tr>
        </thead>

      </table>

    )
  }
}

export default CryptoList;

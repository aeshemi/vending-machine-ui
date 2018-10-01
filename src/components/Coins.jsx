import React from 'react';
import CardGrid from './CardGrid';
import Coin from './Coin';

const Coins = props => (
  <React.Fragment>
    <h2>Coins</h2>
    <CardGrid cardType={Coin} colLength={4} {...props} />
  </React.Fragment>
);

export default Coins;

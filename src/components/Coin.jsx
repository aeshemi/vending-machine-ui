import React from 'react';
import { Button, Card, CardTitle } from 'reactstrap';

const Coin = props => (
  <Card body inverse color="info">
    <CardTitle>{props.description}</CardTitle>
    <Button disabled={props.disabled} onClick={props.onClick}>
      Insert
    </Button>
  </Card>
);

export default Coin;

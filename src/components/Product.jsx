import React from 'react';
import { Card, CardTitle, CardSubtitle, Button } from 'reactstrap';

const Product = props => {
  const { amountInserted, description, price, quantity, onClick } = props;
  const disabled = amountInserted < price || quantity < 1;

  return (
    <Card body inverse color="info">
      <CardTitle>{description}</CardTitle>
      <CardSubtitle>{`${price.toFixed(2)} eur`}</CardSubtitle>
      <Button disabled={disabled} onClick={onClick}>
        Purchase
      </Button>
    </Card>
  );
};

export default Product;

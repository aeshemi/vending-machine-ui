import React from 'react';
import CardGrid from './CardGrid';
import Product from './Product';

const Products = props => (
  <React.Fragment>
    <h2>Products</h2>
    <CardGrid cardType={Product} colLength={2} {...props} />
  </React.Fragment>
);

export default Products;

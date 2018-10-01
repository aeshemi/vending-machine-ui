import React from 'react';
import { Table } from 'reactstrap';

const CoinTable = props => (
  <Table>
    <thead>
      <tr>
        <th>Denomination</th>
        <th>Quantity</th>
      </tr>
    </thead>
    <tbody>
      {props.coins.map(item => (
        <tr key={item.coinType}>
          <td>{item.description}</td>
          <td>{item.quantity}</td>
        </tr>
      ))}
    </tbody>
  </Table>
);

export default CoinTable;

import React from 'react';
import { Row, Col } from 'reactstrap';

const createGrid = props => {
  const { cardType: Card, colLength, items, onClick, ...others } = props;
  const rows = [];
  let cols = [];

  items.forEach((item, index) => {
    cols.push(
      <Col key={index}>
        <Card {...item} {...others} onClick={() => onClick(index)} />
      </Col>
    );

    if ((index + 1) % colLength === 0 || index === items.length - 1) {
      rows.push(<Row key={index}>{cols}</Row>);
      cols = [];
    }
  });

  return rows;
};

const CardGrid = props => createGrid(props);

export default CardGrid;

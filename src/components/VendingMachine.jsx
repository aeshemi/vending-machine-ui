import React, { Component } from 'react';
import { Alert, Button, Container, Row, Col } from 'reactstrap';
import ApiClient from '../api/ApiClient';
import Coins from './Coins';
import CoinTable from './CoinTable';
import Products from './Products';

class VendingMachine extends Component {
  constructor() {
    super();
    this.state = {
      amountInserted: 0,
      change: [],
      coins: [],
      products: [],
      purchaseDisabled: false,
      message: '',
      showMessage: false
    };
    this.getInitialData = this.getInitialData.bind(this);
    this.addCoin = this.addCoin.bind(this);
    this.cancelPurchase = this.cancelPurchase.bind(this);
    this.newPurchase = this.newPurchase.bind(this);
    this.purchase = this.purchase.bind(this);
  }

  componentDidMount() {
    this.getInitialData();
  }

  getInitialData() {
    Promise.all([ApiClient.Coins.getList(), ApiClient.Products.getList()]).then(results => {
      this.setState({
        loading: false,
        coins: results[0].map(coin => Object.assign(coin, { quantity: 0 })),
        products: results[1]
      });
    });
  }

  addCoin(index) {
    let { amountInserted, coins } = this.state;
    const coin = coins[index];

    amountInserted += coin.value;
    coin.quantity++;

    this.setState({ amountInserted, coins });
  }

  cancelPurchase() {
    const { coins } = this.state;

    this.setState({
      amountInserted: 0,
      change: coins.filter(x => x.quantity > 0),
      purchaseDisabled: true
    });
  }

  newPurchase() {
    const { coins } = this.state;

    this.setState({
      change: [],
      coins: coins.map(coin => Object.assign(coin, { quantity: 0 })),
      purchaseDisabled: false,
      showMessage: false
    });
  }

  purchase(index) {
    const { coins, products } = this.state;

    ApiClient.Products.purchase({
      productType: products[index].productType,
      coins: coins.filter(x => x.quantity > 0).map(x => ({ coinType: x.coinType, quantity: x.quantity }))
    }).then(result => {
      this.setState({
        amountInserted: 0,
        change: result.change,
        products: result.products,
        message: result.message,
        showMessage: true,
        purchaseDisabled: true
      });
    });
  }

  render() {
    const {
      amountInserted,
      change,
      coins,
      products,
      purchaseDisabled,
      message,
      showMessage
    } = this.state;

    return (
      <Container>
        {showMessage && <Alert color="success">{message}</Alert>}
        <Row>
          <Col className="text-center">
            <Products amountInserted={amountInserted} items={products} onClick={this.purchase} />
          </Col>
          <Col className="text-center">
            <Coins items={coins} disabled={purchaseDisabled} onClick={this.addCoin} />
            <Alert color="primary">{`Inserted amount: ${amountInserted.toFixed(2)} eur`}</Alert>
            {purchaseDisabled && (
              <Button block outline color="primary" onClick={this.newPurchase}>
                Make New Purchase
              </Button>
            )}
            {amountInserted > 0 && (
              <Button block outline color="danger" onClick={this.cancelPurchase}>
                Cancel Purchase
              </Button>
            )}
            {change.length > 0 && <CoinTable coins={change} />}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default VendingMachine;

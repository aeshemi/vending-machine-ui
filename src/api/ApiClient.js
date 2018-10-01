import ApiBase from './ApiBase';

const ApiClient = {
  Products: Object.assign({}, ApiBase, {
    resourceName: 'products',
    purchase(data) {
      return this.fetchJSON('purchase', 'POST', data);
    }
  }),

  Coins: Object.assign({}, ApiBase, {
    resourceName: 'coins'
  })
};

export default ApiClient;

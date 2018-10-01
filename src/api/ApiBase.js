const apiBaseUri = process.env.REACT_APP_API_BASE_URI;

const ApiBase = {
  getList() {
    return this.fetchJSON();
  },
  fetchJSON(url, verb, data) {
    const method = verb || 'GET';
    const requestUrl =
      url === undefined
        ? `${apiBaseUri}/${this.resourceName}`
        : `${apiBaseUri}/${this.resourceName}/${url}`;

    let options = { method };

    if (data) {
      options = {
        ...options,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      };
    }

    const request = method === 'GET' ? fetch(requestUrl) : fetch(requestUrl, options);

    return request
      .then(response => response.json())
      .catch(e => console.log('Error caught in catch', e)); // eslint-disable-line no-console
  }
};

export default ApiBase;

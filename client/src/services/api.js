export default class Service {
  getHeaders(token) {
    const defaultHeaders = {
      'Accept': 'application/json',
      'Content-Type': 'application/json; charset=UTF-8',
      'credentials': 'same-origin'
    };

    return token ? Object.assign({}, defaultHeaders, { Authorization: `Bearer ${token}` }) : defaultHeaders;
  }

  getBody(body) {
    return JSON.stringify(body);
  }

  fetching(url, method, token, body) {
    if (method === 'POST' || method === 'DELETE') {
      return fetch(url, {
        method,
        headers: this.getHeaders(token),
        body: this.getBody(body)
      })
    }

    return fetch(url, {
      method,
      headers: this.getHeaders(token)
    });
  }

  callApi(url, method, token, body) {
    return Promise.race([
      this.fetching(url, method, token, body),
      new Promise((res, rej) => {
        setTimeout(() => rej(new Error('request timeout')), 15000);
      })
    ])
  }
}
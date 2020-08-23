const querystring = require('querystring');

const params = {
    id: 1234,
    search: 'query string parameters in JavaScript',
    token: '123412341341',
}

const queryString = querystring.stringify(params);

console.log(queryString)
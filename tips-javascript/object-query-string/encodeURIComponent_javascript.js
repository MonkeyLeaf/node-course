const params = {
    id: 1234,
    search: 'query string parameters in JavaScript',
    token: '123412341341',
}

const queryString = Object.keys(params).map((key) => {
    return encodeURIComponent(key) + '=' + encodeURIComponent(params[key])
}).join('&');

console.log(queryString)
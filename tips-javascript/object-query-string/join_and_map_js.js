const params = {
    id: 1234,
    search: 'query string parameters in JavaScript',
    token: '123412341341',
}

// ES6
const queryString_1 = Object.keys(params).map(key => key + '=' + params[key]).join('&');
console.log(queryString_1)

// ES5
const queryString_2 = Object.keys(params).map(function(key) {
    return key + '=' + params[key]
}).join('&');

console.log(queryString_2)

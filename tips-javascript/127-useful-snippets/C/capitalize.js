// This snippet capitalizes the first letter of a string.

const capitalize = ([first, ...rest]) =>
    first.toUpperCase() + rest.join('');

const result_1 = capitalize('fooBar'); // 'FooBar'
const result_2 = capitalize('fooBar', true); // 'Foobar'

console.log(result_1, result_2)
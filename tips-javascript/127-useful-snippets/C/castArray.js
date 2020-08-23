// This snippet converts a non-array value into array.

const castArray = val => (Array.isArray(val) ? val : [val]);

const result_1 = castArray('foo'); // ['foo']
const result_2 = castArray([1]); // [1]

console.log(result_1, result_2)
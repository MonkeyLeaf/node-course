// This snippet checks whether all elements of the array are equal.

const allEqual = arr => arr.every(val => val === arr[0]);

const result1 = allEqual([1, 2, 3, 4, 5, 6]); // false
const result2 = allEqual([1, 1, 1, 1]); // true

console.log(result1, result2)
// This snippet counts the occurrences of a value in an array.

const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
const result = countOccurrences([1, 1, 2, 1, 2, 3], 1); // 3

console.log(result)
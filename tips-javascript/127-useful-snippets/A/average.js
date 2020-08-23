// This snippet returns the average of two or more numerical values.

const average = (...nums) => nums.reduce((acc, val) => acc + val, 0) / nums.length;
const result_1 = average(...[1, 2, 3]); // 2
const result_2 = average(1, 2, 3); // 2

console.log(result_1, result_2)
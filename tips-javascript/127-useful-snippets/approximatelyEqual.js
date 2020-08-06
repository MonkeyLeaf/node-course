// This snippet checks whether two numbers are approximately equal to each other, with a small difference.

const approximatelyEqual = (v1, v2, epsilon = 0.001) => Math.abs(v1 - v2) < epsilon;

const result = approximatelyEqual(Math.PI / 2.0, 1.5708); // true

console.log(result)
// This snippet returns true if the predicate function returns true for all elements in a collection and false otherwise. 
// You can omit the second argument fnif you want to use Booleanas a default value.

const all = (arr, fn = Boolean) => arr.every(fn);

const result1 = all([4, 2, 3], x => x > 1); // true
console.log(result1)

const result2 = all([1, 2, 3]); // true
console.log(result2)
// This snippet splits values into two groups, based on a predicate function.
// If the predicate function returns a truthy value, the element will be placed in the first group.
// Otherwise, it will be placed in the second group.
//
// You can use Array.prototype.reduce()and Array.prototype.push()to add elements to groups,
// based on the value returned by fnfor each element.

const bifurcateBy = (arr, fn) =>
    arr.reduce((acc, val, i) => (acc[fn(val, i) ? 0 : 1].push(val), acc), [[], []]);

const result = bifurcateBy(['beep', 'boop', 'foo', 'bar'], x => x[0] === 'b');
// [ ['beep', 'boop', 'bar'], ['foo'] ]

console.log(result)
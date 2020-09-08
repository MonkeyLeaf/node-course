// This snippet assigns default values for all properties in an object that are undefined.

const defaults = (obj, ...defs) => Object.assign({}, obj, ...defs.reverse(), obj);

const result = defaults({ a: 1 }, { b: 2 }, { b: 6 }, { a: 3 }); // { a: 1, b: 2 }

console.log(result)
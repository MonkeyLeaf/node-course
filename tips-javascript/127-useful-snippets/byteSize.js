// This snippet returns the length of a string in bytes.

const byteSize = str => new Blob([str]).size;

console.log(byteSize('😀')); // 4
console.log(byteSize('Hello World')); // 11
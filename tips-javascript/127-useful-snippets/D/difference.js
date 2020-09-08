// This snippet finds the difference between two arrays.

const difference = (a, b) => {
    const s = new Set(b);
    return a.filter(x => !s.has(x));
};

const result = difference([1, 2, 5, 6, 7], [1, 2, 4]); // [3]

console.log(result)
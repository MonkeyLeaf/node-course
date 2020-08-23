// Sử dụng Set() của ES6.

function unique(arr) {
    return Array.from(new Set(arr)) //
}
console.log(unique([1, 1, 2, 3, 5, 3, 1, 5, 6, 7, 4]))
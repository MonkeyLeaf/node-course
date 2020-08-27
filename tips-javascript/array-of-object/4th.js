// Return về một array chứa tất cả những elements không trùng giữa hai Array

// with array
const arr1 = [1, 2, 3, 4, 5, 8, 9]
const arr2 = [5, 6, 7, 8, 9];
const difference = Array.from(new Set(arr1.concat(arr2).filter(v => !new Set(arr1).has(v) || !new Set(arr2).has(v))))
console.log(difference) //[ 1, 2, 3, 4, 6, 7 ]


// with array objects
let arr3 = [{ name: 'name1', id: 1 }, { name: 'name2', id: 2 }, { name: 'name3', id: 3 }];
let arr4 = [{ name: 'name1', id: 1 }, { name: 'name4', id: 4 }, { name: 'name5', id: 5 }];
let arr5 = arr3.concat(arr4);
let result = arr5.filter(function (v) {
    return arr3.every(n => JSON.stringify(n) !== JSON.stringify(v)) || arr2.every(n => JSON.stringify(n) !== JSON.stringify(v))
})
console.log(result); // [{ name: 'name2', id: 2 },{ name: 'name3', id: 3 },{ name: 'name4', id: 4 },{ name: 'name5', id: 5 }]

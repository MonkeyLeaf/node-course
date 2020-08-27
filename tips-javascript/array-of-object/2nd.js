// Return về một array chứa tất cả những elements của hai array không trùng lặp

// with array
const arr1 = [1, 2, 3, 4, 5, 8, 9]
const arr2 = [5, 6, 7, 8, 9];
const result_1 = arr1.concat(arr2.filter(v => !arr1.includes(v)))
console.log(result_1) //[1, 2, 3, 4, 5, 8, 9]


// with array objects
const arr3 = [{ name: 'name1', id: 1 }, { name: 'name2', id: 2 }, { name: 'name3', id: 3 }];
const arr4 = [{ name: 'name1', id: 1 }, { name: 'name4', id: 4 }, { name: 'name5', id: 5 }];
let arr5 = arr3.concat(arr4);
let result_2 = [];
let obj = [];
result_2 = arr5.reduce(function (prev, cur, index, arr) {
    obj[cur.id] ? '' : obj[cur.id] = prev.push(cur);
    return prev;
}, []);
console.log(result_2); //[{ name: 'name1', id: 1 },{ name: 'name2', id: 2 },{ name: 'name3', id: 3 },{ name: 'name4', id: 4 },{ name: 'name5', id: 5 }]
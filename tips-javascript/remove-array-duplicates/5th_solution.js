// Sử dụng filter và includes

function unique(arr) {
    let newArr = [];
    newArr = arr.filter(function (item) {
        return newArr.includes(item) ? '' : newArr.push(item)
    })
    return newArr
}
console.log(unique([1, 1, 2, 3, 5, 3, 1, 5, 6, 7, 4]))

// Sử dụng các đặc điểm hiện có của thuộc tính đối tượng và lưu trữ nó trong một mảng mới nếu không có thuộc tính đó.

function unique(arr) {
    const obj = {};
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!obj[arr[i]]) {
            obj[arr[i]] = 1
            newArr.push(arr[i])
        }
    }
    return newArr
}
console.log(unique([1, 1, 2, 3, 5, 3, 1, 5, 6, 7, 4]))


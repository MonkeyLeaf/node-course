// Sắp xếp mảng ban đầu trước, so sánh nó với các mảng liền kề và lưu trữ chúng trong mảng mới nếu chúng khác nhau.

function unique(arr) {
    const formArr = arr.sort()
    const newArr = [formArr[0]]
    for (let i = 1; i < formArr.length; i++) {
        if (formArr[i] !== formArr[i - 1]) {
            newArr.push(formArr[i])
        }
    }
    return newArr
}
console.log(unique([1, 1, 2, 3, 5, 3, 1, 5, 6, 7, 4]))
function flatten(arr) {
    return arr.reduce((pre, cur) => {
        return pre.concat(Array.isArray(cur) ? flatten(cur) : cur)
    }, [])
}

let arr = [1, 2, [3, 4], [5, [6, 7]]]
console.log(flatten(arr))

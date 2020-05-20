// setTimeout(() => {
//     console.log('2 second are up')
// }, 2000)

// const names = ['Tuan', 'Cao', 'Manh']

// const shortnames = names.filter((name) => {
//     return name.length <= 4
// })

// const geocode = (arrdress, callback) => {
//     setTimeout(() => {
//         const data = {
//             latitude: 0,
//             longtitude: 0
//         }
//         callback(data)
//     }, 2000)
// }

// geocode('Ha Noi', (data) => {
//     console.log(data)
// })

const add = (a, b, callback) => {
    setTimeout(() => {
        callback(a + b)
    }, 2000)
}

add(1, 4 , (sum) => {
    console.log(sum)
})
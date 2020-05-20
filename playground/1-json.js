const fs = require('fs')
// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Tuan Cao'
// }
// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)
// console.log(bookJSON)

// const parseData = JSON.parse(bookJSON)
// console.log(parseData.author)

const bufferData = fs.readFileSync('1-json.json')
const dataJSON = bufferData.toString() 
const data = JSON.parse(dataJSON)
data.author = "TuanCM"
fs.writeFileSync('1-json.json', JSON.stringify(data))
// console.log(data.author)
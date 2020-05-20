/*
 * Lession 9
 */
const fs = require('fs')
fs.writeFileSync('notes.txt', 'I live in Ha Noi')
fs.appendFileSync('notes.txt', ' I got married!!')
/*
 * End Lession 9
 */

/*
 * Lession 10
 */
const getNotes = require('./notes')
const msg = getNotes()
console.log(msg)

const add = require('./utils')
const sum = add(4, -2)
console.log(sum)
/*
 * End Lession 10
 */

/*
 * Lession 11
 */
const validator = require('validator')
console.log(validator.isEmail('caotuan92.hus@gmail.com'))
console.log(validator.isURL('https://udemy.com'))
/*
 * End Lession 11
 */

/*
 * Lession 12
 */
const chalk = require('chalk')
const greenMsg = chalk.green.inverse.bold('Success!')
const redMsg = chalk.red.inverse.bold('Error!')
console.log(greenMsg, redMsg)
/*
 * End Lession 12
 */

/*
 * Lession 15
 */
const command = process.argv[2]
console.log(process.argv)
if (command === 'add') {
    console.log('Adding note!')
} else if (command === 'remove') {
    console.log('Removing note!')
}
/*
 * End Lession 15
 */
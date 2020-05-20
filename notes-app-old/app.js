/*
 * Lession 16 17
 */
const yargs = require('yargs')
yargs.version('1.1.1')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log('Title: ' + argv.title)
        console.log('Body: ' + argv.body)
    }
})
// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Removing a note',
    handler: function () {
        console.log('Removing a note!')
    }
})
// Create read command
yargs.command({
    command: 'read',
    describe: 'Reading a note',
    handler: function () {
        console.log('Reading the note!')
    }
})
// Create list command
yargs.command({
    command: 'list',
    describe: 'Listing the notes',
    handler: function () {
        console.log('Listing the notes!')
    }
})

// add, remove, read, list
yargs.parse()
/*
 * End Lession 16 17
 */

 
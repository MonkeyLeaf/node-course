require('../src/db/mongoose')

const Task = require('../src/models/task')

// 5f0dd89547fe3c2595881b0d

Task.findByIdAndDelete('5f0dd89547fe3c2595881b0d').then((task) => {
    console.log(task)

    return Task.countDocuments({ completed: false })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})
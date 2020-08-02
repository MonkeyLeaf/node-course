require('../src/db/mongoose')

const Task = require('../src/models/task')

// 5f0dd89547fe3c2595881b0d

// Task.findByIdAndDelete('5f0dd89547fe3c2595881b0d').then((task) => {
//     console.log(task)
//
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('5f0ddc7966de0c29d429dee0').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})
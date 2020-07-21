require('../src/db/mongoose')

const User = require('../src/models/user')

// 5f0ddb16d4d7832816c6db6c

User.findByIdAndUpdate('5f0ddb16d4d7832816c6db6c', { age: 1 }).then((user) => {
    console.log(user)
    return User.countDocuments({ age: 1 })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})
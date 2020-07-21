const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://localhost:27017/task-manager-api', {
    user: 'root',
    pass: '123456',
    auth: { authSource: 'admin' },
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
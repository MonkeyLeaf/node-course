const express = require('express')
require('./db/mongoose')

const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

const Task = require('./models/task')
const User = require('./models/user')

const main = async () => {
    // const task = await Task.findById('5f5ef395f7ff7b41df6dc355')
    // await task.populate('owner').execPopulate()
    // console.log(task.owner)

    const user = await User.findById('5f5ef2b554397a4122c69081')
    await user.populate('tasks').execPopulate()
    console.log(user.tasks)
}

main()
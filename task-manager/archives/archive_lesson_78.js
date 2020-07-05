const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://root:123456@localhost:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect database')
    }

    const db = client.db(databaseName)

    db.collection('users').findOne({ _id: new ObjectID("5f01a32df9134326dcc20c38") }, (error, user) => {
        if (error) {
            return console.log('Unable to fetch!')
        }

        console.log(user)
    })

    db.collection('users').find({ age: 30 }).toArray((error, users) => {
        console.log(users)
    })

    db.collection('users').find({ age: 30 }).count((error, count) => {
        console.log(count)
    })

    db.collection('tasks').findOne({ _id: new ObjectID("5f01a32df9134326dcc20c3a") }, (error, task) => {
        console.log(task)
    })
    db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
        console.log(tasks)
    })
})
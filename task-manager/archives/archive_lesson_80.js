const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://root:123456@localhost:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect database')
    }

    const db = client.db(databaseName)

    db.collection('users').updateOne({
        _id: new ObjectID("5f01a32df9134326dcc20c37")
    }, {
       // $set: {
       //     name: "Cao Manh Tri",
       //     age: 0.5
       // }
        $inc: {
            age: 1
        }
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

    db.collection('tasks').updateMany({
        completed: false
    }, {
        $set: {
            completed: true
        }
    }).then((result) => {
        console.log(result.modifiedCount)
    }).catch((error) => {
        console.log(error)
    })
})
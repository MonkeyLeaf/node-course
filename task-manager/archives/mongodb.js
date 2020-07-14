const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://root:123456@localhost:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect database')
    }

    const db = client.db(databaseName)
})
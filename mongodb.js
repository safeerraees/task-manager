// CRUD create read update delete
const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('Unable connect to database');
    }

    const db = client.db(databaseName);

    // db.collection('users').updateOne({
    //     _id: new ObjectID("5d63bd3612428f067c2ce159")
    // }, {
    //         $set: {
    //             name: 'Shabbir'
    //         }
    //     }).then(result => {
    //         console.log(result);
    //     }).catch(error => {
    //         console.log(error);
    //     });
    db.collection('tasks').deleteOne({
        description: 'Bring groceries'
    }).then(result => {
        console.log(result);
    }).catch(error => {
        console.log(error);
    });
});
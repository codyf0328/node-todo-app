// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    const db = client.db('TodoApp');

    // deleteMany
    // db.collection('Todos').deleteMany({text: 'eat lunch'}).then((res) => {
    //     console.log(res);
    // });
    // deleteOne
    // db.collection('Todos').deleteOne({text: 'eat lunch'}).then((res) => {
    //     console.log(res);
    // });
    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((res) => {
    //     console.log(res);
    // });

    db.collection('Users').deleteMany({name: 'Adam'}).then((res) => {
        console.log(res);
    });

    db.collection('Users').findOneAndDelete({
        _id: new ObjectID("5b4435b2ce4b85a2248d14fb")})
        .then((res) => {
        console.log(JSON.stringify(res, undefined, 2));
    });

    // client.close();
});
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const dbOperations = require('./operations');

const url = 'mongodb://localhost:27017/';
const dbName = 'conFusion';

MongoClient.connect(url).then( (client) => {
    console.log('Connected correctly to server');
    const db = client.db(dbName);

    newDoc = { name: "Donut", description: "Test" };
    dbOperations.insertDocument(db, newDoc, 'dishes')
        .then( (result) => {
            console.log('Insert Document:', result.ops);
            return dbOperations.findDocuments(db, 'dishes');
        })
        .then( (docs) => {
            console.log(`Found documents:\n ${docs}`);
            return dbOperations.updateDocument(db, { name: 'Donut' }, { description: 'New test description' }, 'dishes');
        })
        .then( (result) => {
            console.log("Updated Document:\n", result.result);
            return dbOperations.findDocuments(db, 'dishes');
        })
        .then( (docs) => {
            console.log("Found Updated Documents:\n", docs);
            return db.dropCollection('dishes');
        })
        .then( (result) => {
            console.log("Dropped Collection: ", result);
            return client.close();
        })
})
.catch( (err) => console.log(err));
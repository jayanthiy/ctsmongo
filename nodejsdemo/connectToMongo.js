// Package for mongodb
var mongodb = require('mongodb');
// Connect to DB

var MongoClient = mongodb.MongoClient
var url = "mongodb://localhost:27017/ctsdb"
MongoClient.connect(url, function(err, db) {
    if(err) throw err;
    console.log('Connected to DB');
    console.log(db.databaseName);
    // Insert some values into DB
    var collection = db.collection('person');
    var obj = {
        "name": 'Priya',
        "age": 34,
        "active": true,
        "department" :{"name":"HR"},
        "address": [
            {
                "city": "Delhi"
            },
            {
                "city": "Mumbai"
            }
        ]
    }
    collection.insertOne(obj, function(err, docs){
        if(err) throw err;
        console.log('Inserted to DB!!');
    })
})



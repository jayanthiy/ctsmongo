// Import statements
const mongodb = require('mongodb');
const express = require('express')
const app = express()

const MongoClient = mongodb.MongoClient
const url = "mongodb://localhost:27017/ctsdb"

app.get('/', (req, res) => res.send('Hello World!'))

// var obj ={
//     "name": "Ravi's",
//     "age": 34,
//     "active": true,
//     "department" :{"name":"HR"},
//     "address": [
//         {
//             "city": "Delhi"
//         },
//         {
//             "city": "Mumbai"
//         }
//     ]
// }

app.get('/person', (req, res)=> {
    // res.json(obj);

    //Connect to DB code
    MongoClient.connect(url, function(err, db) {
        if(err) throw err;
        console.log('Connected to DB');
        var collection = db.collection('person');
         //Fetch from DB
         collection.find({}).toArray(function(err, docs){
             if(err) throw err;
             console.log(docs);
             res.json(docs);
         })   
    })
    //Write back to JSON
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
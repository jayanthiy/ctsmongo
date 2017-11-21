// Import statements
const mongodb = require('mongodb');
const express = require('express')
const app = express()

const MongoClient = mongodb.MongoClient
const url = "mongodb://localhost:27017/Northwind"

app.use(express.static('public'))


app.get('/customers/:custid', function(req, res){
    //Connect to DB code
    var customerId = req.params.custid;
    console.log('Cust ID: ',customerId);
    MongoClient.connect(url, function(err, db) {
       if(err) throw err;
       console.log('Connected to DB');
       var collection = db.collection('customers_copy');
        //Fetch from DB
        collection.find({CustomerID: customerId}, {_id:0}).toArray(function(err, docs){
            if(err) throw err;
            console.log(docs);
            res.json(docs);
        })   
   })
})


app.get('/customers', function(req, res){
     //Connect to DB code
     MongoClient.connect(url, function(err, db) {
        if(err) throw err;
        console.log('Connected to DB');
        var collection = db.collection('customers_copy');
         //Fetch from DB
         collection.find({}, {_id:0}).toArray(function(err, docs){
             if(err) throw err;
             console.log(docs);
             res.json(docs);
         })   
    })
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
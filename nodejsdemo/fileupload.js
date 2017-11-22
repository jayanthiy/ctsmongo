var fs = require('fs');
var mongo = require('mongodb');
var Grid = require('gridfs');

var MongoClient = mongo.MongoClient
var url = "mongodb://localhost:27017/testdb"
 
MongoClient.connect(url, function(err, db) {
  var gfs = Grid(db, mongo);
 
  var source = './example.txt';
  gfs.fromFile({filename: 'hello.txt'}, source, function (err, file) {
    console.log('saved %s to GridFS file %s', source, file._id);
    gfs.readFile({_id: file._id}, function (err, data) {
      console.log('read file %s: %s', file._id, data.toString());
    });
  });

});
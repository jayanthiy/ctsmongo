var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost:27017/ctsdb', { useMongoClient: true });

var blogSchema = new Schema({
  title:  String,
  author: String,
  body:   String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: {type: Number, max: 10},
    favs:  Number
  }
});

var Blog = mongoose.model('Blog', blogSchema);

// Blog.findById("5a150cfd686ff236cbb01290", function(err, docs){
//     if(err) throw err;
//     console.log(docs);
// })



var obj = new Blog({
    title: 'MongoDB ODM',
    author: "Puneet",
    body: "Object to Document mappping.. makes it really easy",
    comments: {
        body: "Comment 1", date: new Date()
    },
    hidden: false,
    meta: {
        votes: 15,
        favs: 0
    }   
})

obj.save(function(err, docs){
    if(err) throw err;
    console.log(docs);
})
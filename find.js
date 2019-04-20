var MongoClient = require('mongodb').MongoClient;

const url = "mongodb://localhost:27017";

MongoClient.connect(url, function (err, client) {
    if (err) throw err;

    var dbase = client.db("Movies");
    console.log("Connected");
    dbase.collection('movies').find({rating:{$gt:4}}).toArray(function(err,res){
    if(err) throw err;
    console.table(res);
   });
   client.close();
});
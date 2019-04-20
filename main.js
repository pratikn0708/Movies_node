var jsonObj = require("./movies.json");
var MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017";


jsonObj = JSON.stringify(jsonObj);
//console.log(jsonObj);
jsonObj = JSON.parse(jsonObj);
//console.log(jsonObj);
MongoClient.connect(url,function(err,client){
    if(err) throw err;
    var dbase=client.db("Movies");
    console.log("Connected");
    dbase.createCollection("movies",function(err,res){
        if(err) throw err;
        dbase.collection('movies').insertMany(jsonObj,function(err,res){
            if(err) throw err;
            console.log("Values Inserted");
        });
        client.close();
    });    
});






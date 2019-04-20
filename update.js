var MongoClient = require('mongodb').MongoClient;

const url = "mongodb://localhost:27017";

MongoClient.connect(url, function (err, client) {
    if (err) throw err;

    var dbase = client.db("Movies");
    console.log("Connected");
    
    // var oldValue={movieName:res.movieName};
    // var newValue={$set:{rating:res.rating-1}};
    // dbase.collection('movies').updateOne(oldValue,newValue,function(err,res1){
    //     if(err) throw err;
    //     console.log("Value Updated");
    // });
    //var value=res.rating-1;
    //console.log(value);
    dbase.collection('movies').update({isGood:false},{$inc:{"rating":-1}},function(err,res1){
        if(err)throw err;
        console.log("Value Updated");
    
   });
});
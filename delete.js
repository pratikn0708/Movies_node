var MongoClient = require('mongodb').MongoClient;

const url = "mongodb://localhost:27017";

MongoClient.connect(url, function (err, client) {
    if (err) throw err;

    var dbase = client.db("Movies");
    console.log("Connected");
    
    var myQuery={
        $and: [
            {genres:'romance'},
            {$or: [{ movieLength: { $lt: 1 } }, { movieLength: { $gt: 4 } }]}
            ]  
    };

    dbase.collection('movies').deleteMany(myQuery,function(err, res) {
        if (err) throw err;
        console.log(res);
        console.log("Record Deleted");
    });
  

client.close();
})
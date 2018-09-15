const {MongoClient , ObjectID} = require('mongodb');





MongoClient.connect('mongodb://localhost:27017/ToDoApp' , (error , client)=>{


    if(error){
      console.log("Unable to connect with the MongoDB Server");
    }
    else{
      console.log("MongoDB Connection Successfull!!!");
    }
    const db = client.db('ToDoApp');

    db.collection('ToDoApp').deleteMany({breed: 'Pitbull'}).then((result)=>{

      console.log(result);
    });

});

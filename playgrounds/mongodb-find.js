const {MongoClient , ObjectID} = require('mongodb');





MongoClient.connect('mongodb://localhost:27017/ToDoApp' , (error , client)=>{


    if(error){
      console.log("Unable to connect with the MongoDB Server");
    }
    else{
      console.log("MongoDB Connection Successfull!!!");
    }
    const db = client.db('ToDoApp');

    db.collection('ToDoApp').find({_id : new ObjectID('5b9d341ac75e7537060a9ed1')}).toArray().then((document , error)=>{

      if (document==[]) {
        console.log("Error Caught!");
      }
      else {

          console.log("Docs recieved");
          console.log(JSON.stringify(document , undefined , 2));
      }

    })


});

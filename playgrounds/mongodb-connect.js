const {MongoClient , ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);



MongoClient.connect('mongodb://localhost:27017/ToDoApp' , (error , client)=>{


    if(error){
      console.log("Unable to connect with the MongoDB Server");
    }
    else{
      console.log("MongoDB Connection Successfull!!!");
    }
    const db = client.db('ToDoApp');

    // db.collection('ToDoApp').insertOne({
    //   name: 'Hello world',
    //   completed: false
    // },(error , result)=>{
    //   if(error){
    //     console.log("Error Found");
    //   }
    //   else {
    //   }
    //   console.log(JSON.stringify(result.ops , undefined , 2));
    // })

    db.collection('ToDoApp').insertMany(
      [
        {
          name: 'Rohit Tiwari',
          age: 33
        },
        {
          breed: 'Pitbull',
          legs: 4
        },
        {
          weight: 98,
          height: 167
        }
      ] , (error , result)=>{

          if (error) {
            console.log("Error Found");

          }
          console.log(JSON.stringify(result.ops[2]._id.getTimestamp() ,undefined , 2  ));
      }
    )

    client.close(); //To close the server connection with MongoDB
});

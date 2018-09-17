const {mongoose} = require('./../server/db/mongoose');
const {ToDo} = require('./../server/models/todo');
const {MongoClient , ObjectID} = require('mongodb');


var id = '5b9f12d8ff4dcf1c7ba999d7';

ToDo.find({
  _id: id
})
.then((todos)=>{

  console.log("ToDos" + todos);

})

ToDo.findOne({
  _id: new ObjectID(id)
})
.then((todos)=>{

  console.log("ToDos" + todos);

})

ToDo.findById(id)
.then((todos , error)=>{

  if(todos == null){
    console.log("Error Caught , Database NULL");
  }
  else {
    console.log(todos);
  }
}).catch((error)=>{
  console.log(error);
})

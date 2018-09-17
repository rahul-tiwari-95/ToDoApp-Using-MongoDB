var express = require('express');
var bodyParser = require('body-parser')

var {mongoose} = require('./db/mongoose');
var {ToDo} = require('./models/todo');
var {User} = require('./models/user');
const {MongoClient , ObjectID} = require('mongodb');


var app = express();
app.use(bodyParser.json());

app.post('/todos' , (request , respond)=>{

  var toDo = new ToDo({

    text: request.body.text,
    completedAt: request.body.completedAt

  });

  toDo.save().then((document)=>{

    respond.status(900 ).send(document);
  } , (error)=>{
    respond.status(400).send(error);
  })

})

app.get('/todos' , (request , respond)=>{
  ToDo.find().then((document , error)=>{

      if (error) {
        console.log("Error Caught!");
      }
      else {

            respond.send("Hello World");
      }
    }
  )

})


app.get('/todos/:id' , (request , respond)=>{

id = request.params.id;

  ToDo.findById(id).then((document , error)=>{

      if (ObjectID.isValid(id)) {
        console.log(request);
        respond.send(document);
      }
      else {

            respond.status(404).send();
      }
    }
  )

})





app.listen(3000 , ()=>{
  console.log("Server Started");
})

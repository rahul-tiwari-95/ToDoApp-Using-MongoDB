var express = require('express');
var bodyParser = require('body-parser')

var {mongoose} = require('./db/mongoose');
var {ToDo} = require('./models/todo');
var {User} = require('./models/user');


var app = express();
app.use(bodyParser.json());

app.post('/todos' , (request , respond)=>{

  var toDo = new ToDo({

    text: request.body.text,
    completedAt: request.body.completedAt

  });

  toDo.save().then((document)=>{

    respond.send(document);
  } , (error)=>{
    respond.status(400).send(error);
  })

})





app.listen(3000 , ()=>{
  console.log("Server Started");
})

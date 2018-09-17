var express = require('express');
var _ = require('lodash');
var bodyParser = require('body-parser')

var {mongoose} = require('./db/mongoose');
var {ToDo} = require('./models/todo');
var {User} = require('./models/user');
const {MongoClient , ObjectID} = require('mongodb');

const port =  3000;
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

app.get('/todos/delete/:id' , (request , respond)=>{

  id = request.params.id;

if (ObjectID.isValid(id)) {


  ToDo.findOneAndDelete({

    _id : id

  }).then((document)=>{

    console.log(document);
    respond.status(200).send(document);

  } , (error)=>{

      console.log("Error Caught");
      respond.status(404).send("Error Caught")
  })


}
else {}



})


app.patch('/todos/:id' , (request , respond)=>{
  id = request.params.id;

  var body = _.pick(request.body , ["text" , "completedStatus"]);

  if(!ObjectID.isValid(id)){
    respond.status(404).send("Error Caught ");
  }
  else{
    if(_.isBoolean(body.completedStatus) && body.completedStatus == true){
      body.completedAt = new Date().getTime();
    }
    else {
      body.completedStatus = false;
      body.completedAt = false;
    }

    ToDo.findByIdAndUpdate(id , {$set: body} , {new : true})
        .then((document , error)=>{

          if(ToDo){
            respond.status(200).send(document);
          }
          else {
            respond.status(404).send();
          }

        })

  }
})






app.listen(port , ()=>{
  console.log("Server Started");
})

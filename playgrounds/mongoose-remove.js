const {mongoose} = require ('./../server/db/mongoose');
const {ObjectID} = require ('mongodb');

const {ToDo} = require ('./../server/models/todo');
const {User} = require ('./../server/models/user');


// ToDo.findOneAndDelete({
//   _id: '5b9f0a9b6e843714c81c6112'})
//   .then((document)=>{
//
//   console.log('Document Removed '+ document);
//
//   //Removed the document via the _ID
// })

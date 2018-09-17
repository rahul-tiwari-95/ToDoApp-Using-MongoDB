var mongoose = require('mongoose'); //Calling the Mongoose Library


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/ToDoApp' , { useNewUrlParser: true });

module.exports = {
  mongoose
}
//Always remember to export the file, else how the fuck would NodeJS know where to fetch that file from??????

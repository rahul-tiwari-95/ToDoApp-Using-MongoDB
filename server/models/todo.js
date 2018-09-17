var mongoose = require('mongoose');

var ToDo = mongoose.model('ToDo' , {
text:{
    type: String,
    required: true
  },
  completedStatus:{
    type: Boolean,
    default: false
  },
  completedAt:{
    type: Number,
    default: null
  }

});

module.exports = {
  ToDo : ToDo
}

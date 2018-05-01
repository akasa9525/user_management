const mongoose = require('mongoose');
const schema = mongoose.Schema;

//create user schema and model
const userSchema = new schema({
  name:{
    type:String,
    required:[true, 'Name is required']
  },
  id:{
    type:Number
  },
  available:{
    type: Boolean,
    default: false
  }
});

const User = mongoose.model('user', userSchema);

module.exports=User;

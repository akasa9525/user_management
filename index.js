const express = require('express');
const bodyParser= require('body-parser');
const mongoose = require('mongoose');
//setup express app
const app = express();
//connect to db
mongoose.connect('mongodb://localhost/userdb');
mongoose.Promise=global.Promise;

app.use(express.static('public'));


app.use(bodyParser.json());

//initialise rourtes
app.use('/api',require('./routes/api'));

//error handling middleware
app.use(function(err,req,res,next){
  res.status(422).send({error:err.message});
});

//listen for requests
app.listen(4000,function(){
  console.log("listening...");
});

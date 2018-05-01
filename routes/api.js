const express = require('express');
const router = express.Router();
const  User = require('../models/users');
//get a list of user form database
router.get('/users',function(req,res,next){
  User.find({name:req.query.name}).then(function(user){
    res.send(user);
  });
  //res.send({type:'get'});
});
//add a new user to db
router.post('/users',function(req,res,next){
  User.create(req.body);
  res.send({type:'post'}).catch(next);
});
//update a user in db
router.put('/users/:id',function(req,res,next){
  User.findByIdAndUpdate({_id:req.params.id}, req.body).then(function(){
    User.findOne({_id: req.params.id}).then(function(user){
        res.send(user);
    })
  });

});
//delete a user in db
router.delete('/users/:id',function(req,res,next){
  console.log(req.params.id);
  res.send({type:'delete'});
});

module.exports = router;

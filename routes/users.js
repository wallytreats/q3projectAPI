const express = require('express');
const router = express.Router();
const knex = require('../knex');
const jwt = require('jsonwebtoken');
const saltRounds = 8;
const bcrypt = require('bcrypt');

router.post('/login', (req, res, next)=>{
  knex('users')
  .select('*')
  .where('users.email', req.body.email)
  .then(function(user){
    delete user[0].hashed_password;
    res.send(user);
    // if(Object.keys(user).length === 0){
    //   res.setHeader('Content-Type', 'text/plain');
    //   res.send("Incorrect email or password");
    // }else{
    //   bcrypt.compare(req.body.password, user.hashed_password, function(err, decode) {
    //     if (err) {
    //       return res.send('Invalid email or password')
    //     } else if (decode === true) {
    //       var token = jwt.sign(user, 'secret');
    //       return res.send({
    //         jwtToken: token
    //       }).status(200);
    //     }
    //   });
    // }
  });
  // res.sendStatus(200);

});

router.post('/create', (req, res, next)=>{
  let newUser = {
    first_name: req.body.firstName,
    last_name: req.body.lastName,
    email: req.body.email,
    hashed_password: 'test',
    phone: req.body.phone
  }
  knex('users')
  .insert(newUser)
  .returning('*')
  .then((returnedObj)=>{
    delete returnedObj[0].hashed_password
    res.send(returnedObj);
  })
});


router.get('/:id', (req, res, next)=>{
  let id = req.params.id;
  knex('users')
  .where('users.id', id)
  .join('water','users.id', '=', 'water.user_id')
  .select('user_id','amount','created_at')
  .then((water)=>{
    res.send(water);
  })

});

router.post('/:id', (req, res, next)=>{
  let id = req.params.id;
  let waterAmount = req.body.amount;
  let waterObj ={
    user_id: id,
    amount: waterAmount
  }
  knex('water')
  .insert(waterObj)
  .returning('*')
  .then(()=>{
    knex('users')
    .where('users.id', id)
    .join('water','users.id', '=', 'water.user_id')
    .select('user_id','amount','created_at')
    .then((water)=>{
      res.send(water);
    })
  })

});

router.patch('/:id', (req, res, next)=>{
  let id = req.params.id;
  let body = req.body;
  console.log(id);
  res.sendStatus(200);
});

router.delete('/:id', (req, res, next)=>{
  let id = req.params.id;
  let body = req.body;
  console.log(id);
  res.sendStatus(200);
});

module.exports = router;

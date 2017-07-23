const express = require('express');
const router = express.Router();
const knex = require('../knex');
const jwt = require('jsonwebtoken');
const saltRounds = 8;
const bcrypt = require('bcrypt');

router.post('/login', (req, res, next)=>{
  knex('user')
  .select('*')
  .where('users.email', '=', reg.body.email)
  .then(function(user){
    if(Object.keys(user).length === 0){
      res.setHeader('Content-Type', 'text/plain');
      res.send("Incorrect email or password");
    }else{
      bcrypt.compare(req.body.password, user.hashed_password, function(err, decode) {
        if (err) {
          return res.send('Invalid email or password')
        } else if (decode === true) {
          var token = jwt.sign(user, 'secret');
          return res.send({
            jwtToken: token
          }).status(200);
        }
      });
    }
  });
  console.log('login');
  // res.sendStatus(200);

});

router.post('/create', (req, res, next)=>{
  console.log('create');
  res.sendStatus(200);
});


router.get('/:id', (req, res, next)=>{
  let id = req.params.id;
  knex('users')
  .where('users.id', id)
  .join('water','users.id', '=', 'water.user_id')
  .select('user_id','amount','created_at')
  .then((water)=>{
    console.log(water);
  })

});

router.post('/:id', (req, res, next)=>{
  let id = req.params.id;
  let waterAmount = req.body.amount;
  let waterObj ={
    user_id: id,
    amount: waterAmount
  }
  knex('users')
  .insert(waterObj)
  .returning('*')
  .then((returnObj)=>{
    res.send(returnObj);
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

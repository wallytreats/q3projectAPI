const express = require('express');
const router = express.Router();
const knex = require('../knex');
const saltRounds = 8;
const bcrypt = require('bcrypt');

router.get('/login', (req, res, next)=>{
  console.log('login');
  res.sendStatus(200);

});

router.get('/create', (req, res, next)=>{
  console.log('create');
  res.sendStatus(200);
});


router.get('/:id', (req, res, next)=>{
  console.log(('id'));
  let id = req.params.id;
  console.log(id);
  res.sendStatus(200);
});

router.post('/:id', (req, res, next)=>{
  let id = req.params.id;
  let body = req.body;
  console.log(id);
  res.sendStatus(200);
});

router.post('/:id', (req, res, next)=>{
  let id = req.params.id;
  let body = req.body;
  console.log(id);
  res.sendStatus(200);
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

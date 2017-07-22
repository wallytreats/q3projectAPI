const express = require('express');
const router = express.Router();
const knex = require('../knex');

router.get('/', (req, res, next)=>{


});

router.get('/:id', (req, res, next)=>{
  let id = req.params.id;

});

router.post('/:id', (req, res, next)=>{
  let id = req.params.id;
  let body = req.body;
});

router.patch('/:id', (req, res, next)=>{
  let id = req.params.id;
  let body = req.body;
});

router.delete('/:id', (req, res, next)=>{
  let id = req.params.id;
  let body = req.body;
});

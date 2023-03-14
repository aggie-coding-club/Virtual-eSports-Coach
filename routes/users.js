const bodyParser = require('body-parser');
const router = require('express').Router();
let User = require('../schemas/users');
const express = require('express');
const sl = require('serverless-http');
const app = express();


app.use(bodyParser);
app.get('/', (req, res) => {
  const newValue = updateDatabase(res.body);
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = sl(router);
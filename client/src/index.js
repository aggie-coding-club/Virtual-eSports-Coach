import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import test from './schemas/users.js';
const express = require('express');
const server = express();
const cors = require('cors')
const PORT = process.env.PORT || 8080;
const mongoose = require('mongoose');
require('dotenv/config')
mongoose.connect(process.env.MONGODB_URI);
const connection = mongoose.connection;
connection.once('open',()=>{console.log('mongo connected!')})
console.log(process.env.MONGODB_URI)
const usersRouter = require('./../../routes/users')
server.use('/users',usersRouter)

server.use(
  express.urlencoded({
    extended: true,
  })
);
server.use(cors())
server.use(express.json());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  
);
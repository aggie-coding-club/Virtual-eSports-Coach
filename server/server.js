const express = require('express');
const server = express();
const cors = require('cors')
const PORT = process.env.PORT || 8080;
const mongoose = require('mongoose');
let User = require('./schemas/users.js');
require('dotenv/config')

server.use(
  express.urlencoded({
    extended: true,
  })
);
server.use(cors())
server.use(express.json());
mongoose.connect(process.env.MONGODB_URI,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});
const connection = mongoose.connection;
connection.once('open',()=>{console.log('mongo connected!')})
const usersRouter = require('./routes/users')
server.use('/users',usersRouter)
const callbackRouter = require('./routes/users')
server.use('/callback',callbackRouter)
// Start the API server
server.listen(PORT, () => console.log('Local app listening'));
console.log(User.find().json)
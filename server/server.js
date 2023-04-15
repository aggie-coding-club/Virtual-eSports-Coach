const express = require('express');
const server = express();
const cors = require('cors')
const PORT = process.env.PORT || 8080;
const mongoose = require('mongoose');
let User = require('./schemas/users.js');
var bodyParser = require('body-parser')
require('dotenv/config')


server.use(cors())
server.use(express.json());
server.use(
  express.urlencoded({
    extended: true,
  })
);
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
const callbackRouter = require('./routes/callback')
server.use('/callback',callbackRouter)
const riotRouter = require('./routes/riot')
server.use('/riot',riotRouter)
// Start the API server
server.listen(PORT, () => console.log('Local app listening'));

console.log(User.find().json)
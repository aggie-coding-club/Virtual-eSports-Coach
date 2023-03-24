const express = require('express');
const server = express();
const cors = require('cors')
const PORT = process.env.PORT || 8080;
const mongoose = require('mongoose');
const app = require('./test');

require('dotenv/config')

/*server.use(
  express.urlencoded({
    extended: true,
  })
);
server.use(cors())
server.use(express.json());*/
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  server.use(express.static('client/build'));
}


// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI);
const connection = mongoose.connection;
connection.once('open',()=>{console.log('mongo connected!')})
console.log(process.env.MONGODB_URI)
const usersRouter = require('./routes/users')
/*server.use('/users',usersRouter)*/

// Start the API server

app.listen(3001, () => console.log('Local app listening on port 3000!'));

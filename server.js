const express = require('express');
const server = express();
const cors = require('cors')
const PORT = process.env.PORT || 8080;
const mongoose = require('mongoose');
require('dotenv/config')

server.use(
  express.urlencoded({
    extended: true,
  })
);
server.use(cors())
server.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  server.use(express.static('client/build'));
}


// Connect to the Mongo DB
mongoose.connect("mongodb+srv://chrislinkou:dtimBW5mijU5spyG@vec-db.46azzw5.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});
const connection = mongoose.connection;
connection.once('open',()=>{console.log('mongo connected!')})
console.log(process.env.MONGODB_URI)
const usersRouter = require('./routes/users')
server.use('/users',usersRouter)

// Start the API server
server.listen(PORT, (err) => {
  // eslint-disable-next-line no-console
  if (err) console.log(err);
  // eslint-disable-next-line no-console
  console.log(
    `Server is listening at: ${PORT} - Click Here => http://localhost:${PORT}`
  );
});

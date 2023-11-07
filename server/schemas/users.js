const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true },
  phone: { type: Number, required: true },
});

userSchema.set('timestamps', true);

const Users = mongoose.model('Users', userSchema);

module.exports = Users;
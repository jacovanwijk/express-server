const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    auto: true,
  },
  name: {
    firstName: {
      type: String,
      required: true,
    },
    lastName: String,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
    dropDups: true,
    validate: (value) => {
      if (!validator.isEmail(value)) {
        throw new Error({error: 'Invalid Email address'});
      }
    },
  },
  password: {
    type: String,
    required: true,
  },
  profilePicture: Buffer,
  created: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;

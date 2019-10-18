const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
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

module.exports = mongoose.model('Author', authorSchema);

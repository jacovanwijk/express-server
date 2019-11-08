const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    auto: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Author',
  },
  text: {
    type: String,
    required: true,
  },
  tags: [
    {
      summary: String,
    },
  ],
  created: {
    type: Date,
    default: Date.now,
  },
});

const Author = mongoose.model('Article', articleSchema);

module.exports = Author;

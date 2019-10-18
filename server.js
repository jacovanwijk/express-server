const express = require('express');
const mongoose = require('mongoose');

const Author = require('./schemas/User');
const Article = require('./schemas/Article');

const app = express();
const port = 2020;

mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Ay Oh, Let\'s Go!');
});

// GET
app.get('/articles', async (req, res) => {
  // TODO retrieve all articles
  const author = await Author.findOne({_id: '5da9a994bcde3a13f2c53fa5'});
  const allArticles = await Article.find({author: author._id});

  await res.json(allArticles);
});

app.get('/articles/:id', async (req, res) => {
  // TODO retrieve specific article
  const article = new Article({
    author: '5da9a994bcde3a13f2c53fa5',
    text: 'Lorem ipsum dolar',
    password: req.password,
  });
  article.save();
});

app.get('/users', async (req, res) => {
  const allUsers = await Author.find();

  res.json(allUsers);
});

app.get('/users/:id', async (req, res) => {
  // TODO retrieve specific user
});

// POST
app.post('/articles', async (res, req) => {
  // TODO upload post
  const user = new Author({
    name: {
      firstName: req.firstName,
      lastName: req.lastname,
    },
    email: req.email,
    password: req.password,
  });
  user.save();
});

app.post('/users', async (res, req) => {
  // TODO upload user
  const user = new Author({
    name: {
      firstName: req.firstName,
      lastName: req.lastname,
    },
    email: req.email,
    password: req.password,
  });
  user.save();
});

// PUT
app.put('/articles/:id', async (res, req) => {
  // TODO update article with specific ID
});

app.put('/users/:id', async (res, req) => {
  // TODO update user with specific ID
});

// DELETE
app.delete('/articles/:id', async (req, res) => {
  // TODO delete article
});

app.delete('/users/:id', async (req, res) => {
  // TODO delete user
});

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});

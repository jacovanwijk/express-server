const express = require('express');
const Article = require('../models/Article');

// eslint-disable-next-line new-cap
const router = express.Router();

// GET
router.get('/articles', async (req, res) => {
  try {
    const allArticles = await Article.find();

    res.json(allArticles);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.get('/articles/:id', async (req, res) => {
  try {
    const article = await Article.findOne({_id: id});

    res.json(article);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// POST
router.post('/articles', async (req, res) => {
  try {
    const article = new Article({
      name: req.body.authorId,
      text: req.body.articleText,
      password: req.body.password,
    });
    await article.save();
    res.status(201).send({article});
  } catch (error) {
    res.status(400).send(error.mesage);
  }
});

// PUT
router.put('/articles/:id', async (req, res) => {
  // TODO update article with specific ID
});

// DELETE
router.delete('/articles/:id', async (req, res) => {
  // TODO delete article
});

module.exports = router;

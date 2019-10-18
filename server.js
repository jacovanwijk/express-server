const express = require('express');

const app = express();
const port = 2020;

app.get('/', (req, res) => {
  res.send('This server is used to retrieve articles');
});

app.get('/articles', (req, res) => {
  // TODO retrieve all articles
  res.send('Retrieved all articles');
});

app.get('/articles/:id', (req, res) => {
  // TODO retrieve specific article
  const id = req.params.id;
  res.send(`Retrieve specific article with id: ${id}`);
});

app.put('/articles/:id', (res, req) => {
  // TODO update article with specific ID
});

app.post('/articles', (res, req) => {
  // TODO upload post with specific ID
});

app.delete('/articles/:id', (req, res) => {
  // TODO delete article
});

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});

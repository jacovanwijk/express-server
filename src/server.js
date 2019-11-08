const bodyParser = require('body-parser');
const express = require('express');
const userRouter = require('./routers/user');
const articleRouter = require('./routers/articles');
const port = process.env.PORT || 3000;
require('./db/db');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use([articleRouter, userRouter]);

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});

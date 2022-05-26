import express from 'express';

import user from './model/user.js';

const app = express();

app.set('view engine', 'hbs');
app.set('views', './view');
app.use(express.static('./public'));

app.get('/user', async (req, res) => {
  const users = await user.find();
  res.json(users);
});

app.listen(3000);

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

app.get('/user/:name', async (req, res) => {
  const { name } = req.params,
        users = await user.find({ name })
  res.json(users);
});

app.get('/user/:name/:age', async (req, res) => {
  const { name, age } = req.params,
        users = await user.find({ name, age })
  res.json(users);
});

app.listen(3000);

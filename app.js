import express from 'express';
import compression from 'compression';
import morgan from 'morgan';
import cors from 'cors';

import user_router from './route/user.js';

const app = express();

app.set('view engine', 'hbs');
app.set('views', './view');
app.use(express.static('./public'));
app.use(compression({ threshold: 0 }));
app.use(morgan('tiny'));
app.use(cors());

app.use('/user', user_router)

app.use((req, res) => {
  const { path } = req;
  res.render('404', { path });
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500);
  res.json({ 'message': '---' });
});

app.listen(3000);

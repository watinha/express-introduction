import express from 'express';

import user_router from './route/user.js';

const app = express();

app.set('view engine', 'hbs');
app.set('views', './view');
app.use(express.static('./public'));

app.use('/user', user_router)

app.listen(3000);

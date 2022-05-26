import express from 'express';
import user from '../model/user.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const users = await user.find();
  res.json(users);
});

router.get('/:name', async (req, res) => {
  const { name } = req.params,
        users = await user.find({ name })
  res.json(users);
});

router.get('/:name/:age', async (req, res) => {
  const { name, age } = req.params,
        users = await user.find({ name, age })
  res.json(users);
});

export default router;

import express from 'express';
import user from '../model/user.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const { name, age } = req.query,
        users = await user.find({ name, age });
  res.json(users);
});

router.post('/', async (req, res) => {
  const { name, age } = req.body,
        new_user = new User({ name, age });
  await new_user.save();
  res.json({ message: 'OK' })
});

export default router;

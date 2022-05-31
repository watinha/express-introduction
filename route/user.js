import express from 'express';
import { query, body, validationResult } from 'express-validator';

import user from '../model/user.js';

const router = express.Router();

router.get('/', query('name').isLength({ min: 3 }), async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ message: '...' });
  }

  const { name, age } = req.query,
        users = await user.find({ name, age });
  res.json(users);
});

router.post('/', body('name').isLength({ min: 3 }), body('age').isInt().toInt(), async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ message: '...' });
  }

  const { name, age } = req.body,
        new_user = new user({ name, age });

  await new_user.save();
  res.json({ message: 'OK' })
});

export default router;

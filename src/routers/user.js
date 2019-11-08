const express = require('express');
const User = require('../models/User');

// eslint-disable-next-line new-cap
const router = express.Router();

// GET
router.get('/users', async (req, res) => {
  try {
    const allUsers = await User.find();

    res.json(allUsers);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/users/:id', async (req, res) => {
  try {
    const user = await User.findOne({_id: id});

    res.json(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

// POST
router.post('/users', async (req, res) => {
  try {
    const user = new User({
      name: {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
      },
      email: req.body.email,
      password: req.body.password,
    });
    await user.save();
    res.status(201).send({user});
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// PUT
router.put('/users/:id', async (req, res) => {
// TODO update user with specific ID
});

// DELETE
router.delete('/users/:id', async (req, res) => {
// TODO delete user
});

module.exports = router;

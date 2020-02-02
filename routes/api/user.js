const express = require('express');
const userController = require('../../controllers/user');
const User = require('../../models/user');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.get('/me', (req, res, next) => {
  const token = req.headers.authorization;
  const email = jwt.verify(token, 'abcdef');
  User.findOne({ email }, (err, user) => {
    return err ? res.json(err) : res.json(user);
  });
});

router.post('/signup', userController.register);

router.post('/login', userController.login);

router.get('/:id', userController.singleUser);

router.get('/list', userController.list);

// router.put('/update', userController.updateUser);


module.exports = router;




const express = require('express');
const userController = require('../../controllers/userContoller');
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

router.post('/register', userController.registerUser);

router.post('/login', userController.loginUser);

router.get('/:userId', userController.findUser);

router.get('/status/list', userController.userList);

// router.put('/update', userController.updateUser);


module.exports = router;




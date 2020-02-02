const express = require('express');
const userController = require('../../controllers/user');
const router = express.Router();

router.get('/me', );

router.post('/signup', userController.register);

router.post('/login', userController.login);

router.get('/:id', userController.singleUser);

router.get('/list', userController.list);

// router.put('/update', userController.updateUser);


module.exports = router;




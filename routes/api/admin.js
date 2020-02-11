const express = require("express");
const router = express.Router();
const adminController = require("../../controllers/admin");

router.get('/me', adminController.verify);

router.post("/login" , adminController.login);

module.exports = router;
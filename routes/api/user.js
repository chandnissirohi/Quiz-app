const express = require("express");
const router = express.Router();
const auth = require("../../modules/auth");
const Admin = require("../../models/admin");
const user = require("../../models/user");

router.use(auth.verifyToken);

// get currently logged in user

router.get("/", (req, res, next) => {
  const {username} = req.body;
  user.findOne({ username }, "-password").exec((err, user) => {
    if (err) return next(err);
    if (!user) {
      Admin.findOne({ username }, "-password").exec((err, user) => {
        if (err) return next(err);
        res.json({ success: true, user });
      });
    } else {
      res.json({ success: true, user });
    }
  });
});

module.exports = router;

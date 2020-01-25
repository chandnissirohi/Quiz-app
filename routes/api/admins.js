const express = require("express");
const Admin = require("../../models/admin");
const jwt = require("jsonwebtoken");
const router = express.Router();

// admin registration

router.post("/", (req, res, next) => {
  Admin.create(req.body, (err, Admin) => {
    if (err) return next(err);
    if (!Admin) return res.json({ message: "Admin not found", success: false });
    res.json({ Admin, success: true });
  });
});

// admin login

router.post("/login", (req, res, next) => {
  let { email, password } = req.body;
  Admin.findOne({ email }, (err, admin) => {
    if (err) return next(err);
    if (!admin) return res.json({ success: false, message: "Invalid email" });
    admin.verifyPassword(password, (err, matched) => {
      if (err) return next(err);
      if (!matched)
        return res
          .status(422)
          .json({ success: false, message: "Invalid password" });

      //   jwt auth

      jwt.sign(
        {
          userid: admin._id,
          username: admin.username,
          email: admin.email,
          isadmin: admin.isAdmin
        },
        "secret",
        (err, token) => {
          if (err) return next(err);
          res.json({ success: true, message: "You are now logged in", token });
        }
      );
    });
  });
});

module.exports = router;
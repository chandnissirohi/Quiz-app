const auth = require('../utils/auth');
const Admin = require('../models/admin');
const jwt = require('jsonwebtoken');
const validator = require('validator');

module.exports = {
  login: (req, res, next) => {
    console.log(req.body)
    const email = req.body.email;
    const password = req.body.password;
    if(!email || !password) return res.status(403).json({error : 'Email and Password are must.'})
    if ( password.length < 6) {
      return res.status(401).json({ error: 'Password should be atleast 6 characters long.' });
    };
    if(!validator.isEmail(email)) return res.status(402).json({error : 'Invalid email'});
    Admin.findOne({email} , (err, admin) => {
      if (err) return next(err);
      console.log(admin , 'inside controller')
      if (!admin) return res.status(401).json({ error: 'NOT ADMIN' });
      if (!admin.confirmPassword(password)) {
        return res.json({ error: 'Not Admin' });
      }
      const token = auth.generateToken(email);
      return res.status(200).json({ admin, token });
    });
  },
  verify: (req, res, next) => {
    const token = req.headers.authorization;
    const email = jwt.verify(token, 'abcdef');
    Admin.findOne({ email }, (err, admin) => {
      return err ? res.json(err) : res.json(admin);
    });
  }
};
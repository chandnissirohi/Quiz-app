const auth = require('../utils/auth');
const Admin = require('../models/admin');
const jwt = require('jsonwebtoken');

module.exports = {
  login: (req, res, next) => {
    const { email, password } = req.body;
    if (email.length < 10 || password.length < 6) {
      return res.status(401).json({ error: 'INVALID PASSWORD' });
    }
    Admin.findOne({ email }, (err, admin) => {
      if (err) return next(err);
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

//   removeStudent: (req, res, next) => {
//     const { id } = req.params;
//     Student.findByIdAndDelete(id, (error, student) => {
//       if (error) return next(error);
//       return res.status(200).json({ student });
//     });
//   },
};
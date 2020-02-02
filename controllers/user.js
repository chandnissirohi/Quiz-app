const validator = require('validator');
const User = require('../models/user');

const auth = require('../utils/auth');

module.exports = {
  registerUser: (req, res, next) => {
    const { username, email, password } = req.body;
    console.log(req.body, 'in controller');
    if (!email || !password || !username) {
      return res.json('Email and password are must.');
    }
    if (!validator.isEmail(email)) {
      return res.json('Invalid email');
    }
    if (password.length < 6) {
      return res.status(401).json('Password should be atleast 6 characters.');
    }
    User.create(req.body, (err, User) => {
        if (err) return next(err);
        if (!User) return res.json({ message: "User not found", success: false });
        console.log(User, "user created");
        return res.status(200).json({ User, success: true });
      });
  },

  loginUser: (req, res, next) => {
    console.log('inside controller');
    const { password, email } = req.body;
    if (!email || !password) {
      return res.status(401).json({ error: 'Invalid User' });
    }
    User.findOne({ email }, (err, user) => {
      console.log('inside findOne');
      console.log(user, 'login user');
      if (err) return next(err);
      if (!user)
        return res.status(402).json({ error: 'User Not Found' });
      if (!User.confirmPassword(password)) {
        return res.status(402).json({ error: 'Password Is Not Correct' });
      }

      const token = auth.generateToken(email);
      console.log(token, 'token');

      return res.status(200).json({ student, token });
    });
  },

  findStudent: (req, res) => {
    Student.findById(req.params.userId)
      .then(student => {
        if (!student) {
          return res.status(404).send({
            message: 'Student not found',
          });
          student;
        }
        res.json({ student });
      })
      .catch(err => {
        if (err.kind === 'ObjectId') {
          return res.status(404).send({
            message: 'Student not found',
          });
        }
        return res.status(500).json({
          message: 'Error retrieving student',
        });
      });
  },

  studentList: (req, res, next) => {
    Student.find({}, (err, students) => {
      if (err) return next(err);
      return res.status(200).json({ students });
    });
  },

  updateStudentPoints: (req, res, next) => {
    let { studentid, contentid } = req.body;
    console.log(studentid, contentid, 'in updatepoints');
    let sentContent = [];
    let points =
      new Date(req.body.createdAt).valueOf() + 172800 * 1000 > Date.now()
        ? 1
        : -1;
    Student.findById(studentid)
      .then(student => {
        sentContent = [...student.sentContent, contentid];
      })
      .then(() =>
        Student.findByIdAndUpdate(
          studentid,
          {
            sentContent,
            points,
          },
          (err, updatedStudent) => {
            console.log(updatedStudent, 'updatedStudent with points');
            err ? res.json(err) : res.json(updatedStudent);
          },
        ),
      );
  },

  updateStudent: (req, res, next) => {
    console.log(req.body, 'req.body');
    const id = req.body.id;
    console.log(id, 'id');
    Student.findByIdAndUpdate(
      id,
      {
        email: req.body.email,
        username: req.body.username,
        isInCampus: req.body.isInCampus,
      },
      { new: true },
      (err, student) => {
        console.log(student, 'student inside ctlr');
        if (err) return next(err);
        return res.status(200).json({ student });
      },
    );
  },
};
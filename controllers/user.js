const validator = require("validator");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const auth = require("../utils/auth");

module.exports = {
  register: (req, res, next) => {
    const { username, email, password } = req.body;
    console.log(req.body, "in controller");
    if (!email || !password || !username) {
      return res.json("Email and password are must.");
    }
    if (!validator.isEmail(email)) {
      return res.json("Invalid email");
    }
    if (password.length < 6) {
      return res.status(401).json("Password should be atleast 6 characters.");
    }
    User.create(req.body, (err, User) => {
      if (err) return next(err);
      if (!User) return res.json({ message: "User not found", success: false });
      console.log(User, "user created");
      return res.status(200).json({ User, success: true });
    });
  },

  login: (req, res, next) => {
    const { password, email } = req.body;
    if (!email || !password) {
      return res.status(401).json({ error: "INVALID USER" });
    }
    User.findOne({ email }, (err, user) => {
      console.log("inside findOne");
      console.log(user, "login user");
      if (err) return next(err);
      if (!user) return res.status(402).json({ error: "User Not Found" });
      if (!user.confirmPassword(password)) {
        return res.status(402).json({ error: "Password Is Not Correct" });
      }

      const token = auth.generateToken(email);
      console.log(token, "token");
      return res.status(200).json({ user, token });
    });
  },

  singleUser: (req, res) => {
    User.findById(req.params.userId)
      .then(user => {
        if (!user) {
          return res.status(404).send({
            message: "User not found"
          });
          user;
        }
        res.json({ user });
      })
      .catch(err => {
        if (err.kind === "ObjectId") {
          return res.status(404).send({
            message: "User not found"
          });
        }
        return res.status(500).json({
          message: "Error retrieving User"
        });
      });
  },

  list: (req, res) => {
    User.find({}, (err, userList) => {
      console.log("in userlist controller");
      if (err) return res.json({ err });
      res.json({ userList, success: true });
    });
  },

  update: (req, res) => {
    console.log(req.body);
    User.findById(
      req.body.quizSetSubmissionData.createdQuizSetSubmission.userId,
      (err, user) => {
        if (err) return res.json({ err });
        let score =
          req.body.quizSetSubmissionData.createdQuizSetSubmission.userScore +
          user.score;
        let quizSubmissions = [
          ...user.quizSubmissions,
          req.body.quizSetSubmissionData.createdQuizSetSubmission.quizId
        ];
        User.findByIdAndUpdate(
          req.body.quizSetSubmissionData.createdQuizSetSubmission.userId,
          { score, quizSubmissions },
          { new: true },
          (err, updatedUser) => {
            if (err) return res.json({ err });
            res.json({ updatedUser, success: true });
          }
        );
      }
    );
  },

  // list: (req, res, next) => {
  //   req.body,
  //     (err, userList) => {
  //       if (err) return next(err);
  //       if (!userList)
  //         return res.json({ success: false, message: "User not found" });
  //       res.json({ userList, success: true });
  //     };
  // },

  verify: (req, res, next) => {
    const token = req.headers.authorization;
    const email = jwt.verify(token, "abcdef");
    User.findOne({ email }, (err, user) => {
      return err ? res.json(err) : res.json(user);
    });
  }
};

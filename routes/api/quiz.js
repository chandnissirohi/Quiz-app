const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

const Quiz = require("../../models/quiz");
const Admin = require("../../models/admin");

// finding all Quiz

router.get("/", (req, res) => {
  Quiz.find({}, (err, quizzes) => {
    if (err) return res.json({ err });
    res.json({ quizzes, success: true });
  });
});

//  create a quiz

router.post("/create", (req, res) => {
  Quiz.create(req.body, (err, createdQuiz) => {
    if (err) return res.json({ err });
    res.json({ createdQuiz, success: true, message: "Quiz Created Succesfully"});
  });
});

//  find one Quiz

router.get("/:id", (req, res) => {
  Quiz.findById({ _id: req.params.id }, (err, quiz) => {
    if (err) return next({ err });
    res.json({ quiz, success: true });
  });
});

// edit Quiz

router.put("/:id", (req, res) => {
  Quiz.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedQuiz) => {
      if (err) return res.json({ err });
      res.json({
        updatedQuiz,
        success: true,
        message: "Updated Quiz Successfully"
      });
    }
  );
});

// delete Quiz

router.delete("/:id", (req, res) => {
  Quiz.findByIdAndDelete(req.params.id, (err, deletedQuiz) => {
    if (err) return res.json({ err });
    res.json({
      deletedQuiz,
      success: true,
      message: "Quiz Deleted Succesfully"
    });
  });
});

module.exports = router;

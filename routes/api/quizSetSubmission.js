const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

const QuizSetSubmission = require("../../models/quizSetSubmission");

// get all quiz set submissions

router.get("/", (req, res) => {
  quizSetSubmission.find({}, (err, quizSetSubmission) => {
    if (err) return res.json({ err });
    res.json({ quizSetSubmission, success: true });
  });
});

// create a quiz set submission

router.post("/create", (req, res) => {
  quizSetSubmission.create(req.body, (err, createdquizSetSubmission) => {
    if (err) return res.json({ err });
    res.json({ createdquizSetSubmission, success: true });
  });
});

module.exports = router;

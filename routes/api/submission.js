const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

const Submission = require("../../models/submission");

// getting all submissions

router.get("/", (req, res) => {
  questionSubmission.find({}, (err, questionSubmission) => {
    if (err) return res.json({ err });
    res.json({ questionSubmission, success: true });
  });
});

// create a submission

router.post("/create", (req, res) => {
  Submission.create(req.body, (err, createdSubmission) => {
    if (err) return res.json({ err });
    res.json({ createdSubmission, success: true });
  });
});

// find one submission

router.get("/:id", (req, res) => {
  Submission.findById(
    { _id: req.params.id },
    (err, submission) => {
      if (err) return next({ err });
      res.json({ submission, success: true });
    }
  );
});

module.exports = router;

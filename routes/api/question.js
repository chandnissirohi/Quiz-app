const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

const Quiz = require("../../models/quiz");
const Question = require("../../models/question");
const Admin = require("../../models/admin");

// finding all Question

router.get("/", (req, res) => {
  Question.find({}, (err, question) => {
    if (err) return res.json({ err });
    res.json({ question, success: true });
  });
});

//  create a question

router.post("/create", (req, res) => 
  Question.create(req.body, (err, createdQuestion) => {
    if (err) return res.json({ err });
    res.json({
      createdQuestion,
      success: true,
      message: "Question Created Succesfully"
    });
  
}));

//  find one Question

router.get("/:id", (req, res) => {
  Question.findById({ _id: req.params.id }, (err, question) => {
    if (err) return next({ err });
    res.json({ question, success: true });
  });
});

// edit Question

router.put("/:id", (req, res) => {
  Question.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedQuestion) => {
      if (err) return res.json({ err });
      res.json({
        updatedQuestion,
        success: true,
        message: "Updated Question Successfully"
      });
    }
  );
});

// delete Question

router.delete("/:id", (req, res) => {
  Question.findByIdAndDelete(req.params.id, (err, deletedQuestion) => {
    if (err) return res.json({ err });
    res.json({
      deletedQuestion,
      success: true,
      message: "Question Deleted Succesfully"
    });
  });
});

module.exports = router;

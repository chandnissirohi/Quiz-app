const express = require("express");
const Quiz = require("../../models/quiz");
const router = express.Router();
// const Quizset = require("../../models/quizset");
const auth = require("../../modules/auth");

// list all quizes

router.get("/", (req, res, next) => {
  Quiz.find({})
    .populate("author", "-password")
    .exec((err, quizzes) => {
      if (err) return next(err);
      if (!quizzes)
        return res.json({ success: false, message: "No quiz found" });
      res.json({ quizzes, success: true });
    });
});

router.use(auth.verifyToken);

// Admin access only

router.post("/", (req, res, next) => {
  const adminid = req.user.adminid;
  Quiz.create(req.body, (err, quizTocreate) => {
    if (err) return next(err);
    if (!quizTocreate)
      return res.json({ success: false, message: "Quiz not found" });
    Quiz.findByIdAndUpdate(
      quizTocreate.id,
      { author: adminid },
      (err, updateQuiz) => {
        if (err) return next(err);
        if (!updateQuiz)
          return res.json({ success: false, message: "Admin not found" });
      }
    );
    // Quizset.findOne({ topic: quizTocreate.quizset }, (err, quizset) => {
    //   if (err) return next(err);
    //   if (!quizset) {
    //     Quizset.create(
    //       { $push: { quiz: quizTocreate._id }, topic: quizTocreate.quizset },
    //       { new: true },
    //       (err, createdQuizset) => {
    //         if (err) return next(err);
    //       }
    //     );
    //   } else if (quizset) {
    //     Quizset.findByIdAndUpdate(
    //       quizset._id,
    //       { $push: { quiz: quizTocreate._id } },
    //       { new: true },
    //       (err, createdQuizset) => {
    //         if (err) return next(err);
    //       }
    //     );
    //   }
    // });
    res
      .status(200)
      .json({
        success: true,
        message: "Quiz created Successfully!",
        quizTocreate
      });
  });
});

// update a quiz
router.put("/:id", (req, res, next) => {
  const id = req.params.id;
  Quiz.findByIdAndUpdate(id, req.body, (err, quizToUpdate) => {
    if (err) return next(err);
    if (!quizToUpdate) res.json({ success: false, message: "Quiz not found" });
    res.json({ success: true, quizToUpdate });
  });
});

// delete a quiz

router.delete("/:id", (req, res, next) => {
  const id = req.params.id;
  Quiz.findByIdAndDelete(id, (err, quizToDelete) => {
    if (err) return next(err);
    if (!quizToDelete)
      return res.json({ success: false, message: "Quiz not found" });
    // Quizset.findOneAndUpdate(
    //   { topic: quizToDelete.quizset },
    //   (err, updatedQuizset) => {
    //     if (err) return next(err);
    //     if (!updatedQuizset)
    //       return res.json({ success: false, message: "Can't update Quizset" });
    //   }
    // );
    res.json({
      success: true,
      message: "Successfully deleted Quiz",
      quizToDelete
    });
  });
});

module.exports = router;

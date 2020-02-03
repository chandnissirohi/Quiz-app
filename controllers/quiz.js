const Quiz = require("../models/quiz");

module.exports = {
    list: (req , res) => {
        Quiz.find({}, (err, quizzes) => {
            if (err) return res.json({ err });
            res.json({ quizzes, success: true });
          });
    },
    create: (req , res) => {
        Quiz.create(req.body, (err, createdQuiz) => {
            if (err) return res.json({ err });
            res.json({ createdQuiz, success: true, message: "Quiz Created Succesfully"});
          });
    },
    singleQuiz: (req, res) => {
        Quiz.findById({ _id: req.params.id }, (err, quiz) => {
          if (err) return next({ err });
          res.json({ quiz, success: true });
        });
      },
    update: (req, res) => {
        console.log(req.body , "req in /update");
        const quizId = req.body.quizId;
        Quiz.findById(quizId, (err, quiz) => {
          if (err) return next({ err });
          console.log(quiz);
          const questionSet = [...quiz.questionSet, req.body.question];
          const totalScore = quiz.totalScore + 1;
          // console.log(questionSet, "inside controller")
          Quiz.findByIdAndUpdate(
            quizId,
            { questionSet, totalScore },
            { new : true },
            (err, updatedQuiz) => {
              if (err) return next({err});
              console.log(updatedQuiz, 'updated');
              res.json({
                updatedQuiz,
                success: true,
                message: "Quiz updated Succesfully"
              });
            }
          );
        });
      },
      delete: (req, res) => {
        Quiz.findByIdAndDelete(req.params.id, (err, deletedQuiz) => {
          if (err) return res.json({ err });
          res.json({
            deletedQuiz,
            success: true,
            message: "Quiz Deleted Succesfully"
          });
        });
      }
}
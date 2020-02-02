const QuizSetSubmission = require("../../models/quizSetSubmission");


module.exports = {
    list: (req, res) => {
        QuizSetSubmission.find({}, (err, quizSetSubmission) => {
          if (err) return res.json({ err });
          res.json({ quizSetSubmission, success: true });
        });
      },
    create: (req, res) => {
        QuizSetSubmission.create(req.body, (err, createdquizSetSubmission) => {
          if (err) return res.json({ err });
          res.json({ createdquizSetSubmission, success: true });
        });
      }
   
}
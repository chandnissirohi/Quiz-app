const Question = require("../models/question");

module.exports = {
    list: (req , res) => {
        Question.find({} , (err , questions) => {
            if (err) return res.json({err});
            res.json({questions , success : true})
        });
    },
    singleQuestion: (req , res) => {
        Question.findById({ _id: req.params.id }, (err, question) => {
                if (err) return next({ err });
                res.json({ question, success: true });
              });
    },
    create: (req , res) => {
        Question.create(req.body, (err, createdQuestion) => {
                if (err) return res.json({ err });
                res.json({
                  createdQuestion,
                  success: true,
                  message: "Question Created Succesfully"
                }); 
         })
    },
    update: (req, res) => {
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
    },
    delete: (req , res) => {
        Question.findByIdAndDelete(req.params.id, (err, deletedQuestion) => {
                if (err) return res.json({ err });
                res.json({
                  deletedQuestion,
                  success: true,
                  message: "Question Deleted Succesfully"
                });
              });
    }  
}
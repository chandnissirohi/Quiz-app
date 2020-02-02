const validator = require('validator');
const Submission = require('../models/submission');

module.exports = {
    submissionList: (req, res) => {
          questionSubmission.find({}, (err, questionSubmission) => {
            if (err) return res.json({ err });
            res.json({ questionSubmission, success: true });
          });
        },
    createSubmission: (req, res) => {
          Submission.create(req.body, (err, createdSubmission) => {
            if (err) return res.json({ err });
            res.json({ createdSubmission, success: true });
          });
        },
    singleSubmission: (req , res) => {
        Submission.findById(
                { _id: req.params.id },
                (err, submission) => {
                  if (err) return next({ err });
                  res.json({ submission, success: true });
                }
        );
    }
}
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const submissionSchema = new Schema(
  {
    quizId: {
      type: String,
      required: true
    },
    quizScore: {
      type: Number,
      required: true
    },
    questionId: {
      type: String,
      required: true
    },
    submittedAnswer: {
      type: String,
      required: true
    },
    userId: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Submission", submissionSchema);

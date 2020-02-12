const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const quizSetSubmissionSchema = new Schema(
  {
    submissions: [
      {
        type: Schema.Types.ObjectId,
        ref: "submissionSchema"
      }
    ],
    quizTotalScore: {
      type: Number,
      required: true,
      default: 0
    },
    userScore: {
      type: Number,
      required: true,
      default: 0
    },

    userId: {
      type: String,
      required: true
    },
    quizId: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("QuizSetSubmission", quizSetSubmissionSchema);

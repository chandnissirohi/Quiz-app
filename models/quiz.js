const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const quizSchema = new Schema(
  {
    quizTitle: {
      type: String,
      required: true,
      unique: true
    },
    questionSet: [],
    totalScore: {
      type: Number,
      default: 0,
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Quiz", quizSchema);

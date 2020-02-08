const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const questionSchema = new Schema(
  {
    question: {
      type: String,
      required: true
    },

    option1: {
      type: String,
      required: true
    },
    option2: {
      type: String,
      required: true
    },
    option3: {
      type: String,
      required: true
    },
    option4: {
      type: String,
      required: true
    },
    answer: {
      type: String,
      required: true
      // enum: ["option1", "option2", "option3", "option4"]
    },
    quizId: {
      type: Schema.Types.ObjectId,
      ref: "Quiz"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Question", questionSchema);

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const quizSchema = new Schema(
  {
    quizTitle: {
      type: String,
      required: true,
      unique: true
    },
    questionSet: [
      {
        type: Schema.Types.ObjectId,
        ref: "questionSchema"
      }
    ],
    totalScore: {
      type: Number
      // required: true
    }

    // userId: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: "userSchema"
    //   }
    // ]
  },
  { timestamps: true }
);

module.exports = mongoose.model("Quiz", quizSchema);

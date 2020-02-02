const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  quizSubmissions: [
    {
      type: Schema.Types.ObjectId,
      ref: "quizSetSubmissionSchema"
    }
  ],
  score: {
    type: Number,
    default: 0,
  }
});

userSchema.pre("save", function(next) {
  if (this.password && this.isModified("password")) {
    bcrypt.hash(this.password, 10, (err, password) => {
      if (err) return res.json({ err });
      this.password = password;
      next();
    });
  } else {
    next();
  }
});

userSchema.methods.verifyPassword = function(password, done) {
  bcrypt.compare(password, this.password, (err, matched) => {
    if (err) return done(null, false);
    done(null, matched);
  });
};

module.exports = mongoose.model("User", userSchema);

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const { Schema } = mongoose;

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
  },
  {
    timestamps: true  
  }
  );
  
  

userSchema.pre('save', function(next) {
  if (this.password) {
    this.password = bcrypt.hashSync(this.password, 10);
    console.log(this.password, 'this.password');
    next();
  }
});

userSchema.methods.confirmPassword = function(password) {
  console.log('inside schema');
  return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;


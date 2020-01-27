var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/api/users');
var userRouter = require('./routes/api/user.js')
var adminsRouter = require('./routes/api/admins')
var quizzesRouter = require('./routes/api/quizzes')



var app = express();

// Middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//connecting to mongoose
mongoose.connect(
    "mongodb://localhost/Quizapp",
    { useNewUrlParser: true, useUnifiedTopology: true },
    function(err) {
      if(err) {
        console.log(err, 'Not Connect To DB');
      } else {
        console.log('Connected Successfully To DB')
        require('./utils/seed')
      }
    }
  );


// Routes
app.use('/', indexRouter);
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/admins', adminsRouter)
app.use('/api/v1/quizzes', quizzesRouter)
app.use('/api/v1/user', userRouter)

module.exports = app;

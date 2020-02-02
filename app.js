var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/api/users");
var userRouter = require("./routes/api/user.js");
var adminRouter = require("./routes/api/admin");
var questionRouter = require("./routes/api/question");
var quizRouter = require("./routes/api/quiz");
var submissionRouter = require("./routes/api/submission");
var quizSetSubmissionRouter = require("./routes/api/quizSetSubmission");
var app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Middlewares
app.use(logger("dev"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use("/", express.static(path.join(__dirname, "dist")));

// Webpack config
if (process.env.NODE_ENV === "development") {
  const webpack = require("webpack");
  const webpackConfig = require("./webpack.config");
  const compiler = webpack(webpackConfig);

  app.use(
    require("webpack-dev-middleware")(compiler, {
      noInfo: true,
      publicPath: webpackConfig.output.publicPath
    })
  );
  app.use(require("webpack-hot-middleware")(compiler));
}

//connecting to mongoose
mongoose.connect(
  "mongodb://localhost/Quizapp",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  function(err) {
    if (err) {
      console.log(err, "Not Connect To DB");
    } else {
      console.log("Connected Successfully To DB");
      require("./utils/seed");
    }
  }
);

// Routes
app.use("/api/v1/users", usersRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/admin/question", questionRouter);
app.use("/api/v1/admin/quiz", quizRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/user/submission", submissionRouter);
app.use("/api/v1/user/quizset-submission", quizSetSubmissionRouter);
app.use("/", indexRouter);

module.exports = app;

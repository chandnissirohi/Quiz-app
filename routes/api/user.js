const express = require("express");
const userController = require("../../controllers/user");
const quizController = require("../../controllers/quiz");
const router = express.Router();

router.get("/me", userController.verify);

router.post("/signup", userController.register);

router.post("/login", userController.login);

router.get("/:id", userController.singleUser);

router.get("/", userController.list);

router.put("/update" , userController.update);

// router.put('/update', userController.updateUser);

router.get("/quiz/:id", quizController.singleQuiz);

module.exports = router;

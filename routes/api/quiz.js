const express = require("express");
const router = express.Router();
const quizController = require("../../controllers/quiz")

router.get("/", quizController.list);

router.post("/create", quizController.create);

router.get("/:id", quizController.singleQuiz);

router.put("/update", quizController.update);

router.delete("/:id", quizController.delete);

module.exports = router;

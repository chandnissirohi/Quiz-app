const express = require("express");
const router = express.Router();

const quizSetController = require("../../controllers/quizSetSubmission");

router.get("/", quizSetController.list);

router.post("/create", quizSetController.create);

// router.put("/update", quizSetController.update);

module.exports = router;

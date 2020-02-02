const express = require("express");
const router = express.Router();
const questionController = require("../../controllers/question")
const jwt = require("jsonwebtoken");

const Quiz = require("../../models/quiz");
const Question = require("../../models/question");
const Admin = require("../../models/admin");

router.get("/" , questionController.list);

router.get("/:id" , questionController.singleQuestion);

router.post("/create" , questionController.create);

router.put("/update/:id" , questionController.update);

router.delete("/delete/:id" , questionController.delete);


module.exports = router;

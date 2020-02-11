const express = require("express");
const router = express.Router();

const submissionController = require("../../controllers/submission")

router.get("/list" , submissionController.submissionList);

router.post("/create" , submissionController.createSubmission);

router.get("/:id" , submissionController.singleSubmission);


module.exports = router;

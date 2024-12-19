const express = require("express");
const questionTypeController = require("../controllers/questionTypeController");

const router = express.Router();

router
  .route("/")
  .get(questionTypeController.getAllQuestions)
  .post(questionTypeController.createQuestionType);

router
  .route("/:id")
  .get(questionTypeController.getQuestion)
  .patch(questionTypeController.updateQuestionType)
  .delete(questionTypeController.deleteQuestionType);

module.exports = router;

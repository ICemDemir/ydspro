const express = require("express");
const vocabularyController = require("./../controllers/vocabularyController");

const router = express.Router();

router
  .route("/")
  .get(vocabularyController.getAllVocabulary)
  .post(vocabularyController.createVocabulary);

router
  .route("/:id")
  .get(vocabularyController.getVocabulary)
  .patch(vocabularyController.updateVocabulary)
  .delete(vocabularyController.deleteVocabulary);

module.exports = router;

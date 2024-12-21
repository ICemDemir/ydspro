const express = require("express");
const readingController = require("./../controllers/readingController");

const router = express.Router();

router
  .route("/")
  .get(readingController.getAllReading)
  .post(readingController.createReading);

router
  .route("/:id")
  .get(readingController.getReading)
  .patch(readingController.updateReading)
  .delete(readingController.deleteReading);

module.exports = router;

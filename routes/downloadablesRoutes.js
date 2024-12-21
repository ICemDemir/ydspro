const express = require("express");
const downloadablesController = require("./../controllers/downloadablesController");

const router = express.Router();

router
  .route("/")
  .get(downloadablesController.getAllDownloadables)
  .post(downloadablesController.createDownloadable);

router
  .route("/:id")
  .get(downloadablesController.getDownloadable)
  .patch(downloadablesController.updateDownloadable)
  .delete(downloadablesController.deleteDownloadable);

module.exports = router;

const mongoose = require("mongoose");

const downloadablesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "A downloadable file must have a title"],
    unique: true,
  },
  description: {
    type: String,
    maxlength: [
      50,
      "A description for a downloadable file can have 50 characters at most",
    ],
  },
  filePath: {
    type: String,
    // required: [true, "A downloadable file must have a file path"],
  },
  uploadAt: {
    type: Date,
    default: Date.now,
  },
});

const Downloadables = mongoose.model("Downloadables", downloadablesSchema);

module.exports = Downloadables;

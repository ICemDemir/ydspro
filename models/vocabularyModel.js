const mongoose = require("mongoose");

const vocabularySchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "A vocabulary document must have a title"],
  },
  list: {
    type: Array,
    required: [true, "A vocabulary document must have a list"],
  },
  test: {
    type: String,
    required: [true, "A vocabulary document must have a test"],
  },
});

const Vocabulary = mongoose.model("Vocabulary", vocabularySchema, "vocabulary");

module.exports = Vocabulary;

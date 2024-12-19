const mongoose = require("mongoose");

const ReadingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "A reading text must have a title"],
  },
  text: {
    type: String,
    required: [true, "A reading text must have a text"],
  },
  questions: {
    type: String,
    required: [true, "A reading text must have questions"],
  },
  answers: {
    type: String,
    required: [true, "A reading text must have answers to the questions"],
  },
});

const Reading = mongoose.model("Reading", ReadingSchema);

module.exports = Reading;

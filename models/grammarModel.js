const mongoose = require("mongoose");

const grammarSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A grammar subject must have a name"],
    unique: true,
  },
  description: {
    type: String,
  },
  tags: {
    type: Array,
    required: [true, "A grammar subject must have tags"],
  },
  content: {
    type: String,
    required: [true, "A grammar subject must have a content"],
  },
  questions: {
    type: String,
  },
});

const Grammar = mongoose.model("Grammar", grammarSchema, "grammar");

module.exports = Grammar;

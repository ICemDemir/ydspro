const mongoose = require("mongoose");

const questionTypeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A question type must have a name"],
  },
  explanation: {
    type: String,
    required: [true, "A question type must have an explanation"],
  },
  examples: {
    type: Array,
    required: [true, "A question type must have examples"],
  },
  tags: {
    type: Array,
    required: [true, "A question type must have a list of tags"],
  },
});

const QuestionType = mongoose.model(
  "QuestionType",
  questionTypeSchema,
  "questiontypes"
);

module.exports = QuestionType;

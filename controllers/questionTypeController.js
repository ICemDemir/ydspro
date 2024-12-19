const QuestionType = require("../models/questionTypeModel");

exports.getAllQuestions = async (req, res) => {
  try {
    const questionTypes = await QuestionType.find();

    res.status(200).json({
      status: "success",
      results: questionTypes.length,
      data: questionTypes,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getQuestion = async (req, res) => {
  try {
    const question = await QuestionType.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: question,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.createQuestionType = async (req, res) => {
  try {
    const newQuestion = await QuestionType.create(req.body);

    res.status(201).json({
      status: "success",
      message: "A new question type created",
      data: newQuestion,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.updateQuestionType = async (req, res) => {
  try {
    const question = await QuestionType.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json({
      status: "success",
      message: "Question type updated",
      data: { question },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.deleteQuestionType = async (req, res) => {
  try {
    await QuestionType.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

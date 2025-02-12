const QuestionType = require("../models/questionTypeModel");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

exports.getAllQuestions = catchAsync(async (req, res, next) => {
  const questionTypes = await QuestionType.find();

  res.status(200).json({
    status: "success",
    results: questionTypes.length,
    data: questionTypes,
  });
});

exports.getQuestion = catchAsync(async (req, res, next) => {
  const question = await QuestionType.findById(req.params.id);

  if (!question) {
    return next(new AppError("No question document found with that id", 404));
  }

  res.status(200).json({
    status: "success",
    data: question,
  });
});

exports.createQuestionType = catchAsync(async (req, res, next) => {
  const newQuestion = await QuestionType.create(req.body);

  res.status(201).json({
    status: "success",
    message: "A new question type created",
    data: newQuestion,
  });
});

exports.updateQuestionType = catchAsync(async (req, res, next) => {
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
});

exports.deleteQuestionType = catchAsync(async (req, res, next) => {
  await QuestionType.findByIdAndDelete(req.params.id);

  res.status(204).json({
    status: "success",
    data: null,
  });
});

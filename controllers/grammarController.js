const Grammar = require("../models/grammarModel");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

exports.getAllGrammar = catchAsync(async (req, res, next) => {
  const grammar = await Grammar.find();

  res.status(200).json({
    status: "success",
    results: grammar.length,
    grammar,
  });
});

exports.getGrammar = catchAsync(async (req, res, next) => {
  const grammar = await Grammar.findById(req.params.id);

  if (!grammar) {
    return next(new AppError("No grammar document found with that id", 404));
  }

  res.status(200).json({
    status: "success",
    data: grammar,
  });
});

exports.createGrammar = catchAsync(async (req, res, next) => {
  const newGrammar = await Grammar.create(req.body);

  res.status(201).json({
    status: "success",
    message: "New grammar document successfully created",
    data: newGrammar,
  });
});

exports.updateGrammar = catchAsync(async (req, res, next) => {
  const updatedGrammar = await Grammar.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(200).json({
    status: "success",
    message: "Grammar document updated",
    data: { updatedGrammar },
  });
});

exports.deleteGrammar = catchAsync(async (req, res, next) => {
  await Grammar.findByIdAndDelete(req.params.id);

  res.status(204).json({
    status: "success",
    message: "Grammar document deleted",
    data: null,
  });
});

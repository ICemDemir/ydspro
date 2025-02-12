const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const Vocabulary = require("./../models/vocabularyModel");

exports.getAllVocabulary = catchAsync(async (req, res, next) => {
  const allVocabulary = await Vocabulary.find();

  res.status(200).json({
    status: "success",
    results: allVocabulary.length,
    data: allVocabulary,
  });
});

exports.getVocabulary = catchAsync(async (req, res, next) => {
  const theVocabulary = await Vocabulary.findById(req.params.id);

  if (!theVocabulary) {
    return next(new AppError("No vocabulary document found with that id", 404));
  }

  res.status(200).json({
    status: "success",
    data: theVocabulary,
  });
});

exports.createVocabulary = catchAsync(async (req, res, next) => {
  const newVocabulary = await Vocabulary.create(req.body);

  res.status(201).json({
    status: "success",
    message: "New vocabulary created",
    data: newVocabulary,
  });
});

exports.updateVocabulary = catchAsync(async (req, res, next) => {
  const updatedVocabulary = await Vocabulary.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(200).json({
    status: "success",
    message: "Vocabulary updated",
    data: { updatedVocabulary },
  });
});

exports.deleteVocabulary = catchAsync(async (req, res, next) => {
  await Vocabulary.findByIdAndDelete(req.params.id);

  res.status(200).json({
    status: "success",
    message: "Vocabulary deleted",
    data: null,
  });
});

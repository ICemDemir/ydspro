const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const Reading = require("./../models/readingModel");

exports.getAllReading = catchAsync(async (req, res, next) => {
  const Readings = await Reading.find();

  res.status(200).json({
    status: "success",
    results: Readings.length,
    data: Readings,
  });
});

exports.getReading = catchAsync(async (req, res, next) => {
  const theReading = await Reading.findById(req.params.id);

  if (!theReading) {
    return next(new AppError("No reading document found with that id", 404));
  }

  res.status(200).json({
    status: "success",
    data: theReading,
  });
});

exports.createReading = catchAsync(async (req, res, next) => {
  const newReading = await Reading.create(req.body);

  res.status(201).json({
    status: "success",
    message: "New reading created",
    data: newReading,
  });
});

exports.updateReading = catchAsync(async (req, res, next) => {
  const updatedReading = await Reading.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(200).json({
    status: "success",
    message: "Reading updated",
    data: { updatedReading },
  });
});

exports.deleteReading = catchAsync(async (req, res, next) => {
  await Reading.findByIdAndDelete(req.params.id);

  res.status(200).json({
    status: "success",
    message: "Reading deleted",
    data: null,
  });
});

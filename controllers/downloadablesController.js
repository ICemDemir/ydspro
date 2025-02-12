const AppError = require("../utils/appError");
const Downloadables = require("./../models/downloadablesModel");
const catchAsync = require("./../utils/catchAsync");

exports.getAllDownloadables = catchAsync(async (req, res, next) => {
  const downloadables = await Downloadables.find();

  res.status(200).json({
    status: "success",
    results: downloadables.length,
    data: downloadables,
  });
});

exports.getDownloadable = catchAsync(async (req, res, next) => {
  const downloadable = await Downloadables.findById(req.params.id);

  if (!downloadable) {
    return next(new AppError("No downloadable found with that id", 404));
  }

  res.status(200).json({
    status: "success",
    data: downloadable,
  });
});

exports.createDownloadable = catchAsync(async (req, res, next) => {
  const newDownloadable = await Downloadables.create(req.body);

  res.status(201).json({
    status: "success",
    data: newDownloadable,
  });
});

exports.updateDownloadable = catchAsync(async (req, res, next) => {
  const updatedDownloadable = await Downloadables.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  res.status(200).json({
    status: "success",
    message: "Downloadable updated",
    data: { updatedDownloadable },
  });
});

exports.deleteDownloadable = catchAsync(async (req, res, next) => {
  await Downloadables.findByIdAndDelete(req.params.id);

  res.status(204).json({
    status: "success",
    message: "Downloadable deleted",
    data: null,
  });
});

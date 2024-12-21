const Downloadables = require("./../models/downloadablesModel");

exports.getAllDownloadables = async (req, res) => {
  try {
    const downloadables = await Downloadables.find();

    res.status(200).json({
      status: "success",
      results: downloadables.length,
      data: downloadables,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getDownloadable = async (req, res) => {
  try {
    const downloadable = await Downloadables.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: downloadable,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.createDownloadable = async (req, res) => {
  try {
    const newDownloadable = await Downloadables.create(req.body);

    res.status(201).json({
      status: "success",
      data: newDownloadable,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.updateDownloadable = async (req, res) => {
  try {
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
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.deleteDownloadable = async (req, res) => {
  try {
    await Downloadables.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: "success",
      message: "Downloadable deleted",
      data: null,
    });
  } catch {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

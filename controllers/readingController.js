const Reading = require("./../models/readingModel");

exports.getAllReading = async (req, res) => {
  try {
    const Readings = await Reading.find();

    res.status(200).json({
      status: "success",
      results: Readings.length,
      data: Readings,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getReading = async (req, res) => {
  try {
    const theReading = await Reading.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: theReading,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.createReading = async (req, res) => {
  try {
    const newReading = await Reading.create(req.body);

    res.status(201).json({
      status: "success",
      message: "New reading created",
      data: newReading,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.updateReading = async (req, res) => {
  try {
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
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.deleteReading = async (req, res) => {
  try {
    await Reading.findByIdAndDelete(req.params.id);

    res.status(200).json({
      status: "success",
      message: "Reading deleted",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

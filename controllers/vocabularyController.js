const Vocabulary = require("./../models/vocabularyModel");

exports.getAllVocabulary = async (req, res) => {
  try {
    const allVocabulary = await Vocabulary.find();

    res.status(200).json({
      status: "success",
      results: allVocabulary.length,
      data: allVocabulary,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getVocabulary = async (req, res) => {
  try {
    const theVocabulary = await Vocabulary.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: theVocabulary,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.createVocabulary = async (req, res) => {
  try {
    const newVocabulary = await Vocabulary.create(req.body);

    res.status(201).json({
      status: "success",
      message: "New vocabulary created",
      data: newVocabulary,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.updateVocabulary = async (req, res) => {
  try {
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
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.deleteVocabulary = async (req, res) => {
  try {
    await Vocabulary.findByIdAndDelete(req.params.id);

    res.status(200).json({
      status: "success",
      message: "Vocabulary deleted",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

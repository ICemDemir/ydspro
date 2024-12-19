const Grammar = require("../models/grammarModel");

exports.getAllGrammar = async (req, res) => {
  try {
    const grammar = await Grammar.find();

    res.status(200).json({
      status: "success",
      results: grammar.length,
      grammar,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};

exports.getGrammar = async (req, res) => {
  try {
    const grammar = await Grammar.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: grammar,
    });
  } catch (err) {
    res.status(404).json({
      status: "error",
      message: err,
    });
  }
};

exports.createGrammar = async (req, res) => {
  try {
    const newGrammar = await Grammar.create(req.body);

    res.status(201).json({
      status: "success",
      message: "New grammar document successfully created",
      data: newGrammar,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.updateGrammar = async (req, res) => {
  try {
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
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.deleteGrammar = async (req, res) => {
  try {
    await Grammar.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: "success",
      message: "Grammar document deleted",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

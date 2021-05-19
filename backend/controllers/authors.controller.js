const Author = require("../models/author");

const createAuthor = async (req, res) => {
  try {
    const author = new Author({ name: req.body.name });

    await author.save();

    res.status(201).json({
      success: true,

      data: author,

      message: `Author ${author.name} created!`,
    });
  } catch (err) {
    res.status(400).json({
      success: false,

      error: err.message,
    });
  }
};

const getSingleAuthor = async (req, res) => {
  try {
    const author = await Author.findById(req.params.id);

    res.status(200).json({
      success: true,

      data: author,

      message: `Author ${author.id} found!`,
    });
  } catch (err) {
    res.status(400).json({
      success: false,

      error: err.message,
    });
  }
};

const updateAuthor = async (req, res) => {
  try {
    const author = await Author.findByIdAndUpdate(
      req.params.id,

      { name: req.body.name },

      { new: true },
    );

    res.status(200).json({
      success: true,

      data: author,

      message: `Author ${author.id} updated!`,
    });
  } catch (err) {
    res.status(400).json({
      success: false,

      error: err.message,
    });
  }
};

const deleteAuthor = async (req, res) => {
  try {
    const author = await Author.findByIdAndDelete(req.params.id);

    res.status(204).json({
      success: true,

      data: author,

      message: `Deleted author ${author.id}`,
    });
  } catch (err) {
    res.status(400).json({
      success: fail,

      error: err.message,
    });
  }
};

module.exports = {
  createAuthor,
  getSingleAuthor,
  updateAuthor,
  deleteAuthor,


};
const Book = require("../models/book");

const createBook = async (req, res) => {
  try {
    const { title, description, author } = req.body;

    const book = new Book({ title, description, author });

    await book.save();

    res.status(201).json({
      success: true,
      data: book,
      message: `Book ${book.title} created!`,
    });
  } catch (err) {
    res.status(400).json({
      success: false,

      error: err.message,
    });
  }
};

const getBooks = async (req, res) => {
  try {
    const books = await Book.find({}).populate("author");

    res.status(200).json({
      success: true,
      data: books,
      message: `${books.length} books found!`,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message,
    });
  }
};

module.exports = {
  createBook,
  getBooks,
};

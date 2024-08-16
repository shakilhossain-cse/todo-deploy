const BookModel = require("../model/book.model");

// Get All Books
const getAllBooks = async (req, res) => {
  try {
    const books = await BookModel.find({});
    res
      .status(200)
      .json({ status: "success", data: { nbHits: books.length, books } });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

// Create a Book
const createBook = async (req, res) => {
  try {
    const book = await BookModel.create(req.body);
    res.status(201).json({ status: "success", data: { book } });
  } catch (error) {
    res.status(400).json({ status: "error", message: error.message });
  }
};

// Update a Book
const updateBook = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await BookModel.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!book) {
      return res
        .status(404)
        .json({ status: "error", message: "Book not found" });
    }
    res.status(200).json({ status: "success", data: { book } });
  } catch (error) {
    res.status(400).json({ status: "error", message: error.message });
  }
};

// Delete a Book
const deleteBook = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await BookModel.findByIdAndDelete(id);
    if (!book) {
      return res
        .status(404)
        .json({ status: "error", message: "Book not found" });
    }
    res
      .status(200)
      .json({ status: "success", message: "Book deleted successfully" });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

module.exports = { getAllBooks, createBook, updateBook, deleteBook };

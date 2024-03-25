const express = require('express');
const Book = require('../models/bookModel.js');
const router = express.Router();


router.post("/", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      res.status(400).send({ message: "Please provide all the required fields" });
      return;
    }
    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear
    }
    const book = await Book.create(newBook);
    return res.status(200).json(book);
  }
  catch (e) {
    console.log(e.message);
    res.status(500).send({ message: e.message });
  }
})
router.get("/", async (req, res) => {
  try {
    const books = await Book.find({});
    return res.status(200).json({
      count: books.length,
      data: books
    });
  }
  catch (e) {
    console.log(e.message);
    res.status(500).send({ message: e.message });
  }
})
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const book = await Book.findById(id);
    if (!book) {
      return res.status(400).json({ message: 'Book not found' });
    }
    return res.status(200).json(book);
  }
  catch (e) {
    console.log(e.message);
    res.status(500).send({ message: e.message });
  }
})
router.put("/:id", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      res.status(400).send({ message: "Please provide all the required fields" });
      return;
    }
    const id = req.params.id;
    const result = await Book.findByIdAndUpdate(id, req.body);

    if (!result) {
      return res.status(400).json({ message: 'Book not found' });
    }
    return res.status(200).send({ message: 'Book successfully updated' });
  }
  catch (e) {
    console.log(e.message);
    res.status(500).send({ message: e.message });
  }
})
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Book.findByIdAndDelete(id, req.body);

    if (!result) {
      return res.status(400).json({ message: 'Book not found' });
    }
    return res.status(200).send({ message: 'Book successfully deleted' });
  }
  catch (e) {
    console.log(e.message);
    res.status(500).send({ message: e.message });
  }
})

module.exports = router;
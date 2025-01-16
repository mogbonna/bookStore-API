import express from "express";
import { v4 as uuidv4 } from "uuid";
import { Store } from "../services/store";
import { validateBook } from "../middleware/validation";

const router = express.Router();
const store = new Store();

// Create a new book
router.post("/", validateBook, (req, res) => {
  const book = { ...req.body, id: uuidv4() };
  const newBook = store.addBook(book);
  res.status(201).json(newBook);
});

// Get all books
router.get("/", (req, res) => {
  const books = store.getAllBooks();
  res.json(books);
});

// Get a specific book
router.get("/:id", (req, res) => {
  const book = store.getBook(req.params.id);
  if (!book) {
    return res.status(404).json({ error: "Book not found" });
  }
  res.json(book);
});

// Update a book
router.put("/:id", validateBook, (req, res) => {
  const updatedBook = store.updateBook(req.params.id, {
    ...req.body,
    id: req.params.id,
  });
  if (!updatedBook) {
    return res.status(404).json({ error: "Book not found" });
  }
  res.json(updatedBook);
});

// Delete a book
router.delete("/:id", (req, res) => {
  const deleted = store.deleteBook(req.params.id);
  if (!deleted) {
    return res.status(404).json({ error: "Book not found" });
  }
  res.status(204).send();
});

export default router;

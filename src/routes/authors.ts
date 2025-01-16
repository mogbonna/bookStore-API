import express from "express";
import { v4 as uuidv4 } from "uuid";
import { Store } from "../services/store";
import { validateAuthor } from "../middleware/validation";

const router = express.Router();
const store = new Store();

// Create a new author
router.post("/", validateAuthor, (req, res) => {
  const author = { ...req.body, id: uuidv4() };
  const newAuthor = store.addAuthor(author);
  res.status(201).json(newAuthor);
});

// Get all authors
router.get("/", (req, res) => {
  const authors = store.getAllAuthors();
  res.json(authors);
});

// Get a specific author
router.get("/:id", (req, res) => {
  const author = store.getAuthor(req.params.id);
  if (!author) {
    return res.status(404).json({ error: "Author not found" });
  }
  res.json(author);
});

// Update an author
router.put("/:id", validateAuthor, (req, res) => {
  const updatedAuthor = store.updateAuthor(req.params.id, {
    ...req.body,
    id: req.params.id,
  });
  if (!updatedAuthor) {
    return res.status(404).json({ error: "Author not found" });
  }
  res.json(updatedAuthor);
});

// Delete an author
router.delete("/:id", (req, res) => {
  const deleted = store.deleteAuthor(req.params.id);
  if (!deleted) {
    return res.status(404).json({ error: "Author not found" });
  }
  res.status(204).send();
});

export default router;

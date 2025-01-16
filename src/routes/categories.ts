import express from "express";
import { v4 as uuidv4 } from "uuid";
import { Store } from "../services/store";
import { validateCategory } from "../middleware/validation";

const router = express.Router();
const store = new Store();

// Create a new category
router.post("/", validateCategory, (req, res) => {
  const category = { ...req.body, id: uuidv4() };
  const newCategory = store.addCategory(category);
  res.status(201).json(newCategory);
});

// Get all categories
router.get("/", (req, res) => {
  const categories = store.getAllCategories();
  res.json(categories);
});

// Get a specific category
router.get("/:id", (req, res) => {
  const category = store.getCategory(req.params.id);
  if (!category) {
    return res.status(404).json({ error: "Category not found" });
  }
  res.json(category);
});

// Update a category
router.put("/:id", validateCategory, (req, res) => {
  const updatedCategory = store.updateCategory(req.params.id, {
    ...req.body,
    id: req.params.id,
  });
  if (!updatedCategory) {
    return res.status(404).json({ error: "Category not found" });
  }
  res.json(updatedCategory);
});

// Delete a category
router.delete("/:id", (req, res) => {
  const deleted = store.deleteCategory(req.params.id);
  if (!deleted) {
    return res.status(404).json({ error: "Category not found" });
  }
  res.status(204).send();
});

export default router;

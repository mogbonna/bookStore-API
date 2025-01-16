import Joi from "joi";
import { Request, Response, NextFunction } from "express";

const bookSchema = Joi.object({
  title: Joi.string().required(),
  authorId: Joi.string().required(),
  categoryId: Joi.string().required(),
  publicationYear: Joi.number()
    .integer()
    .min(1000)
    .max(new Date().getFullYear()),
  isbn: Joi.string()
    .pattern(/^[\d-]{10,17}$/)
    .required(),
});

const authorSchema = Joi.object({
  name: Joi.string().required(),
  bio: Joi.string(),
});

const categorySchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string(),
});

export const validateBook = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error } = bookSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

export const validateAuthor = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error } = authorSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

export const validateCategory = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error } = categorySchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

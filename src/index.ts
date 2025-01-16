import express from "express";
import morgan from "morgan";
import booksRouter from "./routes/books";
import authorsRouter from "./routes/authors";
import categoriesRouter from "./routes/categories";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/api/books", booksRouter);
app.use("/api/authors", authorsRouter);
app.use("/api/categories", categoriesRouter);

// Error handling middleware
app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    console.error(err.stack);
    res.status(500).json({ error: "Something broke!" });
  }
);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;

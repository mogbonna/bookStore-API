import { Book, Author, Category } from "../types";

export class Store {
  private books: Map<string, Book>;
  private authors: Map<string, Author>;
  private categories: Map<string, Category>;

  constructor() {
    this.books = new Map();
    this.authors = new Map();
    this.categories = new Map();
  }

  // Book methods
  addBook(book: Book): Book {
    this.books.set(book.id, book);
    return book;
  }

  getBook(id: string): Book | undefined {
    return this.books.get(id);
  }

  getAllBooks(): Book[] {
    return Array.from(this.books.values());
  }

  updateBook(id: string, book: Book): Book | undefined {
    if (this.books.has(id)) {
      this.books.set(id, { ...book, id });
      return this.books.get(id);
    }
    return undefined;
  }

  deleteBook(id: string): boolean {
    return this.books.delete(id);
  }

  // Author methods
  addAuthor(author: Author): Author {
    this.authors.set(author.id, author);
    return author;
  }

  getAuthor(id: string): Author | undefined {
    return this.authors.get(id);
  }

  getAllAuthors(): Author[] {
    return Array.from(this.authors.values());
  }

  updateAuthor(id: string, author: Author): Author | undefined {
    if (this.authors.has(id)) {
      this.authors.set(id, { ...author, id });
      return this.authors.get(id);
    }
    return undefined;
  }

  deleteAuthor(id: string): boolean {
    return this.authors.delete(id);
  }

  // Category methods
  addCategory(category: Category): Category {
    this.categories.set(category.id, category);
    return category;
  }

  getCategory(id: string): Category | undefined {
    return this.categories.get(id);
  }

  getAllCategories(): Category[] {
    return Array.from(this.categories.values());
  }

  updateCategory(id: string, category: Category): Category | undefined {
    if (this.categories.has(id)) {
      this.categories.set(id, { ...category, id });
      return this.categories.get(id);
    }
    return undefined;
  }

  deleteCategory(id: string): boolean {
    return this.categories.delete(id);
  }
}

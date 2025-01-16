export interface Book {
  id: string;
  title: string;
  authorId: string;
  categoryId: string;
  publicationYear: number;
  isbn: string;
}

export interface Author {
  id: string;
  name: string;
  bio?: string;
}

export interface Category {
  id: string;
  name: string;
  description?: string;
}

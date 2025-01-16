import request from "supertest";
import app from "../index";

describe("Books API", () => {
  let bookId: string;

  const testBook = {
    title: "Test Book",
    authorId: "123",
    categoryId: "456",
    publicationYear: 2023,
    isbn: "978-0-123456-47-2",
  };

  it("should create a new book", async () => {
    const res = await request(app).post("/api/books").send(testBook);

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty("id");
    expect(res.body.title).toBe(testBook.title);
    bookId = res.body.id;
  });

  it("should get all books", async () => {
    const res = await request(app).get("/api/books");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBeTruthy();
  });
});

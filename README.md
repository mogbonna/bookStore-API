# Bookstore API

A RESTful API for managing a bookstore's books, authors, and categories built with Node.js, Express, and TypeScript.

## Features

- CRUD operations for books, authors, and categories
- Input validation using Joi
- In-memory data storage
- Unit testing with Jest
- TypeScript support
- Request logging

## Project Structure

```
src/
  ├── types/          # Type definitions
  ├── middleware/     # Validation middleware
  ├── routes/         # API routes
  ├── services/       # Database service
  ├── app.ts         # Express app setup
  └── server.ts      # Server entry point
tests/
  └── books.test.ts  # Unit tests
```

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

## Running the Application

Development mode:

```bash
npm run dev
```

Production mode:

```bash
npm run build
npm start
```

## Testing

Run the test suite:

```bash
npm test
```

## API Endpoints

### Books

- POST /api/books - Create a new book
- GET /api/books - Get all books
- GET /api/books/:id - Get a specific book
- PUT /api/books/:id - Update a book
- DELETE /api/books/:id - Delete a book

### Authors

- POST /api/authors - Create a new author
- GET /api/authors - Get all authors
- GET /api/authors/:id - Get a specific author
- PUT /api/authors/:id - Update an author
- DELETE /api/authors/:id - Delete an author

### Categories

- POST /api/categories - Create a new category
- GET /api/categories - Get all categories
- GET /api/categories/:id - Get a specific category
- PUT /api/categories/:id - Update a category
- DELETE /api/categories/:id - Delete a category

## Dependencies

- express - Web framework
- typescript - JavaScript with syntax for types
- joi - Input validation
- morgan - HTTP request logger
- uuid - Unique ID generation
- jest - Testing framework
- supertest - HTTP testing library

## Development Dependencies

```json
{
  "@types/express": "^4.17.17",
  "@types/jest": "^29.5.0",
  "@types/morgan": "^1.9.4",
  "@types/node": "^18.15.11",
  "@types/supertest": "^2.0.12",
  "@types/uuid": "^9.0.1",
  "ts-jest": "^29.1.0",
  "ts-node-dev": "^2.0.0",
  "typescript": "^5.0.4"
}
```

import * as React from "react";
import Books from "./Books";
import Form from "./Form";
import bookService from "../services/books";
import { useState, useEffect } from "react";

const App = () => {
  const [books, setBooks] = useState([]);
  const [filterBooks, setFilterBooks] = useState(books);

  useEffect(() => {
    const fetchBooks = async () => {
      const initialBooks = await bookService.getAll();
      setBooks(initialBooks);
      setFilterBooks(initialBooks);
    };
    fetchBooks();
  }, []);

  return (
    <div className="App">
      <h1>Bookstore</h1>

      <Form books={books} setFilterBooks={setFilterBooks} />

      <Books books={filterBooks} />
    </div>
  );
};

export default App;

import * as React from "react";
import Books from "./Books";
import bookService from "../services/books";
import { useState, useEffect } from "react";

const App = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const initialBooks = await bookService.getAll();
      setBooks(initialBooks);
    };
    fetchBooks();
  });

  return (
    <div className="App">
      <h1>Bookstore</h1>

      <Books books={books} />
    </div>
  );
};

export default App;

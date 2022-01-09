import * as React from "react";
import { IBook } from "../components/Book";
import { useState, useEffect } from "react";

type Props = {
  books: IBook[];
  setFilterBooks: Function;
};

const Form: React.FC<Props> = ({ books, setFilterBooks }) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (search.length > 0) {
      const lowerCasedSearch = search.toLowerCase();
      setFilterBooks(
        books.filter(
          (book) =>
            book.title.toLowerCase().includes(lowerCasedSearch) ||
            book.author.toLowerCase().includes(lowerCasedSearch)
        )
      );
    } else {
      setFilterBooks(books);
    }
  }, [books, search, setFilterBooks]);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  };

  return (
    <div>
      <input
        value={search}
        placeholder="Search book or author"
        onChange={handleChange}
      />
    </div>
  );
};

export default Form;

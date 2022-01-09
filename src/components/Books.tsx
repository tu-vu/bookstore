import * as React from "react";
import { Book, IBook } from "../components/Book";

type Props = {
  books: IBook[];
};

const Books: React.FC<Props> = ({ books }) => {
  return (
    <div>
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </div>
  );
};

export default Books;

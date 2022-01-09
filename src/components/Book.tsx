import * as React from "react";

export interface IBook {
  id: number;
  title: string;
  author: string;
  rating: number;
  price: number;
}

type Props = {
  book: IBook;
};

export const Book: React.FC<Props> = ({ book }) => {
  return (
    <div>
      <p>{book.title}</p>
    </div>
  );
};

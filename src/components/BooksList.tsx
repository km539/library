import React, { useEffect, useState } from "react";
import booksjson from "../books.json";

type bookType = {
  id: string;
  title: string;
  author: string;
  genre: string;
  description: string;
  publishedDate: string;
};
function BooksList() {
  const [books, setBooks] = useState<bookType[]>([]);

  const getBooks = () => {
    return Promise.resolve(booksjson);
  };

  useEffect(() => {
    getBooks().then(data => setBooks(data));
  }, []);

  return (
    <div>
      <h1>Catalog</h1>
      <div>
        {books.map(book => (
          <p>{book.title}</p>
        ))}
      </div>
    </div>
  );
}

export default BooksList;

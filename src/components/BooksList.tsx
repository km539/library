import React, { useEffect, useState } from "react";
import booksjson from "../books.json";
import "../styles/BookList.css";

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

  const viewDetail = (book: bookType) => (
    <div className="overlay">
      <div className="content">
        <h2>{book.title}</h2>
        <p>
          <strong>Author:</strong> {book.author}
        </p>
        <p>
          <strong>Genre:</strong> {book.genre}
        </p>
        <p>
          <strong>Description:</strong> {book.description}
        </p>
        <p>
          <strong>Published Date:</strong> {book.publishedDate}
        </p>
        <button>Close</button>
      </div>
    </div>
  );

  return (
    <div>
      <h1>Book List</h1>
      <table className="books">
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Author</th>
          {/* <th>Gerne</th>
          <th>Description</th>
          <th>publishedDate</th> */}
          <th>STATUS</th>
        </tr>
        {books.map(book => (
          <tr key={book.id} onClick={() => viewDetail(book)}>
            <td>{book.id}</td>
            <td>{book.title}</td>
            <td>{book.author}</td>
            {/* <td>{book.genre}</td>
            <td>{book.description}</td>
            <td>{book.publishedDate}</td> */}
            <td>available</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default BooksList;

import React, { useEffect, useState } from "react";
// import booksjson from "../books.json";
import "../styles/BookList.css";
import { Table, Button } from "react-bootstrap";

type bookType = {
  id: number;
  title: string;
  author: string;
  genre: string;
  description: string;
  published_date: string;
};

function BooksList() {
  const [books, setBooks] = useState<bookType[]>([]);
  const [selectedBook, setSelectedBook] = useState<bookType | null>(null);

  const getBooks = async () => {
    const res = await fetch("http://localhost:5000/api/books");
    const data = await res.json();
    return data;
    // return Promise.resolve(booksjson);
  };

  useEffect(() => {
    getBooks().then((data) => setBooks(data));
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
          <strong>Published Date:</strong> {book.published_date}
        </p>
        <div>
          <button onClick={() => setSelectedBook(null)}>Close</button>
          <button>Rent</button>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <h1>Book List</h1>
      <Table striped bordered hover>
      {/* <table className="books"> */}
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            {/* <th>Gerne</th>
          <th>Description</th>
          <th>publishedDate</th> */}
            <th>STATUS</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            // <tr key={book.id} onClick={() => viewDetail(book)}>
            <tr key={book.id} onClick={() => setSelectedBook(book)}>
              <td>{book.id}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              {/* <td>{book.genre}</td>
            <td>{book.description}</td>
          <td>{book.published_date}</td> */}
              <td>available</td>
            </tr>
          ))}
        </tbody>
        {selectedBook && viewDetail(selectedBook)}
      {/* </table> */}
      </Table>
    </div>
  );
}

export default BooksList;

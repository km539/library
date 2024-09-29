import Express from "express";
import { pool } from "../DB/initDB";

const router = Express.Router();

// GET API: Get all books
router.get("/", async (req, res) => {
  try {
    const books = await pool.select("*").from("books");
    res.json(books);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// POST API: Add a new book
router.post("/", async (req, res) => {
  const { title, author, genre, description, publishedDate } = req.body;
  try {
    const newBook = await pool("books")
      .insert({
        title,
        author,
        genre,
        description,
        published_date: publishedDate,
      })
      .returning("*");
    res.status(201).json(newBook[0]);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

export default router;

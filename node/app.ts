import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { pool } from "./DB/initDB";
dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("/name", async (req: Request, res: Response) => {
  const samples = await pool.select("*").from("sample");
  // res.status(200).send("Hello World");
  return res.status(200).send(samples[0].message);
});

app.get("/test", (req: Request, res: Response) => {
  res.json({ message: "Express + TypeScript Server" });
});

export default app;

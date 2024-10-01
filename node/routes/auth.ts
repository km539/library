import express, { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import { pool } from "../DB/initDB";
import { User } from "../types/types";

dotenv.config();

const router = express.Router();

const validatePassword = async (
  user: User,
  password: string
): Promise<boolean> => {
  return bcrypt.compare(password, user.password);
};

router.post("/register", async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await pool("users")
    .insert({
      name: username,
      password: hashedPassword,
    })
    .returning("*");
  return res.status(201);
});

router.post("/login", async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const user = await pool.select("*").from("users").where({ name: username });

  if (!user || !(await validatePassword(user[0], password))) {
    return res.status(400).json({ message: "Invalid username or password." });
  }

  const token: string = jwt.sign(
    { id: user.id, username: user.name },
    process.env.JWT_SECRET as string,
    {
      expiresIn: "1h",
    }
  );

  return res.status(201).json({ token });
});

export default router;

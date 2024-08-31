require("dotenv").config();

export const pool = require("knex")({
  client: "pg",
  connection: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    database: process.env.DB_DATBASE,
    password: process.env.DB_PASS,
    // ssl: { rejectUnauthorized: false },
  },
});

pool
  .raw("SELECT 1")
  .then(() => {
    console.log("Database connection successful");
  })
  .catch((err: any) => {
    console.error("Database connection failed:", err);
  });


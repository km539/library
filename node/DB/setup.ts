import { pool } from "./initDB";

const setup = async () => {
  try {
    const exists = await pool.schema.hasTable("sample");
    if (!exists) {
      await pool.schema.createTable("sample", (table: any) => {
        table.increments("id").primary();
        table.string("message", 100);
      });

      await pool("sample").insert([{ message: "Hello" }, { message: "World" }]);
      console.log("Setup completed.");
    }
  } catch (error) {
    console.error("Setup failed:", error);
  } finally {
    await pool.destroy();
  }
};

setup();

import pg from "pg";
import "dotenv/config";

const pool = new pg.Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME, 
  port: process.env.DB_PORT,
  allowExitOnIdle: true,
});

export default pool;

/* try {
  await pool.query("SELECT NOW()");
  console.log("Database connected");
} catch (error) {
  console.error("Error to connected database error:", error);
}
 */

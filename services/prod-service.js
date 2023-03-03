import { pool } from "../config/mysql-config.js";

export async function getProducts(limit) {
  const [rows] = await pool.query(`SELECT * FROM employees limit ${limit}`);
  return rows;
}

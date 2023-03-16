import { pool } from "../config/mysql-config.js";

export async function getProducts(limit) {
  const [rows] = await pool.query(`SELECT * FROM product limit ${limit}`);
  return rows;
}

export async function postProducts(prods) {
  const [row] = await pool.query("select * from category");
  await prods.map((prod) =>
    row.find(
      (category) =>
        category.name === prod.category &&
        pool.query(
          `INSERT INTO product (name, description, image, price, stock, sale, created_date,category_id) VALUES("${
            prod.name
          }", "${prod.description}", "${prod.image}", ${Number(
            prod.price
          )}, ${Number(prod.stock)}, "${prod.sale}", "2022-01-13",${
            category.id
          })`
        )
    )
  );

  return row;
}

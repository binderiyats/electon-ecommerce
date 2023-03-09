import pool from "../config/mysql-config";
import { nanoid } from "nanoid";

// GET ALL PRODUCTS
export const getAllProducts = async () => {
  const [result] = await pool.query(`SELECT * FROM product`);
  return result;
};

export const getOneProduct = async (id) => {
  const [[result]] = await pool.query(
    `SELECT * FROM product WHERE productId=?`[id]
  );
  return result;
};

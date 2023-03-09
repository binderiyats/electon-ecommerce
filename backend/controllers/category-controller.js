import pool from "../config/mysql-config";
import { nanoid } from "nanoid";

//GET ALL CATEGORIES
export const getCategories = async () => {
  const [result] = await pool.query(`SELECT * FROM category`);
  return result;
};

//GET ONE CATEGORY BY ID
export const getOneCategory = async (id) => {
  const [[result]] = await pool.query(
    `SELECT * FROM category WHERE categoryId=?
  `,
    [id]
  );
  return result;
};

//POST | CREATE

export const createCategory = async (category) => {
  const id = nanoid();
  try {
    await pool.query;
  } catch (error) {}
};

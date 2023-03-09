import pool from "../config/mysql-config.js";
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
    await pool.query(
      `INSERT INTO category (categoryId ,name, slug, productCount, parent_id, created, createdAt) VALUES (?,?,?,?,?,?,?)`,
      [
        id,
        category.name,
        category.slug,
        category.productCount,
        category.parent_id,
        category.created,
        new Date(),
      ]
    );
    const result = await getOneCategory(id);
    return result;
  } catch (error) {
    console.log(error);
  }
};

//DELETE

export const deleteCategory = async (id) => {
  try {
    const result = await pool.query(`DELETE FROM category WHERE categoryId=?`, [
      id,
    ]);
    return result;
  } catch (error) {
    console.log(error);
  }
};

// UPDATE | PATCH

export const updateCategory = async (category) => {
  try {
    await pool.query(
      `UPDATE category SET name=?, slug=?, productCount=?, parent_id=?, updated=?, updatedAt=? WHERE categoryId=?`,
      [
        category.name,
        category.slug,
        category.productCount,
        category.parent_id,
        category.updated,
        new Date(),
        category.id,
      ]
    );
    const result = await getOneCategory(category.id);
    return result;
  } catch (error) {
    console.log(error);
  }
};

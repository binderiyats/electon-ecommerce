import pool from "../config/mysql-config.js";
import { nanoid } from "nanoid";

// GET ALL PRODUCTS
export const getAllProducts = async () => {
  const [result] = await pool.query(`SELECT * FROM product`);
  return result;
};

//GET A PRODUCT BY ID
export const getOneProduct = async (id) => {
  const [[result]] = await pool.query(
    `SELECT * FROM product WHERE productId=?`[id]
  );
  return result;
};

//CREATE | POST
export const createProduct = async (product) => {
  const id = nanoid();
  try {
    await pool.query(
      `INSERT INTO product (productId, categoryId, name, description, imageUrl, text, price, discountPrice, remaining, reviewRating, readCount, created, createdAt ), VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)`,
      [
        id,
        product.categoryId,
        product.name,
        product.description,
        product.imageUrl,
        product.text,
        product.price,
        product.discountPrice,
        product.remaining,
        product.reviewRating,
        product.readCount,
        product.created,
        new Date(),
      ]
    );
  } catch (error) {}
};

//PATCH | UPDATE
export const updateProduct = async (category) => {
  const id = nanoid();
  try {
    await pool.query(
      `UPDATE product SET categoryId=?, name=?, description=?, imageUrl=?, text=?, price=?, discountPrice=?, remaining=?, reviewRating=?, readCount=?, updated=?, updatedAt=? WHERE productId=?`,
      [
        product.categoryId,
        product.name,
        product.description,
        product.imageUrl,
        product.text,
        product.price,
        product.discountPrice,
        product.remaining,
        product.reviewRating,
        product.readCount,
        product.created,
        product.id,
      ]
    );
    const result = await updateProduct(category.id);
    return result;
  } catch (error) {
    console.log(error);
  }
};

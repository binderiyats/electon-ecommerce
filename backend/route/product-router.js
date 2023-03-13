import express from "express";
import {
  getAllProducts,
  getOneProduct,
  createProduct,
  updateProduct,
} from "../controllers/product-controller.js";
const router = express.Router();

//GET ALL PRODUCTS
router.get("/", async (req, res) => {
  res.json(await getAllProducts());
});

//GET A PRODUCT BY ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  res.json(await getOneProduct(id));
});

//CREATE | POST
router.get("/", async (req, res) => {
  const {
    categoryId,
    name,
    description,
    immageUrl,
    text,
    price,
    discountPrice,
    remaining,
    reviewRating,
    readCount,
    created,
  } = req.body;
  const product = await createProduct({
    categoryId,
    name,
    description,
    immageUrl,
    text,
    price,
    discountPrice,
    remaining,
    reviewRating,
    readCount,
    created,
  });
  res.json(product);
});

//PATCH | UPDATE

router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const {
    categoryId,
    name,
    description,
    immageUrl,
    text,
    price,
    discountPrice,
    remaining,
    reviewRating,
    readCount,
    updated,
  } = req.body;

  const result = await updateProduct({
    categoryId,
    name,
    description,
    immageUrl,
    text,
    price,
    discountPrice,
    remaining,
    reviewRating,
    readCount,
    updated,
  });
  res.json(product);
  return result;
});

export default router;

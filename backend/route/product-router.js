import express from "express";
import { getAllProducts } from "../controllers/product-controller";
const router = express.Router();

//GET ALL PRODUCTS
router.get("/", async (req, res) => {
  res.json(await getAllProducts());
});

//GET A PRODUCT BY ID

export default router;

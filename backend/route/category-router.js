import express from "express";
import {
  getCategories,
  getOneCategory,
  deleteCategory,
  updateCategory,
  createCategory,
} from "../controllers/category-controller.js";

const router = express.Router();

// GET ALL CATEGORIES
router.get("/", async (req, res) => {
  res.json(await getCategories());
});

//GET ONE CATEGORY
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  res.json(await getOneCategory(id));
});

// DELETE A CATEGORY BY ID
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  res.json(await deleteCategory(id));
});

//CREATE A CATEGORY
router.post("/", async (req, res) => {
  const { name, slug, productCount, parent_id, created } = req.body;
  const category = await createCategory({
    name,
    slug,
    productCount,
    parent_id,
    created,
  });
  res.json(category);
});

//UPDATE | PATCH A CATEGORY
router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, slug, productCount, parent_id, created } = req.body;
  const category = await updateCategory({
    name,
    slug,
    productCount,
    parent_id,
    created,
    id,
  });
  res.json(category);
});

export default router;

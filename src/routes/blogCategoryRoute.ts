import {
  deleteBlogCategory,
  newBlogCategory,
  readCategories,
  updateBlogCategory,
} from "../controllers/blogCategoryController";
import express, { Router } from "express";
import {
  validateBlogCategory,
  validateUpdateBlogCategory,
} from "../helpers/validator";
import verifyToken from "../middlewares/authMiddleware";
const router: Router = express.Router();

router.post(
  "/createCategory",
  verifyToken,
  validateBlogCategory,
  newBlogCategory
);
router.get("/readCategories/:categoryId?", readCategories);
router.put(
  "/updateCategory/:categoryId",
  verifyToken,
  validateUpdateBlogCategory,
  updateBlogCategory
);
router.delete("/deleteCategory/:categoryId", verifyToken, deleteBlogCategory);
export default router;

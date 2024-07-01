"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const blogCategoryController_1 = require("../controllers/blogCategoryController");
const express_1 = __importDefault(require("express"));
const validator_1 = require("../helpers/validator");
const authMiddleware_1 = __importDefault(require("../middlewares/authMiddleware"));
const router = express_1.default.Router();
router.post("/createNewBlogCategory", authMiddleware_1.default, validator_1.validateBlogCategory, blogCategoryController_1.newBlogCategory);
exports.default = router;

import { Router, Request, Response } from 'express';
import * as Categories from '../controllers/categories.controller';
import Validator from '../utils/middlewares/Validator';
import * as Schema from '../utils/middlewares/categoriesSchema';

const router = Router();

router.get('/get-all-categories', Categories.GetAllCategories());
// router.get('/addcategories/:title', Categories.AddCategories());
router.post(
  '/add-categories',
  Validator(Schema.AddCategorySchema),
  Categories.AddCategories()
);
export default router;

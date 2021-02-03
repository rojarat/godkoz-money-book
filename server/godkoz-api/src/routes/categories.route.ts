import { Router, Request, Response } from 'express';
import * as Categories from '../controllers/categories.controller';
import Validator from '../utils/middlewares/Validator';
import * as Schema from '../utils/middlewares/categoriesSchema';
import isAuthenticated from 'src/utils/middlewares/isAuthenticated';
const router = Router();

router.get('/', isAuthenticated, Categories.GetAllCategories());
router.post(
  '/add-categories',
  Validator(Schema.AddCategorySchema),
  Categories.AddCategories()
);
export default router;

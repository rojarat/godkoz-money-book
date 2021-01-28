import { Router } from 'express';
import * as Categories from '../controllers/categories.controller';
const router = Router();
router.get('/', Categories.GetAll());
router.get('/add/:title', Categories.AddCategories());

export default router;

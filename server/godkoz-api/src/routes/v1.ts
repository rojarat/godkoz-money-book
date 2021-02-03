import { Router } from 'express';

import Categories from './categories.route';
import Expense from './expense.route';
const router = Router();

router.use('/categories', Categories);
router.use('/expense', Expense);
import Auth from './auth.route';

router.use('/auth', Auth);

export default router;

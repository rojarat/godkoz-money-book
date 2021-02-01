import { Router } from 'express';

import Categories from './categories.route';

const router = Router();


router.use('/categories', Categories);
import Auth from './auth.route';


router.use('/auth', Auth);

export default router;

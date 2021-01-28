import { Router } from 'express';
import Hello from './hello.route';
import Categories from './categories.route';

const router = Router();

router.use('/hello', Hello);
router.use('/categories', Categories);

export default router;

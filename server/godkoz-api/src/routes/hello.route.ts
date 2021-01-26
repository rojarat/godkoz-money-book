import { Router } from 'express';
import * as Controller from '../controllers/hello.controller';

const router = Router();

router.get('/', Controller.Hello());
router.get('/:name', Controller.HelloWithName());

export default router;

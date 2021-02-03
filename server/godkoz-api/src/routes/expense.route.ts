import { Router, Request, Response } from 'express';
import * as Expense from '../controllers/expense.controller';
import Validator from '../utils/middlewares/Validator';
import * as Schema from '../utils/middlewares/expenseSchema';
import isAuthenticated from 'src/utils/middlewares/isAuthenticated';
const router = Router();

// router.get('/', isAuthenticated, Expense.GetAllExpense());
router.get('/', isAuthenticated, Expense.GetExpensesByUserId());
router.post(
  '/',
  isAuthenticated,
  Validator(Schema.AddExpenseSchema),
  Expense.AddExpense()
);
router.patch(
  '/:expenseId',
  isAuthenticated,
  Validator(Schema.UpdateExpenseSchema),
  Expense.UpdateExpenseById()
);
router.delete('/:expenseId', isAuthenticated, Expense.DeleteExpenesById());
router.put(
  '/:expenseId',
  isAuthenticated,
  Validator(Schema.SetExpenseSchema),
  Expense.UpdateExpenseById()
);
export default router;

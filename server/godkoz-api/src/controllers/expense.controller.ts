import { Request, Response } from 'express';
import * as Expense from '../services/expense.service';
import { User } from '../interfaces/User';

export function GetExpensesByUserId() {
  return async (req: Request, res: Response) => {
    const user = req.user as User;
    try {
      const findid = await Expense.GetAll(user._id || '');
      return res.json(findid);
    } catch (e) {
      return res
        .status(500)
        .json({ statusCode: '500', message: 'something went wrong' });
    }
  };
}

export function AddExpense() {
  return async (req: Request, res: Response) => {
    const user = req.user as User;
    req.body.user = user._id;

    try {
      const created = await Expense.AddExpense(req.body);
      return res
        .status(201)
        .json({ success: true, message: 'created have been successfully' });
    } catch (e) {
      console.log(e);
      return res
        .status(500)
        .json({ statusCode: '500', message: 'something went wrong' });
    }
  };
}

export function UpdateExpenseById() {
  return async (req: Request, res: Response) => {
    try {
      const user = req.user as User;
      const updated = await Expense.UpdateExpense(
        { _id: req.params.expenseId, user: user._id || 'roseiei' },
        req.body
      );
      if (updated === null) {
        return res
          .status(200)
          .json({ success: false, message: 'expense id not found' });
      }
      return res
        .status(200)
        .json({ success: true, message: 'updated have been successfully' });
    } catch (e) {
      console.log(e);
      return res
        .status(500)
        .json({ statusCode: '500', message: 'something went wrong' });
    }
  };
}

export function SetExpenseById() {
  return async (req: Request, res: Response) => {
    try {
      const user = req.user as User;
      const set = await Expense.UpdateExpense(
        { _id: req.params.expenseId, user: user._id || 'roseiei' },
        req.body
      );
      if (set === null) {
        return res
          .status(200)
          .json({ success: false, message: 'expense id not found' });
      }
      return res
        .status(200)
        .json({ success: true, message: 'updated have been successfully' });
    } catch (e) {
      console.log(e);
      return res
        .status(500)
        .json({ statusCode: '500', message: 'something went wrong' });
    }
  };
}

export function DeleteExpenesById() {
  return async (req: Request, res: Response) => {
    try {
      const user = req.user as User;

      const remove = await Expense.DeleteExpense(
        req.params.expenseId,
        user._id || 'eieiros'
      );
      console.log({ remove });
      if (remove === null) {
        return res
          .status(200)
          .json({ success: false, message: 'expense id not found' });
      }
      return res
        .status(200)
        .json({ success: true, message: 'deleted have been successfully' });
    } catch (e) {
      return res
        .status(500)
        .json({ statusCode: '500', message: 'something went wrong' });
    }
  };
}

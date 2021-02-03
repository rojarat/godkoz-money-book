import Expense from '../models/expenses';
import {
  ExpenseRequestBody,
  Expense as IExpense,
  ExpenseResponseBody,
} from '../interfaces/Expense';

export function AddExpense(payload: ExpenseRequestBody) {
  return Expense.create(payload);
}

export function GetAll(userId: string) {
  return Expense.find({ user: userId }).populate('category');
}

export function UpdateExpense(
  condition: { _id: string; user: string },
  payload: ExpenseRequestBody
) {
  return Expense.findOneAndUpdate(condition, payload);
}

export function DeleteExpense(_id: string, user: string) {
  return Expense.findOneAndDelete({ _id, user });
}

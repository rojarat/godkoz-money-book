import { Category } from "./category";
export interface Expense {
  _id: string;
  title: string;
  expense_type: "income" | "expend";
  expense_at: string;
  created_at: string;
  updated_at: string;
  category: Category;
}

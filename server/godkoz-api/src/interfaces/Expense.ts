export interface Expense {
  _id: string;
  title: string;
  expense_type: 'income' | 'expense';
  expense_at: string; // อ้างอิงตาม ISO 8601
  total: number;
  created_at: string; // อ้างอิงตาม ISO 8601
  updated_at: string; // อ้างอิงตาม ISO 8601
  category: {
    _id: string;
    is_active: boolean;
    title: string;
    created_at: string; // อ้างอิงตาม ISO 8601
    updated_at: string; // อ้างอิงตาม ISO 8601
  };
  user: {
    _id: string;
    display_name: string;
    picture_url: string;
    email: string;
  };
}

export interface ExpenseRequestBody {
  _id?: string;
  title: string;
  category: string;
  expense_type: 'income' | 'expense';
  expense_at: string; // อ้างอิงตาม ISO 8601
  total: number;
}

export interface ExpenseResponseBody {
  _id: string;
  title: string;
  category: {
    _id: string;
    title: string;
  };
  expense_type: 'income' | 'expense';
  expense_at: string; // อ้างอิงตาม ISO 8601
  total: number;
  created_at: string; // อ้างอิงตาม ISO 8601
  updated_at: string; // อ้างอิงตาม ISO 8601
}

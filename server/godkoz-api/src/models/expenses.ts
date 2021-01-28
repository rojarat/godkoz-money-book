import { Schema, model, Types } from 'mongoose';

const expenseSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, default: Types.ObjectId },
  title: { type: String, required: true },
  category: { type: Schema.Types.ObjectId, required: true },
  expense_type: { type: String, enum: ['income', 'expense'], required: true },
  expense_at: { type: Date, required: true },
  total: { type: Number, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  user: { type: Schema.Types.ObjectId, required: true },
});

export default model('expenses', expenseSchema);

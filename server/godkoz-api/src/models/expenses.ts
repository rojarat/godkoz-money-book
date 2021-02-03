import { Schema, model, Types } from 'mongoose';

const expenseSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, default: Types.ObjectId },
  title: { type: String, required: true },
  category: { type: Schema.Types.ObjectId, required: true, ref: 'categories' },
  expense_type: { type: String, enum: ['income', 'expend'], required: true },
  expense_at: { type: Date, required: true },
  total: { type: Number, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  user: { type: Schema.Types.ObjectId, required: true, ref: 'users' },
});

export default model('expenses', expenseSchema);

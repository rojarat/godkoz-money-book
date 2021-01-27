import { Schema, model, Types } from 'mongoose';

const categoriesSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, default: Types.ObjectId },
  title: { type: String, required: true },
  is_active: { type: Boolean, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

export default model('categories', categoriesSchema);

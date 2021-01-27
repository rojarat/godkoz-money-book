import { Schema, model, Types } from 'mongoose';

const userSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, default: Types.ObjectId },
  display_name: { type: String, required: true },
  picture_url: { type: String, required: true },
  email: { type: String, required: true },
  provider_by: {
    type: String,
    enum: ['facebook', 'line', 'gmail'],
    required: true,
  },
  created_at: { type: Date, default: Date.now },
  last_login_at: { type: Date, required: true },
  updated_at: { type: Date, default: Date.now },
});

export default model('users', userSchema);

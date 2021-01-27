import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  display_name: { type: String, required: true },
  picture_url: { type: String, required: true },
  email: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  provider_by: {
    type: String,
    enum: ['facebook', 'line', 'gmail'],
    required: true,
  },
  last_login_at: { type: String, required: true },
  updated_at: { type: Date, default: Date.now },
});

export const UsersModel = model('users', userSchema);

import { Schema, model, Types } from 'mongoose';

const userSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, default: Types.ObjectId },
  user_id: { type: String, required: true },
  display_name: { type: String, required: true },
  picture_url: { type: String, required: true },
  email: { type: String, required: true },
  provider_by: {
    type: String,
    enum: ['facebook', 'line', 'gmail'],
    required: true,
  },
  last_login_at: { type: Date },
  auth_token: {
    token: { type: String },
    expired_at: { type: Date },
    user_agent: String,
  },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

export default model('users', userSchema);

export interface User {
  _id?: string;
  user_id: string;
  display_name: string;
  picture_url: string;
  email: string;
  provider_by: 'facebook' | 'line' | 'google';
  last_login_at?: string; // อ้างอิงตาม ISO 8601
  created_at?: string; // อ้างอิงตาม ISO 8601
  updated_at?: string; // อ้างอิงตาม ISO 8601
  auth_token?: AuthToken;
}

export interface AuthToken {
  token: string;
  created_at: string;
  user_agent?: string;
}

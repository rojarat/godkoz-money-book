export interface User {
  _id: string;
  display_name: string;
  picture_url: string;
  email: string;
  provider_by: 'facebook' | 'line' | 'gmail';
  last_login_at: string; // อ้างอิงตาม ISO 8601
  created_at: string; // อ้างอิงตาม ISO 8601
  updated_at: string; // อ้างอิงตาม ISO 8601
}

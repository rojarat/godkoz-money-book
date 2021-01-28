export interface Category {
  _id: string;
  title: string;
  created_at: string; // อ้างอิงตาม ISO 8601
  updated_at: string; // อ้างอิงตาม ISO 8601
}

export interface CategoryResponse {
  _id: string;
  title: string;
  is_active: boolean;
}

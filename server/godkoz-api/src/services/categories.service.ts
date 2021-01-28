import Categories from '../models/categories';

export function GetAll() {
  return Categories.find({});
}

export function AddCate(title: string) {
  return Categories.create({ title });
}

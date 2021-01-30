import Categories from '../models/categories';

export function GetAll() {
  return Categories.find({});
}

export function AddCate({ title }) {
  return Categories.create({ title });
}

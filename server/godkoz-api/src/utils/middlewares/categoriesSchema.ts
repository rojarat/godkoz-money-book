import * as yup from 'yup';

export const AddCategorySchema = yup
  .object({
    title: yup.string().required(),
  })
  .noUnknown(true);

export const UpdateCategorySchema = yup
  .object({
    title: yup.string().required(),
  })
  .noUnknown(true);

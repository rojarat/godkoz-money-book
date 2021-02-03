import * as yup from 'yup';

export const AddExpenseSchema = yup
  .object({
    title: yup.string().required(),
    category: yup.string().required(),
    expense_type: yup.string().required(),
    expense_at: yup.string().required(),
    total: yup.number().required(),
  })
  .noUnknown(true);

export const UpdateExpenseSchema = yup
  .object({
    title: yup.string(),
    category: yup.string(),
    expense_type: yup.string().matches(/(income|expend)/),
    expense_at: yup.string(),
    total: yup.number(),
  })
  .noUnknown(true);

export const SetExpenseSchema = yup
  .object({
    title: yup.string().required(),
    category: yup.string().required(),
    expense_type: yup
      .string()
      .matches(/(income|expend)/)
      .required(),
    expense_at: yup.string().required(),
    total: yup.number().required(),
  })
  .noUnknown(true);

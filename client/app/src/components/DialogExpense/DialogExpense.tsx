import React, { useState } from "react";
import { useCategory } from "src/hooks/useCategory";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Radio,
  Grid,
  Select,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormHelperText,
} from "@material-ui/core/";
import { useForm, Controller } from "react-hook-form";
import styled from "@emotion/styled";
import { rhythm, scale } from "src/utils/typography";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { format } from "date-fns";
import { Expense } from "src/@types/Expense";
import useSwr, { mutate } from "swr";
const Title = styled.h4`
  margin: ${rhythm(0.5)} 0px;
  font-size: ${scale(0.5 / 6).fontSize};
  line-height: ${scale(0.5 / 6).lineHeight};
`;
let resolver = yup.object({
  title: yup.string().required("กรอก"),
  total: yup.number().required("ใส่แต่เลข").typeError("ใส่แต่เลข"),
  expense_type: yup.string().required("เลือกประเภท"),
  category: yup.string().required("เลือกหมวดหมู่"),
  expense_at: yup.date().required("เลือกวันที่").typeError("เลือกวันที่"),
});
interface DialogExpenseProps {
  action: "เพิ่ม" | "แก้ไข";
  expense?: Expense;
  onClose: () => void;
  onClick: (expense: Expense) => void;
  open: boolean;
}
export function DialogExpense(props: DialogExpenseProps) {
  const { data } = useCategory().GetAll();

  const { register, control, handleSubmit, errors } = useForm({
    mode: "onChange",
    resolver: yupResolver(resolver),
    defaultValues: {
      expense_type: props.expense?.expense_type,
      category: props.expense?.category?._id,
      title: props.expense?.title,
      expense_at: props.expense?.expense_at
        ? format(new Date(props.expense?.expense_at), "yyyy'-'MM'-'dd'T'HH:mm")
        : "",
      total: props.expense?.total,
    },
  });

  console.log({ props });
  return (
    <>
      <Dialog
        open={props.open}
        onClose={props.onClose}
        maxWidth={"sm"}
        aria-labelledby="form-dialog-title"
        fullWidth
      >
        <DialogTitle id="form-dialog-title">เพิ่มรายการ</DialogTitle>
        <form onSubmit={handleSubmit(props.onClick)}>
          <DialogContent>
            <Grid container>
              <Grid item xs={4}>
                <Title>ประเภท:</Title>
              </Grid>
              <Grid item xs={8}>
                <FormControl
                  component="fieldset"
                  error={!!errors?.expense_type}
                >
                  <FormHelperText>
                    {errors.expense_type?.message}
                  </FormHelperText>
                  <Controller
                    name="expense_type"
                    control={control}
                    defaultValue="income"
                    render={({ onChange, value }) => (
                      <RadioGroup
                        row
                        aria-label="ประเภท"
                        value={value}
                        onChange={onChange}
                      >
                        <FormControlLabel
                          value="income"
                          control={<Radio />}
                          label="รายรับ"
                        />
                        <FormControlLabel
                          value="expend"
                          control={<Radio />}
                          label="รายจ่าย"
                        />
                      </RadioGroup>
                    )}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <Title>หมวดหมู่:</Title>
              </Grid>
              <Grid item xs={8}>
                <FormControl
                  fullWidth={true}
                  component="fieldset"
                  error={!!errors?.category}
                >
                  <Select
                    native
                    name="category"
                    inputRef={register}
                    style={{ width: "100%" }}
                  >
                    <option aria-label="None" value="" />

                    {data?.map((item) => (
                      <option key={item._id} value={item._id}>
                        {item.title}
                      </option>
                    ))}
                  </Select>
                  <FormHelperText>{errors.category?.message}</FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <Title>รายระเอียด:</Title>
              </Grid>
              <Grid item xs={8}>
                <TextField
                  error={!!errors?.title}
                  name="title"
                  inputRef={register}
                  size="small"
                  helperText={errors.title?.message}
                  fullWidth
                />
              </Grid>

              <Grid item xs={4}>
                <Title>วันที่:</Title>
              </Grid>
              <Grid item xs={8}>
                <TextField
                  id="filled-margin-normal"
                  name="expense_at"
                  type="datetime-local"
                  error={!!errors?.expense_at}
                  helperText={errors.expense_at?.message}
                  inputRef={register}
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item xs={4}>
                <Title>จำนวนเงิน:</Title>
              </Grid>
              <Grid item xs={8}>
                <TextField
                  name="total"
                  id="margin-dense"
                  type="number"
                  error={!!errors?.total}
                  helperText={errors.total?.message}
                  inputRef={register}
                  size="small"
                  fullWidth
                />
              </Grid>
            </Grid>
          </DialogContent>

          <DialogActions>
            <Button type="submit" color="primary">
              บันทึก
            </Button>

            <Button onClick={props.onClose} color="primary">
              ยกเลิก
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
}
export default DialogExpense;

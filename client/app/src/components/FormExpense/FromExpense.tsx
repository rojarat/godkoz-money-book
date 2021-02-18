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
  Input,
  MenuItem,
} from "@material-ui/core/";
import { useForm, Controller } from "react-hook-form";
import styled from "@emotion/styled";
import { rhythm, scale } from "src/utils/typography";
import axios from "axios";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import InputMask from "react-input-mask";
export function FormExpense() {
  const { data } = useCategory().GetAll();

  const [open, setOpen] = useState(false);
  // type FormValues = {
  //   title: string;
  //   total: number;
  //   expense_type: string;
  //   categoty: string;
  //   expense_at: string;
  // };
  let resolver = yup.object({
    title: yup.string().required("กรอก"),
    total: yup.number().required("ใส่แต่เลข").typeError("ใส่แต่เลข"),
    expense_type: yup.string().required("เลือกประเภท"),
    category: yup.string().required("เลือกหมวดหมู่"),
    expense_at: yup.date().required("เลือกวันที่").typeError("เลือกวันที่"),
  });
  const { register, control, handleSubmit, errors } = useForm({
    resolver: yupResolver(resolver),
  });
  const Title = styled.h4`
    margin: ${rhythm(0.5)} 0px;
    font-size: ${scale(0.5 / 6).fontSize};
    line-height: ${scale(0.5 / 6).lineHeight};
  `;
  console.log({ errors });
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = (data: any) => {
    let d = new Date(data.expense_at);
    d.setHours(d.getHours() + 7, d.getMinutes(), 0);
    const expense = {
      ...data,
      expense_at: d.toISOString(),
    };
    console.log("expense ::::", expense);
    // axios
    //   .post("http://localhost:4000/api/v1/expense", expense, {
    //     withCredentials: true,
    //   })
    //   .then((response) => console.log(response))
    //   .catch((error) => console.log(error));
  };
  return (
    <>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        เพิ่มรายการ
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth={"sm"}
        aria-labelledby="form-dialog-title"
        fullWidth
      >
        <DialogTitle id="form-dialog-title">เพิ่มรายการ</DialogTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogContent>
            <Grid container>
              <Grid item xs={4}>
                <Title>ประเภท:</Title>
              </Grid>
              <Grid item xs={8}>
                <FormControl component="fieldset" error={errors?.expense_type}>
                  <FormHelperText>
                    {errors.expense_type?.message}
                  </FormHelperText>
                  <Controller
                    name="expense_type"
                    control={control}
                    defaultValue="income"
                    render={({ onChange, value }) => (
                      <RadioGroup
                        aria-label="ประเภท"
                        name=""
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
                <FormControl component="fieldset" error={errors?.category}>
                  <Select native name="category" inputRef={register} fullWidth>
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
                  error={errors?.title}
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
                  error={errors?.expense_at}
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
                <Controller
                  name="total"
                  control={control}
                  defaultValue=""
                  render={({ onChange, value }) => (
                    <InputMask
                      mask="999999999"
                      maskPlaceholder={null}
                      value={value}
                      onChange={onChange}
                    >
                      {/* <Input type="text" disableUnderline /> */}
                      <TextField
                        id="margin-dense"
                        name="total"
                        type="text"
                        error={errors?.total}
                        helperText={errors.total?.message}
                        inputRef={register}
                        size="small"
                        fullWidth
                      />
                    </InputMask>
                  )}
                />
                {/* <TextField
                  id="filled-margin-normal"
                  type="number"
                  name="total"
                  // inputRef={register}
                  onKeyDown={(event) =>
                    event.keyCode === 8 || event.keyCode === 46
                      ? true
                      : !isNaN(Number(event.key))
                  }
                  size="small"
                  fullWidth
                /> */}
              </Grid>
            </Grid>
          </DialogContent>

          <DialogActions>
            <Button type="submit" color="primary">
              เพิ่ม
            </Button>

            <Button onClick={handleClose} color="primary">
              ลบ
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
}
export default FormExpense;

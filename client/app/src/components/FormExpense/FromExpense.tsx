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
} from "@material-ui/core/";
import { useForm, Controller } from "react-hook-form";
import styled from "@emotion/styled";
import { rhythm, scale } from "src/utils/typography";
import formatISO from "date-fns/formatISO";
export function FormExpense() {
  const { data } = useCategory().GetAll();

  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = React.useState("a");
  const { register, control, handleSubmit } = useForm();

  const Title = styled.h4`
    margin: ${rhythm(0.5)} 0px;
    font-size: ${scale(0.5 / 6).fontSize};
    line-height: ${scale(0.5 / 6).lineHeight};
  `;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };
  const onSubmit = (data: any) => {
    var d = new Date(data.date);
    console.log("d", d);
    d.setHours(d.getHours() + 7, d.getMinutes(), 0);
    console.log(d.toISOString());
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
                <Controller
                  name="firstName"
                  control={control}
                  defaultValue=""
                  render={({ onChange, value }) => (
                    <RadioGroup
                      aria-label="ประเภท"
                      name=""
                      value={value}
                      onChange={onChange}
                    >
                      <FormControlLabel
                        value="รายรับ"
                        control={<Radio />}
                        label="รายรับ"
                      />
                      <FormControlLabel
                        value="รายจ่าย"
                        control={<Radio />}
                        label="รายจ่าย"
                      />
                    </RadioGroup>
                  )}
                />
              </Grid>
              <Grid item xs={4}>
                <Title>หมวดหมู่:</Title>
              </Grid>
              <Grid item xs={8}>
                <Select native label="Age" fullWidth>
                  <option aria-label="None" value="" />
                  {data?.map((item) => (
                    <option key={item._id} value={item._id}>
                      {item.title}
                    </option>
                  ))}
                </Select>
              </Grid>
              <Grid item xs={4}>
                <Title>รายระเอียด:</Title>
              </Grid>
              <Grid item xs={8}>
                <TextField
                  name="รายละเอียด"
                  inputRef={register}
                  size="small"
                  fullWidth
                />
              </Grid>

              <Grid item xs={4}>
                <Title>วันที่:</Title>
              </Grid>
              <Grid item xs={8}>
                <TextField
                  id="filled-margin-normal"
                  type="datetime-local"
                  name="date"
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
                  id="filled-margin-normal"
                  name="total"
                  inputRef={register}
                  size="small"
                  fullWidth
                />
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

import React, { useEffect, useState } from "react";
import CustomCard from "src/components/ui/Card";
import {
  CardContent,
  Container,
  Grid,
  CardActions,
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
} from "@material-ui/core/";
import styled from "@emotion/styled";
import { rhythm, scale } from "src/utils/typography";
import {
  DeleteOutline as DeleteIcon,
  Edit as EditIcon,
} from "@material-ui/icons";
import useSwr, { mutate } from "swr";
import Currency from "src/utils/currency";
import { css } from "@emotion/css";
import { Expense } from "src/@types/Expense";
import { format } from "date-fns";
import thLocale from "date-fns/locale/th";
import axios from "axios";
import { formatISO } from "date-fns";
import { DialogExpense } from "src/components/DialogExpense";

const Card = styled(CustomCard)`
  margin-bottom: ${rhythm(1)};
`;
const Category = styled.h3`
  margin: 0;
  font-size: ${scale(1 / 6).fontSize};
  line-height: ${scale(1 / 6).lineHeight};
  color: var(--green);
`;
const ExpenseType = styled.h3`
  margin: 0;
  text-align: right;
  font-size: ${scale(1 / 6).fontSize};
  line-height: ${scale(1 / 6).lineHeight};
`;
const TypeExpendColor = css`
  color: var(--red);
`;
const TypeIncomeColor = css`
  color: var(--green);
`;
const Title = styled.h4`
  margin: ${rhythm(1.5)} 0px;
  font-size: ${scale(4 / 6).fontSize};
  line-height: ${scale(4 / 6).lineHeight};
`;
const Total = styled.h4`
  margin: ${rhythm(1.5)} 0px;
  text-align: right;
  font-size: ${scale(4.5 / 6).fontSize};
  line-height: ${scale(4.5 / 6).lineHeight};
`;
const DateTime = styled.h4`
  text-align: left;
  font-size: ${scale(1 / 6).fontSize};
  line-height: ${scale(1 / 6).lineHeight};
`;

interface ExpenseCardProps {
  expense: Expense;
}
export function ExpenseCard(props: ExpenseCardProps) {
  const [open, setOpen] = useState(false);
  const [deletebutton, setDeletebutton] = useState(false);

  let ThDate: any = props.expense.expense_at
    ? format(new Date(props.expense.expense_at), "'วัน'EEEE'-'Pp", {
        locale: thLocale,
      })
    : "||";

  function handleUpdate(data: any) {
    let d = new Date(data.expense_at);

    const expense = {
      ...data,
      expense_at: formatISO(d),
    };

    axios
      .put(
        `http://localhost:4000/api/v1/expense/${props.expense._id}`,
        expense,
        {
          withCredentials: true,
        }
      )
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }
  function handleDelete(data: any) {
    axios
      .delete(`http://localhost:4000/api/v1/expense/${props.expense._id}`, {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response);
        mutate("/api/v1/expense");
      })
      .catch((error) => console.log(error));
  }

  return (
    <Card>
      <CardContent>
        <Grid container>
          <Grid item xs={8}>
            <Category>{props.expense.category?.title}</Category>
          </Grid>
          <Grid item xs={4}>
            <ExpenseType
              className={
                props.expense.expense_type === "income"
                  ? TypeIncomeColor
                  : TypeExpendColor
              }
            >
              {props.expense.expense_type === "income" ? "รายรับ" : "รายจ่าย"}
            </ExpenseType>
          </Grid>
          <Grid item xs={8}>
            <Title>{props.expense.title}</Title>
          </Grid>
          <Grid item xs={4}>
            <Total>{Currency(props.expense.total)}</Total>
          </Grid>

          <CardActions style={{ width: "100%", padding: "0" }}>
            <Grid container>
              <Grid item xs={8}>
                <DateTime>{ThDate}</DateTime>
              </Grid>
              <Grid item xs={4}>
                <div style={{ textAlign: "right" }}>
                  <Button
                    variant="outlined"
                    color="primary"
                    startIcon={<EditIcon />}
                    style={{ marginRight: rhythm(1) }}
                    size="small"
                    onClick={() => {
                      setOpen(true);
                    }}
                  >
                    แก้ไขรายการ
                  </Button>
                  <DialogExpense
                    action="แก้ไข"
                    open={open}
                    expense={props.expense}
                    onClick={(expense: any) => {
                      handleUpdate(expense);
                      setOpen(false);
                      mutate("/api/v1/expense");
                    }}
                    onClose={() => {
                      setOpen(false);
                    }}
                  />
                  <Button
                    onClick={() => {
                      setDeletebutton(true);
                    }}
                    variant="outlined"
                    color="primary"
                    startIcon={<DeleteIcon />}
                    size="small"
                  >
                    ลบรายการ
                  </Button>
                  <Dialog
                    maxWidth={"sm"}
                    aria-labelledby="form-dialog-title"
                    fullWidth
                    open={deletebutton}
                    onClose={() => {
                      setDeletebutton(false);
                    }}
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogTitle id="alert-dialog-title">
                      {"ยืนยันการลบรายการ"}
                    </DialogTitle>

                    <DialogActions>
                      <Button
                        color="primary"
                        onClick={(expense: any) => {
                          handleDelete(expense);
                          setDeletebutton(false);
                          mutate("/api/v1/expense");
                        }}
                      >
                        ยืนยัน
                      </Button>
                      <Button
                        color="primary"
                        onClick={() => setDeletebutton(false)}
                      >
                        ยกเลิก
                      </Button>
                    </DialogActions>
                  </Dialog>
                </div>
              </Grid>
            </Grid>
          </CardActions>
        </Grid>
      </CardContent>
    </Card>
  );
}
export default ExpenseCard;

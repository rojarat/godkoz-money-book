import React, { useEffect, useState } from "react";
import ExpenseCard from "src/components/ExpenseCard/ExpenseCard";
import { Layout } from "src/components";
import { useExpense } from "src/hooks/useExpense";
import { DialogExpense } from "src/components/DialogExpense";
import { Button } from "@material-ui/core/";
import axios from "axios";
import { formatISO } from "date-fns";
import { rhythm } from "src/utils/typography";
import useSwr, { mutate } from "swr";
export function Expense() {
  const { data } = useExpense().GetAll();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.title = "รายรับรายจ่าย | Godkoz Money Book";
  }, []);

  function handleCreate(data: any) {
    let d = new Date(data.expense_at);

    const expense = {
      ...data,
      expense_at: formatISO(d),
    };

    axios
      .post("http://localhost:4000/api/v1/expense", expense, {
        withCredentials: true,
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }

  return (
    <Layout>
      <div style={{ marginBottom: rhythm(1) }}>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => {
            setOpen(true);
            mutate("/api/v1/expense");
          }}
        >
          เพิ่มรายการ
        </Button>
      </div>

      <DialogExpense
        action="เพิ่ม"
        open={open}
        onClick={(expense: any) => {
          handleCreate(expense);
          mutate("/api/v1/expense");
          setOpen(false);
        }}
        onClose={() => {
          setOpen(false);
        }}
      />
      {data?.map((expense) => (
        <ExpenseCard expense={expense} key={expense._id} />
      ))}
    </Layout>
  );
}

export default Expense;

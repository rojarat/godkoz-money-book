import React, { useEffect } from "react";
import ExpenseCard from "src/components/ExpenseCard/ExpenseCard";
import { Layout } from "src/components";
import { useExpense } from "src/hooks/useExpense";
import { FormExpense } from "src/components/FormExpense";
export function Expense() {
  const { data } = useExpense().GetAll();

  useEffect(() => {
    document.title = "รายรับรายจ่าย | Godkoz Money Book";
  }, []);

  return (
    <Layout>
      <FormExpense />
      <ExpenseCard />
      <p>{JSON.stringify(data)}</p>
    </Layout>
  );
}

export default Expense;

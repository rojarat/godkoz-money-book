import React, { useEffect } from "react";

import ExpenseCard from "src/components/ExpenseCard/ExpenseCard";

import { Layout } from "src/components";

export function Expense() {
  useEffect(() => {
    document.title = "รายรับรายจ่าย | Godkoz Money Book";
  }, []);
  return (
    <Layout>
      Expense
      <ExpenseCard />
    </Layout>
  );
}

export default Expense;

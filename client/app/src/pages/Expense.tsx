import React, { useEffect } from 'react';
import { Layout } from 'src/components';

export function Expense() {
  useEffect(() => {
    document.title = 'รายรับรายจ่าย | Godkoz Money Book';
  }, []);
  return <Layout>Expense</Layout>;
}

export default Expense;

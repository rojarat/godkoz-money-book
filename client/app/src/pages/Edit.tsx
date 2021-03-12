import React, { useEffect } from "react";
import { Layout } from "src/components";

export default function Home() {
  useEffect(() => {
    document.title = "แก้ไข | Godkoz Money Book";
  }, []);
  return (
    <Layout>
      <h1>ภาพรวม</h1>
    </Layout>
  );
}

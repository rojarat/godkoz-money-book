import React, { useEffect } from 'react';
import { Layout } from 'src/components';
import useUser from 'src/hooks/useUser';

export default function Home() {
  const { data } = useUser();

  useEffect(() => {
    document.title = 'ภาพรวม | Godkoz Money Book';
  }, []);
  return (
    <Layout>
      <h1>ภาพรวม</h1>

      <p>{JSON.stringify(data)}</p>
    </Layout>
  );
}

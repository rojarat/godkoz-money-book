import React from 'react';
import { Toolbar, Container } from '@material-ui/core';
import Navbar from 'src/components/Navbar';

export function Layout({ children }: any) {
  return (
    <div>
      <Navbar />
      <Toolbar />
      <Toolbar />
      <main>
        <Container maxWidth="md">{children}</Container>
      </main>
    </div>
  );
}

export const MemorizedLayout = React.memo(Layout);
export default Layout;

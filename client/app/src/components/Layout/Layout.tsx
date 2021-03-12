import React from "react";
import { Toolbar, Container } from "@material-ui/core";
import Navbar from "src/components/Navbar";
import Sidebar from "src/components/Sidebar";
export function Layout({ children }: any) {
  return (
    <div>
      <Navbar />

      <Toolbar />
      <Toolbar />
      <Sidebar />
      <main>
        <Container maxWidth="md">{children}</Container>
      </main>
    </div>
  );
}

export const MemorizedLayout = React.memo(Layout);
export default Layout;

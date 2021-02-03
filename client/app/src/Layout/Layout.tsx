import React from 'react';
import { typography } from 'src/utils/typography';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Router from 'src/pages/Router';

typography.injectStyles();

const theme = createMuiTheme({
  typography: {
    fontFamily: ['Kanit'].join(''),
  },
  palette: {
    primary: {
      main: '#64ffda',
    },
  },
});

export function Layout() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default Layout;

import React from 'react';
import { typography } from 'src/utils/typography';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Helmet from 'react-helmet';
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
      <Helmet htmlAttributes={{ lang: 'en' }}>
        <title>คลังพระแสงของโกโก้</title>
      </Helmet>
      <Router />
    </ThemeProvider>
  );
}

export default Layout;

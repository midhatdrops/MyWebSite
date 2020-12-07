import React from 'react';
import GlobalStyles from '../theme/globalStyle';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core';
import theme from '../theme/theme';
import AppBar from '../Components/Appbar';
import AboutGrid from '../Components/Grid/AboutGrid';

export default function AboutPage() {
  GlobalStyles();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <AppBar title="About" icon="Profile"></AppBar>
        <br />
        <AboutGrid />
      </CssBaseline>
    </ThemeProvider>
  );
}

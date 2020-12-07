import React from 'react';
import GlobalStyles from '../theme/globalStyle';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core';
import theme from '../theme/theme';
import AppBar from '../Components/Appbar';
import SkillsGrid from '../Components/Grid/SkillsGrid';

export default function SkillsPage() {
  GlobalStyles();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <AppBar title="Skills" icon="Books" />
        <br />
        <SkillsGrid />
      </CssBaseline>
    </ThemeProvider>
  );
}

import React from 'react';
import GlobalStyles from '../theme/globalStyle';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core';
import theme from '../theme/theme';
import AppBar from '../Components/Appbar';
import SocialMediaGrid from '../Components/Grid/SocialMediaGrid';

export default function MediaPage() {
  GlobalStyles();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <AppBar title="Social Media" icon="SocialMedia" />
        <br />
        <SocialMediaGrid></SocialMediaGrid>
      </CssBaseline>
    </ThemeProvider>
  );
}

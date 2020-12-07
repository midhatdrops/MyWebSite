import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#212121',
      light: '#eeeeee',
    },
    secondary: {
      main: '#eeeeee',
    },
    background: {
      default: '#212121',
    },
    text: {
      primary: '#eeeeee',
    },
  },
  typography: {
    fontFamily: ['Ubuntu', 'Nunito', 'Oswald', 'sans-serif'].join(','),
    fontSize: 16,
    h1: {
      fontFamily: ['Oswald', 'sans-serif'].join(','),
      fontSize: '4em',
      letterSpacing: '4px',
      LineHeight: '1.5rem',
      fontWeight: 700,
    },
    // body1: {
    //   fontFamily: ['Nunito', 'sans-serif'].join(','),
    //   FontSize: '0.5rem',
    //   LineHeight: '1.2rem',
    //   fontWeight: 400,
    // },
  },
});

export default theme;

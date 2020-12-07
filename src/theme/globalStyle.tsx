import { makeStyles } from '@material-ui/core';

const GlobalStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '1920px',
    width: '100vw',
    height: '100vh',
    overflowX: 'hidden',
  },
  body: {
    fontFamily: 'Ubuntu',
    color: theme.palette.primary.light,
  },
  a: {
    color: theme.palette.primary.light,
    textDecoration: 'none',
    '&:visited': {
      color: theme.palette.primary.light,
      textDecoration: 'none',
    },
  },
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.4em',
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,.1)',
      outline: '1px solid slategrey',
    },
    '*a': {
      color: theme.palette.primary.light,
      textDecoration: 'none',
      '&:visited': {
        color: theme.palette.primary.light,
        textDecoration: 'none',
      },
    },
  },
}));

export default GlobalStyles;

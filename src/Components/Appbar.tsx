import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import InstagramIcon from '@material-ui/icons/Instagram';
import MenuBar from './MenuBar';

const FlexGrow = makeStyles({
  Grow: {
    flexGrow: 0.5,
  },
  title: {
    fontFamily: 'Nunito',
    fontSize: '2rem',
    lineHeight: '120%',
    letterSpacing: '5px',
    marginLeft: '8px',
  },
});

export default function Appbar({ icon, title }): JSX.Element {
  // const icon = props.icon;
  // const title = props.title;
  function CheckIcon() {
    if (icon === 'Profile') {
      return <AccountCircleIcon />;
    }
    if (icon === 'Books') {
      return <LibraryBooksIcon />;
    }
    if (icon === 'SocialMedia') {
      return <InstagramIcon />;
    }
  }
  const classes = FlexGrow();
  return (
    <AppBar position="static">
      <Toolbar>
        <MenuBar />
        <div className={classes.Grow} />
        {CheckIcon()}
        <Typography className={classes.title}>{title}</Typography>
        <div className={classes.Grow} />
      </Toolbar>
    </AppBar>
  );
}

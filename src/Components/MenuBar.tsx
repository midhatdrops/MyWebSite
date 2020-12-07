import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core';

const MenuStyles = makeStyles((theme) => ({
  Menu: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.light,
  },
  MenuItem: {
    fontFamily: 'Roboto',
    fontSize: '0.9rem',
    fontWeight: 500,
    a: {
      color: theme.palette.primary.light,
      textDecoration: 'none',
    },
  },
}));

export default function MenuBar() {
  const classes = MenuStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Fragment>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        classes={{ paper: classes.Menu }}
      >
        <MenuItem
          onClick={handleClose}
          classes={{ root: classes.MenuItem }}
          component={Link}
          to="/"
        >
          About
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          classes={{ root: classes.MenuItem }}
          component={Link}
          to="/skills"
        >
          Skills
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          classes={{ root: classes.MenuItem }}
          component={Link}
          to="/socialmedia"
        >
          Social Media
        </MenuItem>
      </Menu>
    </Fragment>
  );
}

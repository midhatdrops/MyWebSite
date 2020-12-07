import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';

const GridStyles = makeStyles((theme) => ({
  Grid: {
    width: '100vw',
    height: 'calc(100vh - 64px)',
    marginTop: '50px',
    overflowx: 'none',
    overflowy: 'auto',
  },
  GridItem: {
    width: '500px',
    height: '600px',
    border: '2px dashed #fff',
  },
  Title: {
    fontFamily: 'Nunito',
    FontSize: '30px',
    fontWeight: 700,
    marginTop: '8px',
  },
  SubTitles: {
    fontFamily: 'Nunito',
    FontSize: '15px',
    fontWeight: 500,
    marginTop: '5px',
  },
  LongText: {
    fontFamily: 'Nunito',
    FontSize: '0.5rem',
    FontWeight: 200,
    textAlign: 'justify',
    width: '400px',
    wordWrap: 'break-word',
    height: 'auto',
    overflowY: 'auto',
    marginTop: '5px',
  },
  List: {
    fontFamily: 'Nunito',
    fontSize: '1rem',
    fontWeight: 300,
  },
}));

export default function SocialMediaGrid() {
  const classes = GridStyles();
  return (
    <Grid
      container
      alignItems="center"
      justify="space-between"
      direction="column"
      className={classes.Grid}
    >
      <Grid item lg={12} sm={12}>
        <List classes={{ root: classes.List }}>
          <ListItem>
            <ListItemIcon>
              <TwitterIcon fontSize="small" color="secondary" />
            </ListItemIcon>
            <ListItemText classes={{ primary: classes.List }}>
              @rezenbruno1
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <InstagramIcon fontSize="small" color="secondary"></InstagramIcon>
            </ListItemIcon>
            <ListItemText classes={{ primary: classes.List }}>
              @brunorezende
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <GitHubIcon fontSize="small" color="secondary"></GitHubIcon>
            </ListItemIcon>
            <ListItemText classes={{ primary: classes.List }}>
              /midhatdrops
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <LinkedInIcon fontSize="small" color="secondary"></LinkedInIcon>
            </ListItemIcon>
            <ListItemText classes={{ primary: classes.List }}>
              /brunornovais
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <EmailIcon fontSize="small" color="secondary"></EmailIcon>
            </ListItemIcon>
            <ListItemText classes={{ primary: classes.List }}>
              novais.rezende@gmail.com
            </ListItemText>
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
}

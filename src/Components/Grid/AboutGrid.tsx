import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Image from '../../Images/FotoPerfil.jpg';

import GamesIcon from '@material-ui/icons/Games';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import MusicNoteIcon from '@material-ui/icons/MusicNote';

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
  Avatar: {
    width: '100px',
    height: '100px',
    marginLeft: '150px',
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
    fontSize: '0.8rem',
    fontWeight: 300,
  },
}));

export default function AboutGrid() {
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
        <Avatar src={Image} alt="my profile photo" className={classes.Avatar} />
        <br />
        <Typography align="center" className={classes.Title}>
          Bruno Rezende Novais
        </Typography>
        <Typography align="center" className={classes.SubTitles}>
          23 anos / São Paulo - SP / Solteiro / Dev FrontEnd
        </Typography>
        <p className={classes.LongText}>
          Inicialmente uma criança curiosa com o mundo da computação, comecei a
          aprender programação em cursinhos da região por cerca de meses. Porém,
          por medo de "não me sentir suficiente" acabei não dando sequência aos
          estudos. Segui então para o estudo nas áreas das ciências da saúde,
          após concluir o Ensino Médio e ingressar na faculdade, fiquei
          descontente com o curso e voltei ao cursinho onde permaneci estudando
          por algum tempo.
        </p>
        <p className={classes.LongText}>
          Em 2020 tive que retomar meus estudos em programação e me reencontrei,
          percebendo minha timidez e ignorância quando mais novo. Agora, estudo
          para aprender novas tecnológicas, implementá-las e busco novas
          oportunidades de trabalho para aprender mais sobre a área de
          desenvolvimento.
        </p>
        <List>
          <ListItem>
            <ListItemIcon>
              <GamesIcon fontSize="small" color="secondary"></GamesIcon>
            </ListItemIcon>
            <ListItemText classes={{ primary: classes.List }}>
              Jogador assíduo de RPG's e jogos online
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FastfoodIcon fontSize="small" color="secondary"></FastfoodIcon>
            </ListItemIcon>
            <ListItemText classes={{ primary: classes.List }}>
              Sommelie de Hamburgueres
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <MusicNoteIcon fontSize="small" color="secondary"></MusicNoteIcon>
            </ListItemIcon>
            <ListItemText classes={{ primary: classes.List }}>
              Escuto de tudo um pouco, porém mais fã do Rock e Trance
            </ListItemText>
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
}

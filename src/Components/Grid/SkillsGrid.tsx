import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SchoolIcon from '@material-ui/icons/School';

import TranslateIcon from '@material-ui/icons/Translate';
import ComputerIcon from '@material-ui/icons/Computer';
import BookIcon from '@material-ui/icons/Book';
import WorkIcon from '@material-ui/icons/Work';

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
  SubList: {
    fontFamily: 'Roboto',
    fontSize: '0.8rem',
    fontWeight: 400,
    textAlign: 'center',
    marginLeft: '10px',
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
              <SchoolIcon fontSize="small" color="secondary" />
            </ListItemIcon>
            <ListItemText classes={{ primary: classes.List }}>
              Formação Acadêmica
            </ListItemText>
            <br />
          </ListItem>
          <ListItem alignItems="center">
            <ListItemText classes={{ primary: classes.SubList }}>
              ○ Engenharia de Software UniCesumar 2021-2024
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <WorkIcon fontSize="small" color="secondary" />
            </ListItemIcon>
            <ListItemText classes={{ primary: classes.List }}>
              Projetos
            </ListItemText>
            <br />
          </ListItem>
          <ListItem>
            <ListItemText classes={{ primary: classes.SubList }}>
              <Link
                href="https://github.com/midhatdrops/MyWebSite"
                color="secondary"
                rel="noopener"
              >
                ○ Website de Apresentação
              </Link>{' '}
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText classes={{ primary: classes.SubList }}>
              <Link
                href="https://github.com/midhatdrops/pokepedia"
                color="secondary"
                rel="noopener"
              >
                ○ PokePedia
              </Link>{' '}
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText classes={{ primary: classes.SubList }}>
              <Link
                href="https://github.com/midhatdrops/imersao-alura-nextJS"
                color="secondary"
                rel="noopener"
              >
                ○ Imersão AluraQuiz NextJS
              </Link>{' '}
            </ListItemText>
          </ListItem>
          <ListItem divider={true}>
            <ListItemText classes={{ primary: classes.SubList }}>
              <Link
                href="https://github.com/midhatdrops/digital-wallet-app"
                color="secondary"
                rel="noopener"
              >
                ○ APP de Ciclos de Pagamento c/Redux
              </Link>{' '}
            </ListItemText>
          </ListItem>
          <ListItem alignItems="center">
            <ListItemIcon>
              <TranslateIcon fontSize="small" color="secondary" />
            </ListItemIcon>
            <ListItemText classes={{ primary: classes.List }}>
              Línguas Estrangeiras
            </ListItemText>
            <br />
          </ListItem>
          <ListItem alignItems="center">
            <ListItemText classes={{ primary: classes.SubList }}>
              ○ Inglês - Fluente
            </ListItemText>
          </ListItem>
          <ListItem alignItems="center" divider={true}>
            <ListItemText classes={{ primary: classes.SubList }}>
              ○ Japonês - Básico
            </ListItemText>
          </ListItem>
          <ListItem alignItems="center">
            <ListItemIcon>
              <ComputerIcon fontSize="small" color="secondary" />
            </ListItemIcon>
            <ListItemText classes={{ primary: classes.List }}>
              FrameWorks
            </ListItemText>
            <br />
          </ListItem>
          <ListItem alignItems="center">
            <ListItemText classes={{ primary: classes.SubList }}>
              ○ React / Redux
            </ListItemText>
          </ListItem>
          <ListItem alignItems="center">
            <ListItemText classes={{ primary: classes.SubList }}>
              ○ ReactNative
            </ListItemText>
          </ListItem>
          <ListItem alignItems="center" divider={true}>
            <ListItemText classes={{ primary: classes.SubList }}>
              ○ Material-UI
            </ListItemText>
          </ListItem>
          <ListItem alignItems="center">
            <ListItemIcon>
              <BookIcon fontSize="small" color="secondary" />
            </ListItemIcon>
            <ListItemText classes={{ primary: classes.List }}>
              Cursos
            </ListItemText>
            <br />
          </ListItem>
          <ListItem alignItems="center">
            <ListItemText classes={{ primary: classes.SubList }}>
              ○ Desenvolvimento Web Moderno
              <br />
              <Link
                href="https://www.udemy.com/course/curso-web/"
                color="secondary"
                rel="noopener"
              >
                Link do curso
              </Link>{' '}
              /{' '}
              <Link
                href="https://cutt.ly/whWfrPE"
                color="secondary"
                rel="noopener"
              >
                Link Certificado
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem alignItems="center">
            <ListItemText classes={{ primary: classes.SubList }}>
              ○ Typescript
              <br />
              <Link
                href="https://www.udemy.com/course/typescript-pt/"
                color="secondary"
                rel="noopener"
              >
                Link do curso
              </Link>{' '}
              /{' '}
              <Link
                href="https://drive.google.com/file/d/1b_dVGS9eU4UvmmmPqOR_YtpM_ICC7JQh/view?usp=sharing"
                color="secondary"
                rel="noopener"
              >
                Link Certificado
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem alignItems="center">
            <ListItemText classes={{ primary: classes.SubList }}>
              ○ API REST
              <br />
              <Link
                href="https://www.udemy.com/course/restful-apis/"
                color="secondary"
                rel="noopener"
              >
                Link do curso
              </Link>{' '}
              /{' '}
              <Link
                href="https://drive.google.com/file/d/1DrHdjHXwrRdbfofx4hwHUWwwtXgz2zMm/view?usp=sharing"
                color="secondary"
                rel="noopener"
              >
                Link Certificado
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem alignItems="center">
            <ListItemText classes={{ primary: classes.SubList }}>
              ○ Curso React + Redux completo
              <br />
              <Link
                href="https://www.udemy.com/course/react-redux-pt/"
                color="secondary"
                rel="noopener"
              >
                Link do curso
              </Link>{' '}
              /{' '}
              <Link
                href="https://drive.google.com/file/d/14ozmcV66zqrtoqGVIPUwKsN4bm5_8Qni/view?usp=sharing"
                color="secondary"
                rel="noopener"
              >
                Link Certificado
              </Link>
            </ListItemText>
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
}

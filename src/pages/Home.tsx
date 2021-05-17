import { Container, Typography } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { getRegions } from '../services/config/consults';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import ImgCard from '../components/Card';
import Grid from '@material-ui/core/Grid';

interface Region {
  regionName: string;
  id: string;
  img: string;
  
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(5, 0, 1),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  }, 
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
}));

export default function Home() {
  const classes = useStyles();
  const [dataRegion, setDataRegion] = useState<null | Region[]>(null);
  
  useEffect(() => {
      getRegions().then(response => {
        console.log(response.data);
        setDataRegion(response.data);
      });
  }, []);

  function FormRow() {
    if (dataRegion)
      return (
        <React.Fragment>
            {
                dataRegion
                .map(Region=>(
                    <Grid item xs={4}>
                    <ImgCard
                        name={Region.regionName}
                        endpoint={Region.id}
                        img={Region.img}
                        
                        ></ImgCard>
                    </Grid>
                ))
            }
            
        </React.Fragment>
      );
    else return null;
  }

  return (
    <React.Fragment>
        <div className={classes.heroContent}>
          <Container maxWidth="sm" style={{flex:1,
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'center',}}>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Regiones del Mundo
            </Typography>
            <Typography align="center" color="textPrimary" gutterBottom>
            </Typography>
          </Container>
        </div>
 
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
                <Grid container item xs={12} spacing={4}>
                  <FormRow />
                </Grid>
              </Grid>
        </Container>
          
    </React.Fragment>
  );
}

import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { getEmployees} from '../services/config/consults';
import StickyHeadTable from '../components/Table';
import TransitionsModal from '../components/Formulario';



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

export default function Employees() {
  const classes = useStyles();
  useEffect(() => {
    getEmployees().then(response => {
      console.log(response.data);
    });
}, []);
  
  return (
    <React.Fragment>
        <div className={classes.heroContent}>
          <Container maxWidth="sm" style={{flex:1,
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'center',}}>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Empleados
            </Typography>
            <Typography align="center" color="textPrimary" gutterBottom>
            <TransitionsModal/>
            </Typography>
            
            
          
          </Container>
        </div>
 
        <Container className={classes.cardGrid} maxWidth="md">
        
          {/* End hero unit */}
          {/* <FormRow></FormRow> */}
          <Grid container item xs={12} spacing={3}>
                <StickyHeadTable />
              </Grid> 
        </Container>
          
       
      
      
    </React.Fragment>
  );
}
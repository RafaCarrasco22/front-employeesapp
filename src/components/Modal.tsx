import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import Typography from "@material-ui/core/Typography";
import { getEmployee } from '../services/config/consults';
import { Grid, Input, TextField } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      // padding: theme.spacing(2, 4, 3),
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    root: {
        '& > *': {
          margin: theme.spacing(2),
          //width: '30ch',
          flexGrow: 1,
        },
      },
  }),
);

type Props = {
  open: boolean;
  handleClose: any;
  handleOpen: any;
  endpoint: string;
};

interface User {
    uid?: string;
    name: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    hireDate: Date;
    jobId: number;
    salary: number;
    managerId: number;
    departmentId: number;
}

export default function CharacterModal(props: Props) {
    const classes = useStyles();
  const { open, handleClose, endpoint } = props;
  const [dataCharacter, setDataEmployee] = useState<null | User>(null);

  
  

  
  
  useEffect(() => {
      console.log(endpoint);
      getEmployee(endpoint).then(response => {
        console.log(response.data);
        setDataEmployee(response.data);
      });
    }, [endpoint]);
    

  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogContent dividers>
        <h2 id="transition-modal-title">Detalles del Empleado # {endpoint}</h2>
          <Typography>
          {/* {dataCharacter?[endpoint] : ''} */}
          {/* {dataCharacter ? dataCharacter.nickname : ''} */}
          {dataCharacter?.name}
          </Typography>
          <Typography>
          {/* {dataCharacter?[endpoint] : ''} */}
          {/* {dataCharacter ? dataCharacter.nickname : ''} */}
          {dataCharacter?.lastName}
          </Typography>
          <form className={classes.root} autoComplete="off" >
                
                <TextField id="nombre" value={dataCharacter?.name}label="Nombre" variant="outlined" required/>
                <TextField id="lastName" label="Apellidos" variant="outlined" required/>
                <br></br>
                <TextField id="email"  label="Email" variant="outlined" required/>
                <TextField id="phone"  label="Phone" variant="outlined" required/>
                <br></br>
                <TextField id="jobId"  label="Job ID" variant="outlined" required />
                <TextField id="salary" label="Salario" variant="outlined" required/>
                <br></br>
                <TextField id="departmentId" label="Departamento" variant="outlined" required/>
                <TextField id="managerId" label="Manager" variant="outlined" />
                <br></br>
                <Typography>Fecha Contrataión</Typography>
                <Input type="date" data-date="" data-date-format="YYYY-MM-DD" required/>
                
                <Grid container xs={12}spacing={2} alignItems={'center'}>
                  <Grid item xs={6} md={6} >
                    <Button type="submit" variant="outlined" color="secondary">Actualizar</Button> 
                  
                  </Grid>
                  <Grid item xs={6} >
                  
                    <Button onClick={handleClose}   variant="contained" color="secondary">Eliminar</Button>
                  </Grid>
                </Grid>
            </form>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

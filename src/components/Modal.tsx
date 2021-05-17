import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import Typography from "@material-ui/core/Typography";
import { getEmployee } from '../services/config/consults';
import { Grid, Hidden, Input, TextField } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import axios from 'axios';

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
    hireDate: string;
    jobId: number;
    salary: number;
    managerId: number;
    departmentId: number;
}


export default function CharacterModal(props: Props) {
    const classes = useStyles();
  const { open, handleClose, endpoint } = props;
  const [dataCharacter, setDataEmployee] = useState<null | User>(null);
  
  const [term, setTerm] = useState('');
  const [nombre, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [hireDate, setDate] = useState('');
  const [jobId, setJob] = useState('');
  const [salary, setSal] = useState('');
  const [department, setDep] = useState('');

  
  
  useEffect(() => {
      console.log(endpoint);
      getEmployee(endpoint).then(response => {
        console.log(response.data);
        setDataEmployee(response.data);
        
      });
    }, [endpoint]);

    const submitDelete = () => {
      axios.delete("http://localhost:5051/empleados-service/employees/?id="+endpoint).then((response) => {
        console.log(response);
      }).catch((err) => {
        console.log(err);
      })
    }

    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    
      axios.put("http://localhost:5051/empleados-service/employees", {
        "id": endpoint,
        name: term,
        lastName: nombre,
        email: email,
        phoneNumber: phone,
        hireDate: hireDate,
        jobId: jobId,
        salary: salary,
        // managerId: 1,
        departmentId: department,
      }).then((response) => {
        console.log(response);
      }).catch((err) => {
        console.log(err);
      })
      
  
  }
    

  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogContent dividers>
        <h2 id="transition-modal-title">Detalles del Empleado # {endpoint}</h2>
          <form className={classes.root} autoComplete="off" >
            <input type="hidden" id="identi" value={endpoint}/>
            <TextField id="nombre" value={dataCharacter?.name} label="Nombre" variant="outlined" required/>
            <TextField id="lastName" value={dataCharacter?.lastName} label="Apellidos" variant="outlined" required/>
            <br></br>
            <TextField id="email" value={dataCharacter?.email}  label="Email" variant="outlined" required/>
            <TextField id="phone" value={dataCharacter?.phoneNumber}  label="Phone" variant="outlined" required/>
            <br></br>
            <TextField id="jobId" value={dataCharacter?.jobId}  label="Job ID" variant="outlined" required />
            <TextField id="salary" value={dataCharacter?.salary}  label="Salario" variant="outlined" required/>
                <br></br>
                <TextField id="departmentId" value={dataCharacter?.departmentId}  label="Departamento" variant="outlined" required/>
                <TextField id="managerId" value={dataCharacter?.managerId}  label="Manager" variant="outlined" />
                <br></br>
                <Typography>Fecha Contrataión</Typography>
                <Input type="date" id="fecha" value={dataCharacter?.hireDate.substring(0,10)} data-date="" data-date-format="YYYY-MM-DD" required/>
                
                <Grid container xs={12}spacing={2} alignItems={'center'}>
                  <Grid item xs={6} md={6} >
                    <Button type="submit" variant="outlined" color="secondary">Actualizar</Button> 
                  
                  </Grid>
                  <Grid item xs={6} >
                  
                    <Button onClick={submitDelete} variant="contained" color="secondary">Eliminar </Button>
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

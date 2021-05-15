import React, { useState }  from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Button, Grid, Input, Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

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

export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [term, setTerm] = useState('');
  const [nombre, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [hireDate, setDate] = useState('');
  const [jobId, setJob] = useState('');
  const [salary, setSal] = useState('');
  const [department, setDep] = useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    
    axios.post("http://localhost:5051/empleados-service/employees", {
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
      <Button variant="contained" color="primary" disableElevation type="button" onClick={handleOpen}>
        Agregar
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Agregar Nuevo Employee</h2>
            <form className={classes.root} autoComplete="off" onSubmit={submitHandler} >
                
                <TextField id="nombre" value={term} onChange={(e) => setTerm(e.target.value)} label="Nombre" variant="outlined" required/>
                <TextField id="lastName" value={nombre} onChange={(e) => setName(e.target.value)} label="Apellidos" variant="outlined" required/>
                <br></br>
                <TextField id="email" value={email} onChange={(e) => setEmail(e.target.value)} label="Email" variant="outlined" required/>
                <TextField id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} label="Phone" variant="outlined" required/>
                <br></br>
                <TextField id="jobId" value={jobId} onChange={(e) => setJob(e.target.value)} label="Job ID" variant="outlined" required />
                <TextField id="salary" value={salary} onChange={(e) => setSal(e.target.value)} label="Salario" variant="outlined" required/>
                <br></br>
                <TextField id="departmentId" value={department} onChange={(e) => setDep(e.target.value)}label="Departamento" variant="outlined" required/>
                <TextField id="managerId" label="Manager" variant="outlined" />
                <br></br>
                <Typography>Fecha Contrataión</Typography>
                <Input type="date" data-date="" value={hireDate} onChange={(e) => setDate(e.target.value)} data-date-format="YYYY-MM-DD" required/>
                
                <Grid container xs={12}spacing={2} alignItems={'center'}>
                  <Grid item xs={6} md={6} >
                    <Button type="submit" variant="outlined" color="secondary">Guardar</Button> 
                  
                  </Grid>
                  <Grid item xs={6} >
                  
                    <Button onClick={handleClose}   variant="contained" color="secondary">Cancelar</Button>
                  </Grid>
                </Grid>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

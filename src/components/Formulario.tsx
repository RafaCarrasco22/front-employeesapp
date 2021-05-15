import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

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
      padding: theme.spacing(2, 4, 3),
    },
    root: {
        '& > *': {
          margin: theme.spacing(1),
          width: '30ch',
        },
      },
  }),
);

export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
            <form className={classes.root} noValidate autoComplete="off">
                
                <TextField id="outlined-basic" label="Nombre" variant="outlined" />
                <TextField id="outlined-basic" label="Apellidos" variant="outlined" />
                <br></br>
                <TextField id="outlined-basic" label="Email" variant="outlined" />
                <TextField id="outlined-basic" label="Phone" variant="outlined" />
                <br></br>
                <TextField id="outlined-basic" label="Job ID" variant="outlined" />
                <TextField id="outlined-basic" label="Salario" variant="outlined" />
                <br></br>
                <TextField id="outlined-basic" label="Departamento" variant="outlined" />
                <TextField id="outlined-basic" label="Manager" variant="outlined" />
                <br></br>
                <input type="submit" value="Guardar" />
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

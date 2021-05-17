import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import { getEmployees} from '../services/config/consults';
import CharacterModal from "./Modal";
import { IconButton } from "@material-ui/core";
import VisibilityIcon from '@material-ui/icons/Visibility';

interface Column {
  id: string;
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}
type Props = {
  name: string;
  endpoint: string;
  img: string;
  
};
const columns: Column[] = [
  { id: "id", label: "#", minWidth: 25 },
  { id: "name", label: "Nombre", minWidth: 25 },
  { id: "lastName", label: "Apellidos", minWidth: 170 },
  { id: "salary", label: "Salario", minWidth: 40 },
  
];

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
});

interface Empleado {
    //id: string;
    [id: string]:any;
    name: string;
    lastName: string;
    email: string;
    salary: string;
}

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [dataEmployee, setDataEmployee] = useState<null | Empleado[]>(null);
  const [modal, setModal] = useState('');
  
  const [open, setOpen] = React.useState(false);
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");

  
    useEffect(() => {
        getEmployees().then(response => {
        console.log(response.data);
        setDataEmployee(response.data);
        });
    }, []);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleOpen= (row :any) => {
    //console.log("Ver employee" + row.name + row.lastName);
    console.log(row.id);
    setModal(row.id);
    setOpen(true);
  };


  const handleClose = () => {
    setOpen(false);
    setName("");
    setUrl("");
  };

  return (
    <>
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          {/* <Table stickyHeader aria-label="sticky table"> */}
          <Table>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {dataEmployee &&
                dataEmployee
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                        {columns.map((column, idx) => {
                          const value =
                            column.id === 'id' ? index + 1 : row[column.id];

                          return (
                            <TableCell key={idx} align={column.align}>
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </TableCell>
                            
                          );
                        })}
                        <TableCell>
                              {/* <Button onClick={() => handleOpen(row)}>Ver data</Button> */}
                              <IconButton aria-label="delete"  onClick={() => handleOpen(row)}>
                                <VisibilityIcon />
                              </IconButton>
                            </TableCell>
                      </TableRow>
                    );
                  })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={dataEmployee ? dataEmployee.length : 0}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
      {modal ? (
        <CharacterModal
          open={open}
          handleClose={handleClose}
          handleOpen={handleOpen}
          endpoint={modal}
        ></CharacterModal>
      ) : null}
    </>
  );
}

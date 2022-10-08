import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import { makeStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import { lightBlue, red } from '@material-ui/core/colors'
import { useNavigate } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    button: {
        width: 250,
        margin: theme.spacing(3),
    },
    buttonG:{
        marginTop: 30,
        width:50,
    },
    field: {
        marginTop: 20,
        display: 'block',

    },
    fieldG:{
        marginTop: 20,
        width :'70%',
       

    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: "70%",

    },
    table: {
        minWidth: 650,
      },
    formControll: {
        margin: theme.spacing(1),
        minWidth: "50%",

    },
    
}));
function createData(name, calories, fat, carbs) {
    return { name, calories, fat, carbs };
  }
  const rows = [
    createData('-', 159, 6.0, 24),
    createData('-', 237, 9.0, 37),
    createData('-', 262, 16.0, 24),
    createData('-', 305, 3.7, 67),
    createData('-', 356, 16.0, 49),
  ];


export default function Forwarders () {
    const classes = useStyles()
    let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/AddForwarder`; 
    navigate(path);
  }

    return (
        <Container  size="sm">
            <Box className='con'>

            
            <Typography
                variant="h8"
                color="textSecondary"
                component="h7"
                gutterBottom
            >
               Forwarders  
            </Typography>
            <Button
                className={classes.button}
                    type="Create"
                    color="primary"
                    variant="contained"
                    onClick={routeChange}
                    endIcon={<KeyboardArrowRightIcon />}>
                    Create Forwarders 
                </Button>



                
                
                <FormControl className={classes.formControl}>
                <Box>

               
                <TextField className={classes.fieldG}
                       
                       label="company"
                       variant="outlined"
                       color="secondary"
                       fullWidth
                       multiline
                       rows={1}
                       required
                   />
                   <Button
                className={classes.buttonG}
                    type="Create"
                    color="primary"
                    endIcon={<KeyboardArrowRightIcon />}>
                    GO
                </Button>
 </Box>

                </FormControl>
             

 <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Edit</TableCell>
            <TableCell align="right">Company</TableCell>
            <TableCell align="right">PO number</TableCell>
            <TableCell align="right">Customer PO number</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
</Box>
        </Container>
    )
}

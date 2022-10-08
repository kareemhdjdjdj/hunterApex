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
import { useNavigate } from 'react-router-dom'



const useStyles = makeStyles((theme) => ({
    button: {
        width: 250,
        margin: theme.spacing(3),
    },
    field: {
        marginTop: 20,
        display: 'block',

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
    orders:{
        margin:10,
    },
}));
function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

export default function NewOrder() {
    const classes = useStyles()
    let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `NewOrder`; 
    navigate(path);
  }

    return (
        <Container size="sm">
           



                
                
                <FormControl className={classes.formControl}>
                <TextField className={classes.field}
                       
                       label="Invoice Num"
                       variant="outlined"
                       color="secondary"
                       fullWidth
                       multiline
                       rows={1}
                       required
                   /><TextField className={classes.field}
                       
                   label="Invoice Num"
                   variant="outlined"
                   color="secondary"
                   fullWidth
                   multiline
                   rows={1}
                   required
               />
                    <TextField className={classes.field}
                        label="Custm PO Num:"
                        variant="outlined"
                        color="secondary"
                        fullWidth
                        multiline
                        rows={1}
                        required
                    />

                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="payment-native-simple">payment terms</InputLabel>

                    <Select
                        native
                        color="secondary"


                        inputProps={{
                            name: 'payment',
                            id: 'payment-native-simple',

                        }}
                    >
                        <option aria-label="None" value="" />
                        <option value={10}>Ahmed </option>
                        <option value={20}>Ali</option>
                        <option value={30}>sami</option>
                    </Select>
                   
                </FormControl>
<Box>
            <Typography
            className={classes.formControl}
                variant="h8"
                color="textPrimary"
                component="h7"
                gutterBottom
            >
                Create a New Order
            </Typography>

                <Button
                className={classes.button}
                    type="Create"
                    color="primary"
                    variant="contained"
                    onClick={routeChange}

                    endIcon={<KeyboardArrowRightIcon />}>
                    Create new Order
                </Button>
            </Box>
 <TableContainer component={Paper}>
 <Typography
                variant="h6"
                color="textSecondary"
                component="h2"
                gutterBottom
                className={classes.orders}
            > Orders
            </Typography>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Edit</TableCell>
            <TableCell align="right">Company</TableCell>
            <TableCell align="right">PO number</TableCell>
            <TableCell align="right">Customer PO number</TableCell>
            <TableCell align="right">Order date</TableCell>
            <TableCell align="right">Order total</TableCell>
            <TableCell align="right">Pay status</TableCell>
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

        </Container>
    )
}

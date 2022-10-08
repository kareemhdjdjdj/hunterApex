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
import { useNavigate } from "react-router-dom";


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
    formControll: {
        margin: theme.spacing(1),
        minWidth: "50%",

    },
}));

export default function NewOrder() {
    const classes = useStyles()
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `/Addcus`; 
      navigate(path);
    }
    return (
        <Container size="sm">
            <Typography
                variant="h6"
                color="textSecondary"
                component="h2"
                gutterBottom
            >
                Create a New Order
            </Typography>


            <form noValidate autoComplete="off" >

                <FormControl className={classes.formControll}>
                    <InputLabel htmlFor="Customer-native-simple">Customer</InputLabel>

                    <Select
                        native
                        color="secondary"


                        inputProps={{
                            name: 'Customer',
                            id: 'Customer-native-simple',

                        }}
                    >
                        <option aria-label="None" value="" />
                        <option value={10}>Ahmed </option>
                        <option value={20}>Ali</option>
                        <option value={30}>sami</option>
                    </Select>

                </FormControl>
                <Button className={classes.button}
                    type="Create"
                    color="primary"
                    variant="contained"
                    onClick={routeChange}
                    endIcon={<KeyboardArrowRightIcon />}>
                    Add new Customer
                </Button>
                <FormControl className={classes.formControl}>
                    <TextField className={classes.field}
                       
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
                    <TextField 
                        id="date"
                        label="Order Date"
                        type="date"
                        fullWidth
                        defaultValue="2017-05-24"
                        className={classes.field}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </FormControl>



                <Button
                    type="Create"
                    color="primary"
                    variant="contained"
                    endIcon={<KeyboardArrowRightIcon />}>
                    Submit
                </Button>
            </form>


        </Container>
    )
}

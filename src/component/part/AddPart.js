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
import  Breakpoint  from '../BreakPoint/BreakPoints'
import {Divider} from '@material-ui/core'
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
        marginTop:10

    },
}));

export default function NewOrder() {
    const classes = useStyles()
    
    return (
        <Container size="sm">
            <Typography
                variant="h6"
                color="textSecondary"
                component="h2"
                gutterBottom
            >
              Add/Modify part
            </Typography>


            <form noValidate autoComplete="off" >

            <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="payment-native-simple">Supplier</InputLabel>

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
               
                <FormControl className={classes.formControl}>
                <TextField className={classes.field}
                        label="Product Num"
                        variant="outlined"
                        color="secondary"
                        fullWidth
                        multiline
                        rows={1}
                        required
                    />
                    
                    <TextField className={classes.field}
                        label="Description"
                        variant="outlined"
                        color="secondary"
                        fullWidth
                        multiline
                        rows={4}
                        required
                    /><TextField className={classes.field}
                    label="Cost of good "
                    helperText="Ex: 0.99 or 1300.000"
                    variant="outlined"
                    color="secondary"
                    fullWidth
                    multiline
                    rows={1}
                    required
                />
                <TextField className={classes.field}
                    label="Box Quantity"
                    variant="outlined"
                    color="secondary"
                    fullWidth
                    multiline
                    rows={1}
                    required
                />

                </FormControl>
               



                <Button
                    type="Create"
                    color="primary"
                    variant="contained"
                    endIcon={<KeyboardArrowRightIcon />}>
                    Create
                </Button>
            </form>
            
            <form noValidate autoComplete="off" >
           
            <FormControl className={classes.formControll}>
            <Divider /><Typography
                variant="h6"
                color="textSecondary"
                component="h2"
                gutterBottom
            
            >
             Notes
            </Typography>
             <TextField className={classes.field}
                        label="Notes"
                        variant="outlined"
                        color="secondary"
                        fullWidth
                        multiline
                        rows={5}
                        required
                    />
                </FormControl>
            </form>
            <Breakpoint/>

        </Container>
    )
}

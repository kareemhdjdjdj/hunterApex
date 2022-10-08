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

    return (
        <Container size="sm">
                <Button
                    type="Create"
                    color="primary"
                    variant="contained"
                    endIcon={<KeyboardArrowRightIcon />}>
                    Exiting Commission orders
                </Button>



            <Typography
                variant="h6"
                color="textSecondary"
                component="h2"
                gutterBottom
            >
                New Commission report
            </Typography>


            <form noValidate autoComplete="off" >

                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="payment-native-simple">Commission payee</InputLabel>

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
                    /></FormControl>
                    <FormControl className={classes.formControl}><InputLabel htmlFor="payment-native-simple">mode</InputLabel>

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



                <Button
                    type="Create"
                    color="primary"
                    variant="contained"
                    endIcon={<KeyboardArrowRightIcon />}>
                    Calculate
                </Button>
            </form>


        </Container>
    )
}

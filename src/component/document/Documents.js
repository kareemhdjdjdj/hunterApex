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
        <Typography
            variant="h6"
            color="textSecondary"
            component="h2"
            gutterBottom
        >
            search
        </Typography>


        <form noValidate autoComplete="off" >


            <FormControl className={classes.formControl}>

                <TextField className={classes.field}
                    label="PO Number"
                    variant="outlined"
                    color="secondary"
                    fullWidth
                    multiline
                    rows={1}
                    required
                />
                <TextField className={classes.field}

                    label="Company"
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
                Search
            </Button>
        </form>


    </Container>
    )
}

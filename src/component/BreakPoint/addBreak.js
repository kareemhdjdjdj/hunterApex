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
import { green } from '@material-ui/core/colors'
import { color } from '@mui/system'


const useStyles = makeStyles((theme) => ({
    button: {
        width: 250,
        margin: theme.spacing(2),
    },  button1: {
        width: 250,
        marginTop: theme.spacing(5),
        margin: theme.spacing(2),
        backgroundColor:"#388e3c"
        ,color:"#ffffff"
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
                Add Break point
            </Typography>


            <form noValidate autoComplete="off" >




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
                   <TextField className={classes.field}
                       
                   label="Breakpoint"
                   variant="outlined"
                   color="secondary"
                   fullWidth
                   multiline
                   rows={1}
                   required
               />
                    <TextField className={classes.field}
                        label="Cost"
                        variant="outlined"
                        color="secondary"
                        fullWidth
                        multiline
                        rows={1}
                        required
                    />
                </FormControl>

                <FormControl >
                <Button
                   className={classes.button1}
                    type="Create"
                    
                    variant="contained"
                    endIcon={<KeyboardArrowRightIcon />}>
                    Applay changes
                </Button>
                <Button
                className={classes.button}
                    type="Create"
                    color="secondary"
                    variant="contained"
                    endIcon={<KeyboardArrowRightIcon />}>
                    delete
                </Button>

            

                <Button   className={classes.button}
                    type="Create"
                    color="primary"
                    variant="contained"
                    endIcon={<KeyboardArrowRightIcon />}>
                    cancel
                </Button>
               </FormControl>
            </form>


        </Container>
    )
}

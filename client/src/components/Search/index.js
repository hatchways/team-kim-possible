import React, {useState} from 'react'
import 'date-fns';
import { Grid, Divider, Button, FormControl, InputLabel, MenuItem, Select} from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker} from '@material-ui/pickers';
import {Wrapper} from './styled';
import {useStyles} from './styled';

const cities=['Paris', 'London', 'Seatle'];
const Search = () => {

    const classes=useStyles();
    const [state,setState]=useState({
        departureCity: '',
        arrivalCity: '',
        departureDate: new Date(),
        arrivalDate: new Date(),
        numOfTravellers: 1
    });

    const handleChange=(e)=>{
        setState({...state,[e.target.name]:e.target.value})
    }
    const handleSubmit=()=>{
        console.log(state)
    }

    return (
        <div className={classes.root}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container >
                    <Grid item xs={12} sm={2} className={classes.item}>    
                        <FormControl className={classes.formControl}>
                            <InputLabel shrink>From</InputLabel>
                            <Select
                                className={classes.input}
                                name='departureCity'
                                value={state.departureCity}
                                onChange={handleChange}
                                displayEmpty
                            >
                            <MenuItem disabled value=""><em>City</em></MenuItem>
                            {cities.map(city=>(<MenuItem value={city}>{city}</MenuItem>))}
                            </Select>
                        </FormControl>
                        <Divider orientation="vertical" flexItem />
                    </Grid>
                    
                    <Grid item xs={12} sm={2} className={classes.item}>
                        <FormControl className={classes.formControl}>
                            <InputLabel shrink>Where to go</InputLabel>
                            <Select
                                className={classes.input}
                                name='arrivalCity'
                                value={state.arrivalCity}
                                onChange={handleChange}
                                displayEmpty
                            >
                            <MenuItem disabled value=""><em>City</em></MenuItem>
                            {cities.map(city=>(<MenuItem value={city}>{city}</MenuItem>))}
                            </Select>
                        </FormControl>
                        <Divider orientation="vertical" flexItem />
                    </Grid>
                    
                    <Grid item xs={12} sm={2} className={classes.item}>
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            className={classes.input}
                            label="Arrival"
                            value={state.arrivalDate}
                            minDate={new Date()}
                            onChange={e=>setState({...state,arrivalDate:e})}
                        />
                        <Divider orientation="vertical" flexItem />
                    </Grid>
                    
                    <Grid item xs={12} sm={2} className={classes.item}>
                    <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            className={classes.input}
                            label="Departure"
                            value={state.departureDate}
                            minDate={new Date()}
                            onChange={e=>setState({...state,departureDate:e})}
                        />
                        <Divider orientation="vertical" flexItem/>
                    </Grid>        
                    <Grid item xs={12} sm={2} className={classes.item}>
                        <FormControl className={classes.formControl}>
                            <InputLabel shrink>Travellers</InputLabel>
                            <Select
                                className={classes.input}
                                name='numOfTravellers'
                                value={state.numOfTravellers}
                                onChange={handleChange}
                            >
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                                </Select>
                        </FormControl>
                        <Divider orientation="vertical" flexItem />
                    </Grid>
                    <Grid item xs={12} sm={2} className={classes.item}>
                         <FormControl className={classes.formControl}>
                            <Button class={classes.btn} variant='contained' type='submit' onClick={handleSubmit}> Search</Button>
                        </FormControl>
                    </Grid>
                </Grid>
            </MuiPickersUtilsProvider>
        </div>
    )
}

export default Search

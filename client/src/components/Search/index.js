import React, {useState} from 'react'
import 'date-fns';
import { Grid, Divider, Button} from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker} from '@material-ui/pickers';
import {Wrapper} from './styled'

const Search = () => {

    const [arrivalDate,setArrivalDate]=useState(new Date());
    const handleDateChange=()=>{};


    return (
        <Wrapper>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container>
                    <Grid item xs={12} sm={2}>    
                        <Grid className='title'>From</Grid>
                        <Grid className='data'>Torono</Grid>
                    </Grid>
                    <Divider orientation="vertical" flexItem />
                    <Grid item xs={12} sm={2}>
                        <Grid className='title'>Where to go</Grid>
                        <Grid className='data'>Bali</Grid>
                    </Grid>
                    <Divider orientation="vertical" flexItem />
                    <Grid item xs={12} sm={2}>
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="Arrival"
                            value={arrivalDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                        />
                    </Grid>
                    <Divider orientation="vertical" flexItem />
                    <Grid item xs={12} sm={2}>
                    <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="Departure"
                            value={arrivalDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                        />
                    </Grid>
                    <Divider orientation="vertical" flexItem />
                    <Grid item xs={12} sm={2}>
                        <Grid className='title'>Travellers</Grid>
                        <Grid className='data'>2 travellers</Grid>
                    </Grid>
                    <Divider orientation="vertical" flexItem />
                    <Grid item xs={12} sm={2}>
                        <Button variant='contained'> Search</Button>
                    </Grid>   
                </Grid>
            </MuiPickersUtilsProvider>
        </Wrapper>
    )
}

export default Search

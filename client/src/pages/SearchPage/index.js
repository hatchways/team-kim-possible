import React from 'react';
import {Container, Grid, Typography} from '@material-ui/core';
import Search from '../../components/Search/index';
import {Wrapper} from './styled'

const SearchPage = () => {
    return (
        <Wrapper>
            <Grid >
                <Grid container className='main'>
                    <Grid item xs={12} sm={5}> 
                        <Typography variant='h4'>Find the flight and start the holiday</Typography>
                    </Grid>
                    <Grid item xs={12} sm={7}>
                    </Grid>  
                </Grid>
                <Grid item xs={12} className='footer'></Grid> 
            </Grid>
            <Container>
                <Search/>
            </Container>
        </Wrapper>

    )
}

export default SearchPage
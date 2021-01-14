import React from 'react';
import {Container, Grid, Typography} from '@material-ui/core';
import Search from '../../components/Search/index';
import {Wrapper} from './styled'
import {useStyles} from './styled';

const SearchPage = () => {
    const classes=useStyles();

    return (
        <div className={classes.root}>
            <Grid >
                <Grid container className={classes.main}>
                    <Grid item xs={12} sm={5} className={classes.item5}> 
                        <Typography variant='h4' className={classes.header}>Find the flight and start the holiday</Typography>
                    </Grid>
                    <Grid item xs={12} sm={7} className={classes.item7}>
                    </Grid>  
                </Grid>
                <Grid item xs={12} className={classes.footer}></Grid> 
            </Grid>
            <Container className={classes.container}>
                <Search/>
            </Container>
        </div>

    )
}

export default SearchPage
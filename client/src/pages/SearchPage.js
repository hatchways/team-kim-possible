import React from 'react';
import {Container, Grid, Typography} from '@material-ui/core';
import Search from '../components/Search';
import { makeStyles } from '@material-ui/core/styles'

const useStyles=makeStyles({
    root:{
        height:'calc(100vh - 100px)',
        position:'relative'
    },
    main :{
        height:'calc(100vh - 100px - 130px)'
    },
    footer:{
        height:'130px',
        backgroundColor: '#EBF0F7',
        height: '130px'
    },
    item5:{
        margin: 'auto auto',
        textAlign: 'center',
        padding:'0 40px',},
    header:{
        fontWeight:'550',
        fontSize: '2rem'
    },
    item7:{
        backgroundImage:'url("/images/nature.jpg")'
    },
    container:{
        position:'absolute',
        bottom: '90px',
        width:'100%'
    }

}
)

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
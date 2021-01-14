import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles'


export const useStyles=makeStyles({
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
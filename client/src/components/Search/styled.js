
import { makeStyles } from '@material-ui/core/styles'

export const useStyles=makeStyles({
    root:{
        height:'90px',
        width:'80%',
        background:'white',
        margin:'0 auto',
        borderRadius: '20px',
        boxShadow: '0 0 5px 5px rgba(221, 221, 240, 0.7)',
        display:'flex',
        alignItems:'center'
    },
    item:{
        padding: '0 20px',
    },
    btn: {
        backgroundColor:'#FAAC2F',
        color: 'white',
        padding:  '10px 20px',
        border: 'none',
        marginTop:'3px',
        borderRadius: '5px'
        
    },
    formControl:{
        width:'100%',
        marginTop:'16px',
    },
    input: {
        fontSize:'0.8rem',
    }
}
   
    )
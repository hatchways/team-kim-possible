import styled from 'styled-components';

export const Wrapper = styled.div`
height:90px;
width:80%;
background:white;
margin:0 auto;
border-radius: 20px;
box-shadow: 0 0 5px 5px rgba(221, 221, 240, 0.7);
display:flex;
align-items:center;
.MuiGrid-item{
    padding-left:20px;
    & .title{
        font-size: 0.6rem;
        font-weight: 600;
        color: #C7D9FA;
        margin-bottom:3px;
    }
    & .data {
        font-size: 0.7rem;
        font-weight: 600;
    }
    button {
        background-color:#FAAC2F;
        color: white;
        font-size: 0.7rem;
    padding:  5px 20px;
    }};
#date-picker-inline{
    font-size:0.8rem};
.MuiIconButton-root{
    width:3px;
}
       
       
`

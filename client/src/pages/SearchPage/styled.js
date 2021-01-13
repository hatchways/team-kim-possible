import styled from 'styled-components';

export const Wrapper = styled.div`
height:calc(100vh - 100px);
position:relative;
.main {
    height:calc(100vh - 100px - 130px);
}
.footer{height:130px}
.MuiGrid-grid-sm-5{
    margin: auto auto;
    text-align: center;
    padding:0 40px;
    & .MuiTypography-h4{
        font-weight:550;
        font-size: 2rem;
    }
}
.MuiGrid-grid-sm-7{
    background-image:url("/images/nature.jpg");
}
.footer{
    background-color: #EBF0F7;
    height: 130px;
}
.MuiContainer-root{
    position:absolute;
    bottom: 90px;
    width:100%
}
`
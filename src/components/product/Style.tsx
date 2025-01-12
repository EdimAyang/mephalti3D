//#043565, #07529D,#C5E0FC,#D8EAFD,#0E0F19


import styled from "styled-components";

export const Product = styled.section`
    width:100%;
    height:500px;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    /* background-color: #07529D; */
    /* padding:10px; */
    position: relative;
    top:5%;
        h2{
        text-align:center;
        padding:15px;
        color:#f49f0a;
        }
            
@media screen and (max-width:750px){
    height:450px;
    top:27%;
}
`

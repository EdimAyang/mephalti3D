import styled from "styled-components";

export const NewsL = styled.section`
    width:70%;
    height:300px;
    margin:0 auto;
    background-color:#0E0F19;
    position:relative;
    top:10%;
    padding:10px;
    border-radius:10px;
    h2{
        text-align:center;
        color:#fff;
        padding:10px;
    }

    p{
        text-align:center;
        color:#fff;
    }

    @media screen and (max-width:750px){
        width:90%;
        top:35%;
        height:200px;
    }

`

export const InputWrapper = styled.form`
    width:60%;
    /* border:1px solid; */
    height:100px;
    /* border:1px solid #fff; */
    display:flex;
    justify-content:center;
    justify-content:space-between;
    align-items:center;
    margin:0 auto;
    margin-top:50px;

    input{
        width:70%;
        padding:10px;
        border-radius:5px;
        background-color:transparent;
        border:0.5px solid #ffff;
        color:#fff;
        outline:none;
        
    }
    @media screen and (max-width:750px){
        width:100%;
        gap:7px;
        padding:7px;
        margin-top:10px;
    }
`
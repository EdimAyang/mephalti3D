//Colors #072AC8,#FFB238;
//#043565, #07529D,#C5E0FC,#D8EAFD,#1#C5E0FC,#0E0F19

import styled from "styled-components";

export const ContactStyled = styled.div`
    height: 100%;
    width:100%;
`

export const ContactHero = styled.header`
    width:100%;
    height:600px;
    background-color:#043565;
    position:relative;
    top:5%;
    display:flex;
    justify-content:space-between;
    padding:10px;
    align-items:center;

    @media screen and (max-width:750px){
        flex-direction:column;
        top:4px;
    }

`
export const ConText = styled.div`
    color:#fff;
    display:flex ;
    flex-direction:column;
    height:100%;
    padding:20px;
    padding-left:70px;
    justify-content:center;
    h1{
        font-size:50px;
        margin-bottom:20px;
    }
    p{
        width:60%;
        line-height:1.6em;
    }

    @media screen and (max-width:750px){
        padding-left:20px;
        height:50%;
        text-align:center;

        h1{
            margin-bottom:10px;
        }

        p{
            width: 100%;
        }

    }
`

export const ConImage = styled.div`
    width:50%;
    height:100%;
    background-image:url("assets/Customer-Service-Illustration.jpg");
    background-repeat:no-repeat;
    background-position:center;
    background-size:cover;
    border-radius:10%;
    transform:scale(0.8);

    @media screen and (max-width:750px){
        width:100%;
        transform:scale(0.9);
    }
`
export const FormWrapper = styled.section`
    width:100%;
    height:600px;
    padding:10px;
    padding-left:20px;
    padding-right:20PX;
    display:flex;
    position: relative;
    top:5%;
    justify-content:space-between;

    @media screen and (max-width:750px){
        flex-direction:column;
        padding:10px;
        gap:20px;
    }
`
export const ConForm = styled.form`
    padding:10px;
    width:40%;
    height:100%;
    display:flex;
    flex-direction:column;
    position:relative;

    label{
    color:#0E0F19;
    position:absolute;
    top:36%;

    span{
        color: #072AC8;
    }

    }

    @media screen and (max-width:750px){
        width:100%;

        label{
            top:40%;
        }
    }

`

export const NamesInput = styled.div`
    width:100%;
    height:40px;
    display:flex;
    justify-content:space-between;
    margin-top:40px;

    input{
    width:40%;
    padding:5px;
    border-radius:5px;
    outline:none;
    box-shadow:3px 3px 20px rgb(0 ,0 ,0, 0.2);
    color:#0E0F19;
    border:none;
    }

    @media screen and (max-width:750px){
        input{
            width:45%;
            
        }
    }
`

export const EmailNumInput = styled.div`
    width:100%;
    height:40px;
    display:flex;
    justify-content:space-between;
    margin-top:40px;

    input{
        width:40%;
        padding:5px;
        border-radius:5px;
        outline:none;
        border:none;
        box-shadow:3px 3px 20px rgb(0 ,0 ,0, 0.2);
        color:#0E0F19;
        text-underline-offset:none;
    }

    @media screen and (max-width:750px){
    input{
        width:45%;
        
    }
}
`

export const TextArea = styled.textarea`
    width:100%;
    height:160px;
    border:1px solid;
    margin-top:15%;
    margin-bottom:20%;
    border-radius:5px;
    outline:none;
    resize:none;
    padding:20px;
`

export const SocialMedia = styled.div`
    width:20%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    justify-content:center;
    gap:20px;
    margin-right:10%;

    @media screen and (max-width:750px){
        width:80%;
        margin:0 auto;
    }

`
export const Icon1 = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:100%;
    height:90px;
    padding:10px;
    border-radius:5px;
    flex-direction:column;
    box-shadow:3px 3px 20px rgb(0 ,0 ,0, 0.2);

    img{
        width:40px;
        height:40px;
    }
`
export const Icon2 = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:100%;
    height:90px;
    padding:10px;
    border-radius:5px;
    flex-direction:column;
    margin-top:30px;
    box-shadow:3px 3px 20px rgb(0 ,0 ,0, 0.2);

    img{
        width:40px;
        height:40px;
    }
`

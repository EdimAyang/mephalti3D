import styled from "styled-components";

export const FooterStyle = styled.footer`
    width:100%;
    height:300px;
    padding:15px;
    position:relative;
    top:50%;
    background: hsla(192, 95%, 50%, 1);
    background: linear-gradient(90deg, hsla(192, 95%, 50%, 1) 0%, hsla(225, 89%, 47%, 1) 100%);
        
    background: -moz-linear-gradient(90deg, hsla(192, 95%, 50%, 1) 0%, hsla(225, 89%, 47%, 1) 100%);
        
    background: -webkit-linear-gradient(90deg, hsla(192, 95%, 50%, 1) 0%, hsla(225, 89%, 47%, 1) 100%);
        
    filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#07C8F9", endColorstr="#0D41E1",    GradientType=1 );
    display:flex;
    justify-content:space-between;

    h1{
        color:#ffff;
        padding:10px;
        span{
            font-size:30px;
            color:#F49F0A;
        }
    }
     @media screen and (max-width:750px){
        flex-direction:column;
        height:550px;
        top:43%;
     }
`

export const InfoWrapprer = styled.div`
    width:80%;
    height:100%;
    display:flex;
    justify-content:space-between;

    @media screen and (max-width:750px){
        flex-direction:column;
    }

`
export const Location = styled.div`
    color:#ffff;
    text-align:center;
    padding:10px;
    h4{
        margin-bottom:10px;
        text-align:start;
        color:#F49F0A;
    }
    &>div{
        text-align:start;
    }
`

export const SocialMedia = styled.div`
    color:#fff;
    text-align:center;
    padding:10px;
    h4{
    margin-bottom:10px;
    text-align:start;
    color:#F49F0A;
    }
    &>div{
        text-align:start;
    }
`
export const Info = styled.div`
    color:#ffff;
    text-align:center;
    padding:10px;
    h4{
        margin-bottom:10px;
        text-align:start;
        color:#F49F0A;
    }
    &>div{
        text-align:start;
    }
`

export const Mediawrapper = styled.div`
    display:flex;
    gap:10px;
    justify-content:space-between;
    margin-top:10%;

    img{
        width:30px;
        height:30px;
    }

    img:hover{
        transform:scale(1.1);
        cursor: pointer;
    }

    @media screen and (max-width:750px){
        gap:10px;
        width:40%;
    }
`

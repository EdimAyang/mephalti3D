import styled from "styled-components";

interface Iprops{
    ColorW:string;
}

export const Shopstyles = styled.div`
    height:100vh;
    width:100%;
`

export const Container = styled.header`
background: hsla(192, 95%, 50%, 1);

background: linear-gradient(90deg, hsla(192, 95%, 50%, 1) 0%, hsla(225, 89%, 47%, 1) 100%);

background: -moz-linear-gradient(90deg, hsla(192, 95%, 50%, 1) 0%, hsla(225, 89%, 47%, 1) 100%);

background: -webkit-linear-gradient(90deg, hsla(192, 95%, 50%, 1) 0%, hsla(225, 89%, 47%, 1) 100%);

filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#07C8F9", endColorstr="#0D41E1", GradientType=1 );
    width:100%;
    height:500px;
    padding:30px;
    position:relative;
    top:38px;
    display:flex;
    justify-content:center;
    align-items:center;
    justify-content:space-between;
    gap:5px;

    @media screen and (max-width:750px){
    flex-direction:column;
    height:700px;
    padding:10px;
}
`
export const FileContainer = styled.div`
padding:10px;
height:100%;
flex:1;
display:flex;
align-items:center;
flex-direction:column;
h3{
    font-size:30px;
    padding:10px;
    color:#ffffffd5;
}
div{
    width:40%;
    height:30%;
    padding:15px;
    cursor: pointer;
    margin-top:20px;
    input{
    display:none;
    }
    label:active{
    transform:scale(0.9)
}
img{
    cursor: pointer;
    width:100%;
    height:100%;
}
}

@media screen and (max-width:750px){
    width:100%;
    flex-direction:column;

    div{
        width:50%;
        height:50%;
    }
    
}
`


export const Discription = styled.div`
padding:10px;
height:100%;
width:30%;
h3{
    font-size:30px;
    padding:10px;
    color:#ffffffe2;
    text-align:center;
}
@media screen and (max-width:750px){
    width:100%;
    flex-direction:column;
    
    h3{
        font-size:20px;
    }
}
`
export const Quantity = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
width:100%;
height:70px;
margin-top:15px;
padding:10px;
p{
    color:#000;
}
&>div{
    width:70%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    span{
        font-size:22px;
        color:#ffffffe2;
    }
}
@media screen and (max-width:750px){
    div{
    span{
        font-size:15px;
    }
    p{
        font-size:13px;
    }
    }
}
`

export const BtnWrapper =  styled.section`
width:70%;
height:50%;
display:flex;
justify-content:space-between;
span{
    font-size:20px;
    color:#fff;
}
`
export const ColorWrapper = styled.div<Iprops>`
display:flex;
justify-content:space-between;
align-items:center;
width:100%;
height:70px;
margin-top:15px;
padding:10px;

&>div{
    width:70%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    span{
        font-size:22px;
        color:#ffffffe2;
    }
}

input{
    border:none;
    height:100%;
    border-radius:5px;
    outline:none;
    width:20%;
    display:none;
}

label{
    width:10%;
    padding:20px;
    background-color:${({ColorW})=>  `${ColorW}` };
    border-radius:50%;
}
@media screen and (max-width:750px){
    div{
    span{
        font-size:15px;
    }
    p{
        font-size:13px;
    }
}
}
 `
export const BtnContainer = styled.div`
width:100%;
text-align:center;
margin-top:20%;
@media screen and (max-width:750px){
   margin-top:10%;
}
`

export const CostWrapper = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
width:100%;
height:70px;
margin-top:15px;
padding:10px;

&>div{
    width:70%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    span{
        font-size:20px;
        color:#ffffffe2;
    }
    section{
        height:100%;
        span{
            font-size:25px;
        }
    }
}

@media screen and (max-width:750px){
    div{
        span{
            font-size:15px;
        }
        p{
            font-size:13px;
        }
    }
}
`

export const  DeliveryDetails = styled.section`
width:100%;
height:600px;
padding:10px;
position:relative;
top:40px;

h3{
    text-align:center;
    padding:20px;
    font-size:25px
}
`
export const DetailsWrapper = styled.div`
    width:40%;
    margin:0 auto;
    height:80%;
    border-radius:10px;
    box-shadow:0px 0px 30px rgba(0, 0, 0 ,0.5);
    padding:25px;
    margin-top:3%;
    div{
    width:100%;
    text-align:center;
    margin-top:20px;
    }
    @media screen and (max-width:750px){
        width:90%;
    }
`
export const InfoCon = styled.section`
    width:100%;
    height:30px;
    border-bottom:1px solid;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:5px;
    margin-bottom:10px;
p{
font-weight:bold;
}
`

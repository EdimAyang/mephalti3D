import styled from "styled-components";
//Colors #072AC8,#FFB238;
//#043565, #07529D,#C5E0FC,#D8EAFD,#1#C5E0FC,#0E0F19
export const StyledHome = styled.div`
    height: 100vh;
    width:100%;
`

export const Hero = styled.header`
    width:100%;
    height:690px;
    background: hsla(192, 95%, 50%, 1);

    background: linear-gradient(90deg, hsla(192, 95%, 50%, 1) 0%, hsla(225, 89%, 47%, 1) 100%);
    
    background: -moz-linear-gradient(90deg, hsla(192, 95%, 50%, 1) 0%, hsla(225, 89%, 47%, 1) 100%);
    
    background: -webkit-linear-gradient(90deg, hsla(192, 95%, 50%, 1) 0%, hsla(225, 89%, 47%, 1) 100%);
    
    filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#07C8F9", endColorstr="#0D41E1", GradientType=1 );
    background-position:center;
    background-size:cover;
    background-repeat:no-repeat;
    display:flex;
    justify-content:center;
    align-items:center;
    justify-content:space-between;
    padding:10px;
    position: relative;
    top:40px;
    gap:10px;

    @media screen and (max-width:750px){
        flex-direction:column;
        height:1200px;
    }

    @media screen and (max-width:350px){
    height:1390px;
    }
`
export const HeroText = styled.div`
    height:100%;
    width:60%;
    align-content:center;
    text-align:center;
    font-weight:100;
    color:#0E0F19;
    padding:10px;
    border-radius:15px;
    h1{
        width:100%;
        margin-bottom:20px;
        font-size:50px;
        color:#fff;
    }

    p{
        color:#ffff;
        margin-bottom:10px;
    }
    @media screen and (max-width:750px){
        width:100%;
        height:100%;
    }
`

export const HeroImage = styled.div`
display:grid;
width:70%;
padding-top:30px;
height:100%;
grid-template-columns:repeat(2,1fr);
grid-template-rows:repeat(2, 285px);
gap:10px;

@media screen and (max-width:750px){
width:100%;
grid-template-columns:repeat(1,1fr);
grid-template-rows:repeat(4, 285px);
gap:10px;
}
`

export const Box1 = styled.div`
    grid-column:1/3;
    background-color:#C5E0FC;
    border-radius:15px;
    border:4px solid #F49F0A;
    background-image:url("/assets/image36.jpg");
    background-position:center;
    background-size:cover;
    background-repeat:no-repeat;

    @media screen and (max-width:750px){
        grid-column:1/2;
        grid-row:1/2;
    }
    
`

// export const Box2 = styled.div`
    /* grid-row:1/3; */
    /* grid-column:3/4; */
    /* background-color:#C5E0FC; */
    /* border-radius:15px; */
    /* @media screen and (max-width:750px){ */
    /* grid-column:1/2; */
    /* grid-row:2/3; */
/* } */
// `

export const Box3 = styled.div`
    background-color:#C5E0FC;
    border-radius:15px;
    background-image:url("/assets/image19.jpg");
    background-position:center;
    background-size:cover;
    background-repeat:no-repeat;
    border:4px solid #F49F0A;
    @media screen and (max-width:750px){
    grid-column:1/2;
    grid-row:2/3;
}
`
export const Box4 = styled.div`
    background-color:#C5E0FC;
    border-radius:15px;
    background-image:url("/assets/image21.jpg");
    background-position:center;
    background-size:cover;
    background-repeat:no-repeat;
    border:4px solid #F49F0A;
    @media screen and (max-width:750px){
    grid-column:1/2;
    grid-row:3/4;
    }
`

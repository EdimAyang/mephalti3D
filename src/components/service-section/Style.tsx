//Colors #072AC8,#FFB238;
//#043565, #07529D,#C5E0FC,#D8EAFD,#1#C5E0FC,#0E0F19


import styled from "styled-components";

export const Services = styled.section`
    width:100%;
    height:1350px; 
    background:transparent;
    position:relative;
    top:5%;
    padding:20px;
    h2{
        text-align:center;
        padding:15px;
    }
    @media screen and (max-width:750px){
    height:1250px;
    padding:10px;
  
    }

    h2{
        padding:10px;
    }


`

export const CardWrapper = styled.div`
    width:100%;
    height:90%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    justify-content:space-between;
    gap:14px;
    padding:15px;
    padding-top:5%;
    @media screen and (max-width:750px){

     
}
`
// export const Servicestext = styled.div`
    /* width:40%; */
    /* height:100%; */
    /* border:1px solid; */
// `
export const Card1 = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    height:60%;
    width:60%;
    gap:25px;
    img{
        width:100%;
        height:100%;
        border-radius:10px;
    }
     @media screen and (max-width:750px){
        width:80%;
        flex-direction:column;
        height:50%;
        
    }
`
export const Imagediv = styled.div`
    width:100%;
    height:100%;
    border-radius:10px;
    box-shadow:10px 10px 30px rgb(0 ,0 ,0, 0.5);
        
    @media screen and (max-width:750px){
        height:80%;
    }
`
export const Textdiv = styled.div`
    width:100%;
    height:100%;
    padding:10px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    h4{
    text-align:center;
    padding:10px;
    }
    p{
        text-align:start;
    }

    @media screen and (max-width:750px){
    justify-content:start;
    height:50%;
    padding:0px;
    p{
        display:block;
        text-align:center;
    }

    h4{
        padding:7px;
    }
    }   
`



export const Card2 = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    flex-direction:row-reverse;
    gap:25px;
    height:60%;
    width:60%;
    
    img{
    border-radius:10px;
    width:100%;
    height:100%;
    }
    @media screen and (max-width:750px){
        width:80%;
        flex-direction:column;
        height:50%;
}
`
export const Card3 = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    height:60%;
    width:60%;
    gap:25px;
    img{
    border-radius:10px;
    width:100%;
    height:100%;
    }
    @media screen and (max-width:750px){
        width:80%;
        flex-direction:column;
        height:50%;
}
`
export const Card4 = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    flex-direction:row-reverse;
    gap:25px;
    height:60%;
    width:60%;
    img{
    border-radius:10px;
    width:100%;
    height:100%;
    }
    @media screen and (max-width:750px){
        width:80%;
        flex-direction:column;
        height:50%;
}
`
// export const Card5 = styled.div`
     /* display:flex; */
    /* flex-direction:column; */
    /* align-items:center; */
    /* justify-content:space-between; */
    /* height:100%; */
    /* width:20%; */
    /* @media screen and (max-width:750px){ */
    /* width:40%; */
    /* flex:1; */
/* } */
// `
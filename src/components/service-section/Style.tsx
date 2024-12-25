//Colors #072AC8,#FFB238;
//#043565, #07529D,#C5E0FC,#D8EAFD,#1#C5E0FC,#0E0F19


import styled from "styled-components";

export const Services = styled.section`
    width:100%;
    height:500px;
    background-color:#D8EAFD;
    position:relative;
    top:20%;
    padding:20px;
    h2{
        text-align:center;
        padding:15px;
    }
    @media screen and (max-width:750px){
    height:200px;
    padding:10px;
  
    }

    h2{
        padding:10px;
    }


`

export const CardWrapper = styled.div`
    width:100%;
    height:80%;
    display:flex;
    justify-content:center;
    align-items:center;
    justify-content:space-between;
    gap:14px;
    
    @media screen and (max-width:750px){
     overflow-x:scroll;
     gap:10px;
     
}
`
// export const Servicestext = styled.div`
    /* width:40%; */
    /* height:100%; */
    /* border:1px solid; */
// `
export const Card1 = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
    height:100%;
    width:20%;

     @media screen and (max-width:750px){
        width:40%;
        
    }
`
export const Imagediv = styled.div`
    width:100%;
    height:50%;
    border:1px solid;
    border-radius:10px;
    
        
    @media screen and (max-width:750px){
        height:80%;
    }
`
export const Textdiv = styled.div`
    width:100%;
    height:50%;
    padding:10px;
    h4{
    text-align:center;
    padding:10px;
    }
    p{
        text-align:center;
    }

    @media screen and (max-width:750px){
    height:60%;
    padding:0px;
    p{
        display:none;
    }

    h4{
        padding:7px;
    }
    }   
`



export const Card2 = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
    height:100%;
    width:20%;
    @media screen and (max-width:750px){
    width:40%;
    flex:1;
}
`
export const Card3 = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
    height:100%;
    width:20%;
    @media screen and (max-width:750px){
    width:40%;
    flex:1;
}
`
export const Card4 = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
    height:100%;
    width:20%;
    @media screen and (max-width:750px){
    width:40%;
    flex:1;
}
`
export const Card5 = styled.div`
     display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
    height:100%;
    width:20%;
    @media screen and (max-width:750px){
    width:40%;
    flex:1;
}
`
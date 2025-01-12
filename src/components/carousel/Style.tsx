import styled from "styled-components";


export const CarouselContainer = styled.div`
   width:90%;
   height:100%;
   display:flex;
   justify-content:center;
   align-items:center;
   margin-left:3%;
  
   @media screen and (max-width:750px){
    width:80%;
      margin:0;
}
  
`



export const Card = styled.div`
 width:250px;
 height:100%;

 img{
   width:100%;
   height:100%;
   border-radius:10px;

 }

 @media screen and (max-width:750px){
    width:300px;
    margin-left:6%;
 }

`




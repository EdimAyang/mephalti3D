import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
      margin:0;
      padding:0;
      box-sizing:border-box;  
      font-family: "Poppins", sans-serif;
    }

`

export const AppStyle = styled.div`
    width:100%;
    height:100vh;
`
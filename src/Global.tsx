import styled, { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Domine:wght@400..700&family=Mochiy+Pop+P+One&display=swap');
    *{
      margin:0;
      padding:0;
      box-sizing:border-box;  
      font-family: "Mochiy Pop P One", serif;
    }

`

export const AppStyle = styled.div`
    width:100%;
    height:100vh;
    overflow-x:hidden;
`
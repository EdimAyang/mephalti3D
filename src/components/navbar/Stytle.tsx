//#043565, #07529D,#C5E0FC,#D8EAFD,#1C110A,#0E0F19

import styled from "styled-components";

interface barsProps  {
    active : boolean,
}

export const Nav = styled.nav`
    position:fixed;
    width:100%;
    height:40px;
    display:flex;
    justify-content:center;
    align-items:center;
    justify-content:space-between;
    padding:10px;
    z-index:100;
    background-color:#043565;
    h4{
        color:#ffff;
        span{
            font-size:15px;
            color:#C5E0FC;
        }
    }
`

export const Logo = styled.img`
    
`

// export const Navigations = styled.div<barsProps>`
//     width: 100%;
//     height:${({active}) => active ? "300px" : "0px" };
//     left:0;
//     top:0;
//     margin-top:9%;
//     position:absolute;
//     background-color:#072AC8;
//     display:flex;
//     justify-content:space-between;
//     flex-direction:column;
//     justify-content:center;
//     align-items:center;
//     transition-duration:1s;
//     z-index:0;
    
//     a{
//         text-decoration:none;
//         font-size:20px;
//         cursor: pointer;
//         padding: 10px;
//         color:#ffff;
//         visibility:${({active})=>active ? "show" : "hidden"};
//         transition-delay:0.5s;
        
//     }

// `


export const Navigations = styled.div<barsProps>`
display:flex;
justify-content:space-between;
width:40%;
a{
    text-decoration:none;
    font-size:13px;
    color:#C5E0FC;
}

`


export const CartLogo = 
styled.div`
position: relative;
display:flex;
justify-content:center;
align-items:center;
    width:50px;
    height:100%;
    img{
        width:17px;
        height:17px;
        color:#fff;
    }
    &>div{
        padding:7px;
        width:10px;
        height:10px;
        position:absolute;
        background-color:red;
        border-radius:50%;
        display:flex;
        align-items:center;
        justify-content:center;
        top:2px;
        left:30px;
        color:#fff;
    }
`
export const Bars = styled.img`
    width:25px;
    height:25px;
    cursor: pointer;
    display:none;
`

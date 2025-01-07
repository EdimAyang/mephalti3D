import styled from "styled-components";
import { AnimatePresence, motion } from 'framer-motion';

interface Iprops {
    active?:string;
}

export const CarouselWrapper = styled.div`
    /* width:100%; */
    /* height:100%; */
    position: relative;
    border-radius: 10px;
    height: 400px;
    width: 300px;
    margin: auto;
    overflow: hidden;

    img{
        width: 100%;
        height: 99%;
        border-radius: 8px;
        /* box-shadow:10px 10px 30px rgb(0 ,0 ,0, 0.5); */
        /* border: #ff00008e solid 2px;  */
    }
`

export const SlideDirection = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Left = styled.div`
    background-color: #fb666675;
  color: #fff;
  padding: 10px 8px 8px 13px;
  margin: 0 20px;
  border-radius: 50%;
  position: absolute;
  top: -10%;
  bottom: 0;
  margin: auto 10px;
  height: 25px;
  width: 25px;
  left:0;
`

export const Right = styled.div`
    background-color: #fb666675;
  color: #ffff;
  padding: 10px 8px 8px 13px;
  margin: 0 20px;
  border-radius: 50%;
  position: absolute;
  top: -10%;
  bottom: 0;
  margin: auto 10px;
  height: 25px;
  width: 25px;
  right:0;
`

// export const Indicator = styled.div`
/* margin-top: 20px; */
  /* display: flex; */
  /* justify-content: center; */
  /* gap: 10px; */
// `
// 
// export const Dot = styled.div<Iprops>`
    /* /* background-color:${({active})=> active ? "#fa2020" : "#333"}; */ 
    /* width: 15px; */
    /* height: 10px; */
    /* border-radius: 50%; */
// `



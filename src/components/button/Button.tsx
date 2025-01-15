import React from 'react'
import { ButtonStyle } from './Style'

interface Iprops extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?:React.ReactNode;
    color?:string;
    size?:string;
    onClick?:()=>void;
    radius?:string;
    width?:string;
    pad?:string;
}

const Button:React.FC<Iprops> = ({
    children,
    color,
    size,
    onClick,
    radius,
    pad
}) => {
  return (
    <ButtonStyle 
      size = {size} 
      color = {color}
      onClick = {onClick}
      radius={radius}
      pad ={pad}
       >
      {children}
    </ButtonStyle>
  )
}

export default Button

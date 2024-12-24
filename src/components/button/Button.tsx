import React from 'react'
import { ButtonStyle } from './Style'

interface Iprops extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children:React.ReactNode;
    color?:string;
    size?:string;
    onClick?:()=>void;
}

const Button:React.FC<Iprops> = ({
    children,
    color,
    size,
    onClick
}) => {
  return (
    <ButtonStyle size = {size}  color = {color} onClick = {onClick} >
      {children}
    </ButtonStyle>
  )
}

export default Button

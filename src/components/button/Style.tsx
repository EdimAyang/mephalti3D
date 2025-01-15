import styled from "styled-components";


interface Iprops {
    size?:string,
    color?:string,
    radius?:string,
    pad?:string
}
export const ButtonStyle = styled.button<Iprops>`
    border:none;
    padding:${({pad})=> pad? `${pad}` : "10px"};
    border-radius:${({radius})=> radius ? `${radius}` : "5px"};
    width:${({size}) => size ? `${size}` : "100px" };
    cursor:pointer;
    background-color:${({color}) => color ? `${color}` : '#f49f0a;'};
    color:#ffffffc7;
    font-weight:bold;
`
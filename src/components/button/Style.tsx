import styled from "styled-components";


interface Iprops {
    size?:string,
    color?:string,
}
export const ButtonStyle = styled.button<Iprops>`
    border:none;
    padding:10px;
    border-radius:5px;
    width:${({size}) => size ? `${size}` : "100px" };
    cursor:pointer;
    background-color:${({color}) => color ? `${color}` : '#0E0F19'};
    color:#fff;
`
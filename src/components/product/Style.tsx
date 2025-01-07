//#043565, #07529D,#C5E0FC,#D8EAFD,#0E0F19


import styled from "styled-components";

export const Product = styled.section`
    width:100%;
    height:700px;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    /* background-color: #07529D; */
    padding:10px;
    position: relative;
    top:5%;
        h2{
        text-align:center;
        padding:15px;
        color:#0E0F19;
        }
            
@media screen and (max-width:750px){
    height:330px;
    top:27%;
}
`

export const ProductsWrapper = styled.section`
    display:grid;
    grid-template-columns:repeat(3, 1fr);
    grid-auto-rows:250px;
    gap:15px;
    width:60%;
    height:80%;
    /* border:1px solid #ffff; */
    padding:13px;

        
@media screen and (max-width:750px){
    grid-template-columns:repeat(2,1fr);
    width:100%;
    grid-auto-rows:200px;
    gap:10px;
    height:100%;
    padding:0px;
    overflow-y:scroll;

}

`
export const Box1 = styled.div`
    border:1px solid #ffff;
    grid-column:1/2;
    border:none;
    img{
        width:100%;
        height:100%;
        border-radius:10px;
    }
`
export const Box2 = styled.div`
    border:1px solid #ffff;
    grid-column:2/3;
    border:none;
    img{
    width:100%;
    height:100%;
    border-radius:10px;
}
`
export const Box3 = styled.div`
    border:1px solid #ffff;
    grid-column:3/4;
    border:none;
    img{
    width:100%;
    height:100%;
    border-radius:10px;
}
`
export const Box4 = styled.div`
    border:1px solid #ffff;
    grid-column:1/2;
    grid-row:2/3;
    border:none;
    img{
    width:100%;
    height:100%;
    border-radius:10px;
}
`
export const Box5 = styled.div`
    border:1px solid #ffff;
    grid-column:2/3;
    grid-row:2/3;
    border:none;
    img{
    width:100%;
    height:100%;
    border-radius:10px;
}
`
export const Box6 = styled.div`
    border:1px solid #ffff;
    grid-column:3/4;
    grid-row:2/3;
    border:none;
    img{
    width:100%;
    height:100%;
    border-radius:10px;
}
`

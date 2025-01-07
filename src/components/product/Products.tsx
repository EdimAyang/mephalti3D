import React from 'react'
import { Box1, Box2, Box3, Box4, Box5, Box6, Product, ProductsWrapper } from './Style'

const Products = () => {
  return (
    <Product>

      <h2>Our Products</h2>

      <ProductsWrapper>
        <Box1>
          <img src="/assets/image10.jpg" alt=""/>
        </Box1>
        <Box2>
          <img src="/assets/image23.jpg" alt="" />
        </Box2>
        <Box3>
          <img src="/assets/image24.jpg" alt="" />
        </Box3>
        <Box4>
          <img src="/assets/image26.jpg" alt="" />
        </Box4>
        <Box5>
          <img src="/assets/image35.jpg" alt="" />
        </Box5>
        <Box6>
          <img src="/assets/image28.jpg" alt="" />
        </Box6>
      </ProductsWrapper>
    </Product>
  )
}

export default Products

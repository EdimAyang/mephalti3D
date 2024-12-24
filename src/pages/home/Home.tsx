

import React from 'react'
import {
   StyledHome,
   Hero,
    HeroText,
     HeroImage,
     Box1,
     Box2,
     Box3,
     Box4
    } from './Style'
import Navbar from '../../components/navbar/Navbar'
import Button from '../../components/button/Button'
import Service from '../../components/service-section/Service'
import Products from '../../components/product/Products'
import News from '../../components/newsLatter/News'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <StyledHome>
      <Navbar />
        <Hero>
          <HeroText>
            <h1>Bring Your Idea Your Idea To Life</h1>
            <p>With 3D Technology</p>
            <Button children="shop"  size='150px'/>
          </HeroText>
         <HeroImage>
          <Box1>  </Box1>
          <Box2>  </Box2>
          <Box3>  </Box3>
          <Box4>  </Box4>
          </HeroImage> 
        </Hero>
        <Service />
        <Products />
        <News />
      <Footer />
    </StyledHome>
  )
}

export default Home

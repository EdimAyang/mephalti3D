import React from 'react'

import { 
    Card1,
     CardWrapper, 
     Imagediv,
      Services, 
       Textdiv ,
       Card2,
       Card3,
       Card4,
    } from './Style'


const Service = () => {
  return (
    <Services>
      <h2>Our Service</h2>

      <CardWrapper>
        <Card1>
            <Imagediv>
              <img src="/assets/printer-2416269_1280.jpg" alt="printer" />
            </Imagediv>

            <Textdiv>
                <h4>Prototypes</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita commodi tempore nulla itaque sint repellat !</p>
            </Textdiv>
        </Card1>

        <Card2>
            <Imagediv>
              <img src="/assets/image11.jpg" alt="" />
            </Imagediv>

            <Textdiv>
                <h4>Customized Accessories</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita commodi
                ipsum fugit unde!</p>
            </Textdiv>
        </Card2>

        <Card3>
        <Imagediv>
          <img src="/assets/prostetic-1273183_1280.jpg" alt="" />
        </Imagediv>
        <Textdiv>
            <h4>Replacement parts</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita commodi reprehenderit!</p>
        </Textdiv>
        </Card3>

        <Card4>
            <Imagediv>
              <img src="/assets/gift-2583513_1280.jpg" alt="" />
            </Imagediv>
            <Textdiv>
                <h4>Personalized Gifts</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita 
                ipsum fugit unde!</p>
            </Textdiv>
        </Card4>
      </CardWrapper>
    </Services>
  )
}

export default Service

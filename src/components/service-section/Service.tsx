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
       Card5
    } from './Style'


const Service = () => {
  return (
    <Services>
      <h2>Our Service</h2>

      <CardWrapper>
        <Card1>
            <Imagediv>

            </Imagediv>

            <Textdiv>
                <h4>Service1</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita commodi tempore nulla itaque sint repellat !</p>
            </Textdiv>
        </Card1>

        <Card2>
            <Imagediv>

            </Imagediv>

            <Textdiv>
                <h4>Service1</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita commodi
                ipsum fugit unde!</p>
            </Textdiv>
        </Card2>

        <Card3>
        <Imagediv>

        </Imagediv>
        <Textdiv>
            <h4>Service1</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita commodi reprehenderit!</p>
        </Textdiv>
        </Card3>

        <Card4>
            <Imagediv>

            </Imagediv>
            <Textdiv>
                <h4>Service1</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita 
                ipsum fugit unde!</p>
            </Textdiv>
        </Card4>

        <Card5>
            <Imagediv>

            </Imagediv>
            <Textdiv>
                <h4>Service1</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita commodi 
                tempore nulla itaque sint !</p>
            </Textdiv>
        </Card5>
      </CardWrapper>
    </Services>
  )
}

export default Service

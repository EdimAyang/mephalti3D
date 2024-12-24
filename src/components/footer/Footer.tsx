
import { FooterStyle, Info, InfoWrapprer, Location, SocialMedia } from './Style'

const Footer = () => {
  return (
    <FooterStyle>
      <h1>Mephalti<span>3D</span></h1>
        <InfoWrapprer>
            <Location>
               <h4>Location</h4> 
               <div>
                    <p>Benin Nigeria</p><br />
                    <p>ChrisMary Road Usalu</p>
               </div>
            </Location>
            <Info>
              <h4>Info</h4> 
              <div>
                <p>For more Infocantact us</p><br />
                <p>09136794977</p><br/>
                <p>07081404984</p><br/>
                <p>jacksonprince590@gmal.com</p>
              </div>
            </Info>
            <SocialMedia>
              <h4>Follow us</h4>
              <div>
                <p>On our Social media Handle</p>
              </div>
            </SocialMedia>
        </InfoWrapprer>
    </FooterStyle>
  )
}

export default Footer

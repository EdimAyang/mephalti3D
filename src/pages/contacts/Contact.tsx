
import {
  ConForm,
  ConImage,
  ConText,
  ContactHero,
   ContactStyled,
   EmailNumInput,
   FormWrapper,
   Icon1,
   Icon2,
   NamesInput,
   SocialMedia,
   TextArea,
   } from './Style'
import Navbar from '../../components/navbar/Navbar'
import Button from '../../components/button/Button'
import Footer from '../../components/footer/Footer'
import News from '../../components/newsLatter/News'

const Contact = () => {
  return (
    <ContactStyled>
      <Navbar />
      <ContactHero>
        <ConText>
          <h1>Contact Us</h1>
          <p>We are very approchable.<br/>
          Feel free to call, send us an email, or simply complete the enquiry form below.
          </p>
        </ConText>
        <ConImage  />
      </ContactHero>
      <FormWrapper>
        <ConForm>
          <NamesInput>
            <input type="text"  placeholder='FirstName' required/>
            <input type="text"  placeholder='LastName'  required/>
          </NamesInput>
          <EmailNumInput>
            <input type="number"  placeholder='Phone' required/>
            <input type="email"  placeholder='Email'  required/>
          </EmailNumInput>

          <label>Send us a <span>message</span></label>
          <TextArea />
            <Button children="Submit" color='#043565'/>
        </ConForm>
        <SocialMedia>
          <Icon1>
            <img src="assets/icons8-phone-94.png" alt="phonelogo" />
            <p>09136794977</p>
          </Icon1>
          <Icon2>
            <img src="/assets/icons8-gmail-logo-94.png" alt="" />
            <p>jacksonprince590@gmail.com</p>
          </Icon2>
        </SocialMedia>
      </FormWrapper>
      <News />
      <Footer />
    </ContactStyled>
  )
}

export default Contact

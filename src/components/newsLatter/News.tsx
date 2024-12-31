
import { InputWrapper, NewsL } from './Style'
import Button from '../../components/button/Button'

const News = () => {
  return (
    <NewsL>
      <h2>NewsLatter</h2>
      <p>Subscribe to our Newslatter to get latest Updates</p>

      <InputWrapper>
        <input type="text" placeholder='Email'/>
        <Button children = "Submit" color='#043565'/>
      </InputWrapper>
    </NewsL>
  )
}

export default News

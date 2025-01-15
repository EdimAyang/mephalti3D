import {
   Container,
    Discription,
     FileContainer,
       Quantity,
        Shopstyles,
         BtnWrapper,
         ColorWrapper,
          BtnContainer,
          CostWrapper,
          DeliveryDetails,
          DetailsWrapper,
          InfoCon,
         } from "./Style"
import Navbar from '../../components/navbar/Navbar'
import { ChangeEvent, useState } from "react"
import Button from "../../components/button/Button"
import Footer from "../../components/footer/Footer"
import News from "../../components/newsLatter/News"



const Create = () => {

  //States
  const [File, setFile] = useState<File | null>(null)
  const [Qyt, setQyt] = useState<number>(10)
  const [Color, setColor] = useState<string>("#000")
  const [Cost, setCost] = useState<number>(100)
  const [TDate, setTdate] = useState<string>("")
  const [Time, setTime] = useState<string>("")

  //Functions
  const handleInputChange = (e : ChangeEvent<HTMLInputElement>)=>{
    if (e.target.files != null) {
      setFile(e.target.files[0]); 
    }
  }
  const handleIncremeant = ()=>{
    setQyt(Qyt + 1)
    setCost(Cost + 100);
  }
  const handleDecremeant = ()=>{
    if(Qyt > 10){
      setQyt(Qyt - 1)
      setCost(Cost - 100)
    }
  }
  const handleColor = (e : ChangeEvent<HTMLInputElement>)=>{
    setColor(e.target.value);
  }
  const handleForm = ()=>{
    setTdate(currentDate);
    setTime(currentTime);
  };

  //Date
  let today = new Date();
  let month = today.getMonth() + 1;
  let year = today.getFullYear();
  let date = today.getDate();
  const currentDate = `${month} : ${date} : ${year}`

  const addZero = (num:number)=>{
    return num < 10 ? `0${num}` : num
};
  //Time
  let Hour = addZero(today.getHours())
  let Minutes = addZero(today.getMinutes());
  // let Seconds = today.getSeconds();
  const currentTime = `${Hour} : ${Minutes}`;
  console.log(TDate)
  console.log(Time)
  return (
    <Shopstyles>
        <Navbar />
        <Container>
          <FileContainer>
            <h3>Upload your Designs</h3>
            <div>
              <input type="file"  id="up" onChange={handleInputChange} multiple/>
              <label htmlFor="up"><img src="/icon/cloud-arrow-up-solid.svg" alt="Files" /></label>
            </div>
          </FileContainer>
        <Discription>
          <h3>Complete Requirments</h3>
          <Quantity>
            <div>
              <span>Quantity</span>
              <p>Minimun is 10</p>
            </div>
            <BtnWrapper>
              <Button 
                children="+"
                radius= "5px"
                size = "30px"
                pad = "10"
                onClick={handleIncremeant}
               />
              <span>{Qyt}</span>
              <Button 
                children="-"
                radius= "5px"
                size = "30px"
                pad = "10"
                onClick={handleDecremeant}
                />
            </BtnWrapper>
          </Quantity>
            <ColorWrapper ColorW={Color}>
              <div>
                <span>Pick a color</span>
                <p>{Color}</p>
              </div>
              <input type="color" name="" id="Color" onChange={handleColor}/>
              <label htmlFor="Color">
              </label>
            </ColorWrapper>
            <CostWrapper>
            <div>
              <span>Total Cost</span>
              <p>Mininum $100</p>
            </div>
            {Cost > 100 ?
              <section>
               <span>${Cost}</span>
             </section>: ""
            }
          </CostWrapper>
          <BtnContainer>
            <Button
            children="Upload"
            onClick={handleForm}
            />
          </BtnContainer>
        </Discription>
      </Container>
      {
        File && TDate &&
      <DeliveryDetails>
        <h3>Delivery Details</h3>
      <DetailsWrapper>
        <InfoCon>
          <p>Date</p>
          <p>{TDate}</p>                
        </InfoCon>
        <InfoCon>
          <p>Time</p>
          <p>{Time}</p>
        </InfoCon>
        <InfoCon>
          <p>Quantity</p>
          <p>{Qyt}</p>
        </InfoCon>
        <InfoCon>
          <p>Material Color</p>
          <p>{Color}</p>
        </InfoCon>
        <InfoCon>
          <p>Delivery</p>
          <p>7 days</p>
        </InfoCon>
        <InfoCon>
          <p>File name</p>
          <p>{File?.name}</p>
        </InfoCon>
        <InfoCon>
          <p>File size</p>
          <p>{File?.size}</p>
        </InfoCon>
        <InfoCon>
          <p>File type</p>
          <p>{File?.type}</p>
        </InfoCon>
        <InfoCon>
          <p>Total cost</p>
          <p>${Cost}</p>
        </InfoCon>
        <div>
          <Button size="200px">
            Order
          </Button>
        </div>
      </DetailsWrapper>
      </DeliveryDetails>
      }
      <News />
      <Footer />
    </Shopstyles>
  )
}

export default Create

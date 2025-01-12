
import {Card, CarouselContainer} from './Style'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const images = [
  {
    imgurl:"/assets/image10.jpg"
  },
  {
    imgurl:"/assets/image23.jpg"
  },
  {
    imgurl:"/assets/image24.jpg"
  },
  {
    imgurl:"/assets/image26.jpg"
  },
  {
    imgurl:"/assets/image35.jpg"
  },
  {
    imgurl:"/assets/image37.jpg"
  }
]


const Slider = () => {

  return (
    <CarouselContainer>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, 
        A11y,Autoplay]}
        breakpoints={{
           // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 0
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 3,
          spaceBetween: 0
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 4,
          spaceBetween: 0
        }
        }}
        spaceBetween={0}
        slidesPerView={4}
        navigation
        
      >
        {images.map((d,i)=>(
          <SwiperSlide>
            <Card key={i}>
              <img src={d.imgurl} alt="photos" />
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </CarouselContainer>
  )
}

export default Slider

// const images = [
  // {
    // img:"/assets/image10.jpg"
  // },
  // {
    // img:"/assets/image23.jpg"
  // },
  // {
    // img:"/assets/image24.jpg"
  // },
  // {
    // img:"/assets/image26.jpg"
  // },
  // {
    // img:"/assets/image35.jpg"
  // },
  // {
    // img:"/assets/image37.jpg"
  // }
// ]
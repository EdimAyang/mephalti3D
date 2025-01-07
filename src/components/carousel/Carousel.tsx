
import { AnimatePresence, motion } from 'framer-motion';
import { CarouselWrapper, Left, Right, SlideDirection } from './Style'
import { useState } from 'react';

const Carousel = () => {

const img1 = "/assets/image10.jpg";
const img2 = "/assets/image23.jpg";
const img3 = "/assets/image24.jpg";
const img4 = "/assets/image26.jpg";
const img5 = "/assets/image35.jpg";
const img6 = "/assets/image37.jpg";
 
const images = [img1,img2,img3,img4,img5,img6];
const [direction, setDirection] = useState('left');

const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setDirection('right');
    currentIndex < images.length - 1 ? setCurrentIndex(currentIndex + 1) : setCurrentIndex(0)
  };

  setInterval(() => {
    handleNext()
  }, 5000);

  const handlePrevious = () => {
    setDirection('left');
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };
//   const handleDotClick = (index :number) => {
    // setDirection(index > currentIndex ? "right" : "left")
    // setCurrentIndex(index);
//   };

  const slideVariants = {
    hiddenRight: {
      x: "100%",
      opacity: 0,
    },
    hiddenLeft: {
      x: "-100%",
      opacity: 1,
    },
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.2,
      transition: {
        duration: 0.3,
      },
    },
  };

  
  return (
    <CarouselWrapper>
        <AnimatePresence>
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt="poctures"
              variants={slideVariants}
             initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
                animate="visible"
                exit="exit"
            />
        </AnimatePresence>
        <SlideDirection>
        <Left 
        onClick={handlePrevious}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 96 960 960"
            width="20"
          >
            <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
          </svg>
        </Left>
        <Right onClick={handleNext}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 96 960 960"
            width="20"
          >
            <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
          </svg>
        </Right>
      </SlideDirection>
    </CarouselWrapper>
  )
}

export default Carousel

import React, { useEffect, useRef, useState } from "react";
import Button from "../../../common/Button/Button";
import './Carousel.css';

const Carousel = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const carouselRef = useRef();

  const TOTAL_SLIDE = 4;

  const slideToNext = () => {
    if (currentSlideIndex + 1 < TOTAL_SLIDE) {
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const slideToPrev = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(currentSlideIndex - 1);
    }
  };

  useEffect(() => {
    console.log(currentSlideIndex);
    carouselRef.current.style.transform = `translateX(-${currentSlideIndex}00%)`;
  }, [currentSlideIndex]);

  return (
    <div className="about__carousel">
      <ul className="carousel__container" ref={carouselRef}>
        <li className="carousel">1</li>
        <li className="carousel">2</li>
        <li className="carousel">3</li>
        <li className="carousel">4</li>
      </ul>
      <Button onClick={slideToPrev}>이전</Button>
      <Button onClick={slideToNext}>다음</Button>
    </div>
  );
};

export default Carousel;

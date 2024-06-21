import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
  prevArrow: <button className="slick-prev" aria-label="Previous" />,
  nextArrow: <button className="slick-next" aria-label="Next" />,
};

const Slide = ({ imageUrl }) => (
  <div>
    <img src={imageUrl} alt="Slide" />
  </div>
);

const SliderComponent = ({ images, className }) => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideNext = () => {
    sliderRef.current.slickNext();
  };

  const slideTwoNext = () => {
    const nextSlide = currentSlide + 2;
    sliderRef.current.slickGoTo(nextSlide);
    setCurrentSlide(nextSlide);
  };

  const handleAfterChange = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  return (
<>
<div className={`w-[100%] mx-auto`}>
      <Slider
        ref={sliderRef}
        {...settings}
        afterChange={handleAfterChange}
      >
        {images.map((image, index) => (
          <Slide key={index} imageUrl={image} />
        ))}
      </Slider>
      
    </div>
</>
  );
};

export default SliderComponent;
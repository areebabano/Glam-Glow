"use client"
import React from 'react'
import { Settings } from '../app/types/types';
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const HeroSection = () => {
    let settings: Settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false
    }

    const imageSlider: string[] = [
      "/img1.png",
      "/img2.png",
      "/img3.png",
      "/img4.png",
      "/img5.png",
      "/img6.png",
    ]

return (
  <div className="slider-container w-[90%] max-w-[1200px] mx-auto font-serif"> {/* Centering and responsive padding */}
    <Slider {...settings}>
      {imageSlider.map((image, index) => (
        <div key={index} className="slider-item relative"> {/* relative positioning for any overlay or customization */}
          <img 
            src={image} 
            alt={`Slide ${index + 1}`} 
            className="slider-image w-full md:max-h-96 lg:max-h-600 xl:max-h-800 object-contain shadow-md"
          /> 
        </div>
      ))}
    </Slider>
  </div>
);
};


export default HeroSection

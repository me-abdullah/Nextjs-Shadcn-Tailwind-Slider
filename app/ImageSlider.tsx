"use client";
import { useState, useEffect } from 'react';
import { Button } from '../components/ui/button';
const ImageSlider = () => {
  const slides = [
    { image: '/item-1.jpg', text: 'New Summer Sale' , para: 'Exploer the best summer collection for men' },
    { image: '/item-2.jpg', text: 'New Spring Sale' , para: 'Exploer the best Spring collection for women step into frest heels'  },
    { image: '/item-3.jpg', text: 'New Autumn Sale' , para: 'Exploer the best summer collection for men 15% of on sneakers'  },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
     <div className="slider-container">
    <img
      src={slides[currentSlide].image}
      alt={slides[currentSlide].text}
      className="slider-image"
    />
    <div className="slider-overlay">
      <p className="slider-text text-8xl font-bold">{slides[currentSlide].text}</p>
      
      <p className="slider-text my-8">{slides[currentSlide].para}</p>
    
      <Button>Discover More</Button>
    </div>
  </div>
);
};

export default ImageSlider;

import React, { useEffect, useRef } from 'react';
import './Carousel.css';

function Carousel() {
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const firstChild = carouselRef.current.firstChild;
        carouselRef.current.appendChild(firstChild);
      }
    }, 3000); // Cambia cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel" ref={carouselRef}>
      <div className="carousel-item">
        <img src="https://via.placeholder.com/800x300?text=Promoción+1" alt="Promoción 1" />
      </div>
      <div className="carousel-item">
        <img src="https://via.placeholder.com/800x300?text=Promoción+2" alt="Promoción 2" />
      </div>
      <div className="carousel-item">
        <img src="https://via.placeholder.com/800x300?text=Promoción+3" alt="Promoción 3" />
      </div>
    </div>
  );
}

export default Carousel;
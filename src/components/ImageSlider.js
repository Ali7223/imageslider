import React, { useState, useEffect } from "react";
import "../styles/ImageSlider.css";
import img1 from "../assets/imageslider1.jpg";
import img2 from "../assets/imageslider2.jpg";
import img3 from "../assets/imageslider3.jpg";
import img4 from "../assets/imageslider4.jpg";

const ImageSlider = () => {
  const images = [img1, img2, img3, img4];
  const [currentIndex, setCurrentIndex] = useState(0);

 // Depend on currentIndex
  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const nextSlide = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  useEffect(() => {
  const interval = setInterval(() => {
    nextSlide();
  }, 3000); // Change image every 3 seconds

  return () => clearInterval(interval); // Clean up on unmount
}, [currentIndex]);

  // Dots click handler
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slider">
      <button onClick={prevSlide} className="left-arrow">❮</button>
      <img src={images[currentIndex]} alt="slider" className="slide-image" />
      <button onClick={nextSlide} className="right-arrow">❯</button>

      {/* Dots Navigation */}
      <div className="dots-container">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;

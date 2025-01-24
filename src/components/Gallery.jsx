import React, { useState } from 'react';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';
import image5 from '../assets/image5.png';



function ImageGallery() {
  const [currentImageIndex, setCurrentImageIndex] = useState(null);
  const images = [image1, image2, image3,image4, image5, image1];

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
  };

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleClose = () => {
    setCurrentImageIndex(null);
  };

  return (
    <section className='section3'>
      <h5> Gallery</h5>
      <h2>Our Photo Gallery</h2>
      <div className="gallery">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>

      <div className={`slideshow ${currentImageIndex !== null ? 'active' : ''}`}>
        <span className="close" onClick={handleClose}>
          &times;
        </span>
        <span className="prev" onClick={handlePrevClick}>
          &#10094;
        </span>
        <span className="next" onClick={handleNextClick}>
          &#10095;
        </span>
        {currentImageIndex !== null && (
          <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
        )}
      </div>
    </section>
  );
};

export default ImageGallery;
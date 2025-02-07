import React, { useState } from 'react';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';
import image5 from '../assets/image5.png';
import { motion } from 'framer-motion';
import "../Gallery.css"

function ImageGallery() {
  const [currentImageIndex, setCurrentImageIndex] = useState(null);
  const images = [image1, image2, image3, image4, image5,image1];

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
  };

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleClose = () => {
    setCurrentImageIndex(null);
  };

  // Parent variant to control stagger effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Adjust the delay between animations
      },
    },
  };

  // Child variant for individual images
  const imageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <motion.section
        className="section3"
        id="gallery"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: false, amount: 0.3 }} // Adjust 'amount' as needed
      >
        <h5>Gallery</h5>
        <h2>Our Photo Gallery</h2>
        <motion.div className="gallery">
          {images.map((image, index) => (
            <motion.img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              onClick={() => handleImageClick(index)}
              variants={imageVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            />
          ))}
        </motion.div>
      </motion.section>

      {currentImageIndex !== null && (
        <motion.div
          className="slideshow active"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <span className="close" onClick={handleClose}>
            &times;
          </span>
          <span className="prev" onClick={handlePrevClick}>
            &#10094;
          </span>
          <span className="next" onClick={handleNextClick}>
            &#10095;
          </span>
          <motion.img
            src={images[currentImageIndex]}
            alt={`Image ${currentImageIndex + 1}`}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
      )}
    </>
  );
}

export default ImageGallery;

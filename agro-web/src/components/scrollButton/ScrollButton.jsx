import React, { useState, useEffect } from 'react';
import './ScrollButton.css';  
import { assets } from '../../assets/assets';

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  
  useEffect(() => {
    const handleScroll = () => {
      const secondDiv = document.getElementById("aboutUs"); 
      if (window.pageYOffset >= secondDiv.offsetTop) {
        setIsVisible(true); 
      } else {
        setIsVisible(false); 
      }
    };

    window.addEventListener("scroll", handleScroll);

    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <button
        onClick={scrollToTop}
        style={{ display: isVisible ? 'block' : 'none' }} 
      className='button'>
        <img src={assets.up_arrow} alt="Scroll Up" />
      </button>
    </div>
  );
}

export default ScrollButton;

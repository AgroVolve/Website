import React, { useState, useEffect } from 'react';
import './Reviews.css';
import { assets } from '../../assets/assets';

const Reviews = () => {
  const profiles = [
    {
      name: 'Michael I.',
      text: `El proyecto de Agrovolve ha marcado una gran diferencia en mi granja. Los drones no solo son eficientes para detectar enfermedades, sino que también me ayudan a entender mejor la salud general de mis cultivos. Ahora puedo tomar medidas proactivas que me han ahorrado dinero y mejorado mi rendimiento.`,
      profilePic: assets.profile5,
    },
    {
      name: 'Emmanuel B.',
      text: `As a farmer, I’ve struggled with managing crop health and disease outbreaks. Since using Agrovolve’s drone technology, I’ve seen a dramatic improvement in early disease detection. The project’s approach is innovative and has truly made a difference in my farm's productivity`,
      profilePic: assets.profile1,
    },
    {
      name: 'Alliance B.',
      text: `Agrovolve’s technology has completely transformed the way we monitor crop health. The drones are able to detect diseases I would’ve missed, allowing us to act quickly and save valuable crops. This project has been a blessing for my farm, and I’m incredibly grateful`,
      profilePic: assets.profile2,
    },
    {
      name: 'Derick E.',
      text: `I was skeptical at first, but after seeing Agrovolve in action, I’m convinced. The drone services have helped me reduce crop losses significantly. The level of precision and accuracy in disease detection is outstanding, and I’m confident that this project will continue to shape the future of agriculture.`,
      profilePic: assets.profile3,
    },
    {
      name: 'Samuel B.',
      text: `Je ne saurais trop remercier Agrovolve pour le travail qu'ils accomplissent dans le domaine de l'agriculture. Leurs drones m'ont fourni des informations en temps réel sur la santé de mes cultures, ce que j'ai utilisé pour prévenir la propagation de maladies. C'est incroyable de voir comment la technologie aide à améliorer les résultats agricoles.`,
      profilePic: assets.profile4,
    },
    
  ];

  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentProfileIndex((prevIndex) => (prevIndex + 1) % profiles.length);
    }, 3000);

    
    return () => clearInterval(timer);
  }, []);


  const goToPreviousProfile = () => {
    setCurrentProfileIndex((prevIndex) =>
      prevIndex === 0 ? profiles.length - 1 : prevIndex - 1
    );
  };

  
  const goToNextProfile = () => {
    setCurrentProfileIndex((prevIndex) => (prevIndex + 1) % profiles.length);
  };

  const currentProfile = profiles[currentProfileIndex];

  return (
    <div className='reviews-container'>
      <button className='reviews_btn'>
        <img src={assets.review_icon} className="reviews_icon" alt="" />
        Reviews
      </button>

      <div className="reviews-content">
        <div className="review-content">
          <h2>Customer <span>Testimonials.</span></h2>
          <p>
            Agrovolve has consistently received positive feedback for its innovative approach to agricultural management. Users have praised the precision and reliability of the drone technology, which enables early detection of crop diseases and empowers farmers to take proactive measures, minimizing potential losses. The comprehensive and real-time reports generated by Agrovolve’s system have been commended for providing valuable insights that facilitate informed decision-making. Users have found these reports essential in optimizing resource allocation and improving crop health management. Furthermore, the platform’s intuitive interface has been recognized for its ease of use, making it accessible to both novice and experienced farmers. Agrovolve’s commitment to improving agricultural practices through cutting-edge technology has earned it a reputation as a valuable tool in modern farming.
          </p>
        </div>

        <div className="client-reviews">
          <div className="profile-card">
            <img
              src={assets.previous}
              className='previous'
              alt="previous icon"
              onClick={goToPreviousProfile}
            />
            <img src={currentProfile.profilePic} className="profile-pic" alt="Profile Picture" />
            <h4>{currentProfile.name}</h4>
            <img src={assets.rating_stars} className="rating-stars" alt="Rating Stars" />
            <p>{currentProfile.text}</p>
            <img
              src={assets.next}
              className="next"
              alt="next icon"
              onClick={goToNextProfile}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;

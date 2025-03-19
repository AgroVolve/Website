import React, { useState } from 'react';
import './Features.css';
import { assets } from '../../assets/assets';
import { Typewriter } from 'react-simple-typewriter';

const Features = () => {
  const [activeFeature, setActiveFeature] = useState("drone");

  return (
    <div className='features'>
      <button className='features_btn'>
        <img src={assets.features_icon} alt="" className='features_icon' />
        Features
      </button>

      <div className="text">
        <h2>Introducing <span className="our">Our</span> Features.</h2>
        <p>
              Discover the innovative features of Agrovolve, designed to enhance agricultural efficiency through advanced technology and data-driven solutions.
        </p>
      </div>

   
      <div className="first-feature" onClick={() => setActiveFeature("drone")}>
        <img src={assets.drone_icon} alt="" />
        <div className="first-feature-contents">
          <h2>Drone-Powered Disease Detection</h2>
          {activeFeature === "drone" && (
            <p>
              <Typewriter
                words={[
                  "Leverage cutting-edge drone technology equipped with advanced imaging systems to monitor crops for early signs of disease. This feature provides farmers with real-time, high-resolution images, enabling precise identification of affected areas and timely intervention."
                ]}
                loop={1} 
                cursor
                cursorStyle="_"
                typeSpeed={20}
                deleteSpeed={0}
              />
            </p>
          )}
        </div>
      </div>

      
      <div className="second-feature" onClick={() => setActiveFeature("precision")}>
        <img src={assets.precison_icon} alt="" />
        <div className="second-feature-contents">
          <h3>Precision Agriculture</h3>
          {activeFeature === "precision" && (
            <p>
              <Typewriter
                words={[
                  "Utilize data-driven technologies to optimize field-level management regarding crop farming. By analyzing soil health, moisture levels, and other key factors, Agrovolve enables precise application of water, fertilizers, and pesticides, minimizing waste and enhancing crop yields."
                ]}
                loop={1} 
                cursor
                cursorStyle="_"
                typeSpeed={20}
                deleteSpeed={0}
              />
            </p>
          )}
        </div>
      </div>

    
      <div className="third-feature" onClick={() => setActiveFeature("notifications")}>
        <img src={assets.notification_icon} alt="" />
        <div className="third-feature-contents">
          <h4>Real-Time Notifications and Alerts</h4>
          {activeFeature === "notifications" && (
            <p>
              <Typewriter
                words={[
                  "Receive instant notifications when drone technology detects potential diseases in your crops. Agrovolve’s alert system notifies you of any signs of disease outbreaks, allowing for quick intervention to protect your crops."
                ]}
                loop={1} 
                cursor
                cursorStyle="_"
                typeSpeed={20}
                deleteSpeed={0}
              />
            </p>
          )}
        </div>
      </div>

      
      <div className="forth-feature" onClick={() => setActiveFeature("insights")}>
        <img src={assets.insights_icon} alt="" />
        <div className="forth-feature-contents">
          <h5>Data-Driven Insights</h5>
          {activeFeature === "insights" && (
            <p>
              <Typewriter
                words={[
                  "Leverage the power of data to make informed decisions on crop management and farm operations. Agrovolve provides detailed analytics on soil health, weather patterns, and crop performance."
                ]}
                loop={1} 
                cursor
                cursorStyle="_"
                typeSpeed={20}
                deleteSpeed={0}
              />
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Features;

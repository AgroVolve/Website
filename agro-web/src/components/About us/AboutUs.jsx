import React from 'react'
import './AboutUs.css'
import { assets } from '../../assets/assets'
const AboutUs = () => {
  return (
    <div className='about-us'>
        <div className="about-us-left">
            <button className='about-us-btn'><img src={assets.about_icon} alt="" className='about-us-img'/> About Us</button>
            <div className="about-us-content">
                <h2>Get To <span className="know">Know</span> Us.</h2>
                <p className="about-us-text">
                At Agrovolve, we are committed to revolutionizing agriculture through cutting-edge technology. Our mission is to enhance productivity, reduce losses, and improve crop health by utilizing drone technology to detect and diagnose diseases in crops early.
                Our team combines expertise in agriculture, technology, and innovation to deliver reliable solutions that empower farmers to make informed decisions. By providing real-time data through drone imagery, we help farmers monitor their crops more effectively, ensuring better yields and healthier farms.
                We believe that the future of agriculture lies in technology, and we are dedicated to making that future a reality for farmers around the world. Join us on our journey to transform farming practices and contribute to a more sustainable and efficient agricultural industry.
                </p>
                       <button className='about-us-app-btn'>
                        Get our app 
                        <img src={assets.download} alt="" className='download-img' />
                        </button>
            </div>
        </div>
        
    </div>
  )
}

export default AboutUs

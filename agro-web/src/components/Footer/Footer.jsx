import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="company-name">
      <img src={assets.logo} alt="" />
      <p>Agro<span className='volve'>Volve</span></p>
      </div>
      <div className="company-part">
        <h1>COMPANY</h1>
        <ol>
        <li><a href="#">Home</a></li>
              <li><a href="#aboutUs">About Us</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#reviews">Reviews</a></li>
              <li><a href="#contact-us">Contact Us</a></li>
              <li><a href="#">Help</a></li>
        </ol>
      </div>
      <div className="media">
        <h1>GET IN TOUCH</h1>
        <ol>
          <li>linkedIn</li>
          <li>Instagram</li>
          <li>+250794013293</li>
          <li>agrovolve@gmail.com</li>
          <li><a href="#">Privacy policy</a></li>
        </ol>
      </div>
      
    </div>
  )
}

export default Footer

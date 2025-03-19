import React from 'react'
import './ContactUs.css'
import { assets } from '../../assets/assets'

const ContactUs = () => {
  return (
    <div className='contact-us'>
      <button className='contact_btn'>
        <img src={assets.contact_icon} className="contact_icon" alt="" />
        Contact Us
      </button>
      <p>
      We’re here to help! <span>Reach out to us</span> with any <span>questions</span> or <span>inquiries.</span>
      </p>
      <div className="contact-form">
        <div className="inputs">
          <div className="input-field">
            <label htmlFor="Name">Name:</label>
            <input type="text" placeholder='Enter your names' />
          </div>
          <div className="input-field">
            <label htmlFor="Email">Email:</label>
            <input type="email" placeholder='Enter your email' />
          </div>
        </div>
      
        <div className="message-box">
          <label htmlFor="Message">Message:</label>
          <textarea placeholder='Enter your message'></textarea>
        </div>
      </div>
    </div>
  )
}

export default ContactUs

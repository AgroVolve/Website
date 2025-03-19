import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import AboutUs from '../../components/About us/AboutUs'
import Features from '../../components/Features/Features'
import Reviews from '../../components/Reviews/Reviews'
import ContactUs from '../../components/ContactUs/ContactUs'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div>
      <div className="home">
      <Header />
      </div>
      <div id="aboutUs">
        <AboutUs />
      </div>
      <div id="features">
        <Features />
      </div>
      <div id="reviews">
        <Reviews />
      </div>
      <div id='contact-us'>
        <ContactUs/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default Home

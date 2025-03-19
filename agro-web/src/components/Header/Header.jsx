import React from 'react'
import './Header.css'
import { assets } from '../../assets/assets'
const Header = () => {
  return (
    <div className='header'>
      <div className="header-contents">
        <div className="h2">
        <h2>The <span className='sln'>solution </span>to your </h2>
        <h2>Agricultural <span className="prob">Problems.</span> </h2>
        </div>
        <p>
        Welcome to Agrovolve – revolutionizing agriculture with drone-powered disease detection. 
        Harnessing technology to ensure healthier crops and higher yields. Explore the future of farming with us!
        </p>
      </div>

         <div className='Appdownload'>
              <div className="download-platforms">
                  <img src={assets.play_store} alt="" />
                  <img src={assets.app_store} alt="" />
              </div>
            
          </div>
    
    </div>
  )
}

export default Header

import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <div className='Navbar' id='Navbar'>
      <div className="navbar-left">
        <div className="logo_name">
          <img className="logo" src={assets.logo} alt="Logo" />
          <p>Agro<span className='volve'>Volve</span></p>
        </div>

        <ul className="desktop-menu">
          <li><a href="#">Home</a></li>
          <li><a href="#aboutUs">About Us</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#reviews">Reviews</a></li>
          <li><a href="#contact-us">Contact Us</a></li>
        </ul>

        <img
          src={assets.dropdown}
          alt="Menu"
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </div>

      <ul ref={menuRef} className={`dropdown-menu ${menuOpen ? 'show' : ''}`}>
        <li><a href="#" onClick={() => setMenuOpen(false)}>Home</a></li>
        <li><a href="#aboutUs" onClick={() => setMenuOpen(false)}>About Us</a></li>
        <li><a href="#features" onClick={() => setMenuOpen(false)}>Features</a></li>
        <li><a href="#reviews" onClick={() => setMenuOpen(false)}>Reviews</a></li>
        <li><a href="#contact-us" onClick={() => setMenuOpen(false)}>Contact Us</a></li>
      </ul>

      <div className="navbar-right">
        <button className='get-app-btn'>Get our app <img src={assets.download} alt="Download" className='download-img' /></button>
      </div>
    </div>
  );
}

export default Navbar;

import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <>
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.mylogo} alt="" id='my-footer-logo'/>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit, Quidem doloremque pariatur itaque dignissimos nobis, est corporis.</p>
            <div className="footer-social-icons">
                <a href=""><img src={assets.facebook_icon} alt="" /></a>
                <a href=""><img src={assets.twitter_icon} alt="" /></a>
                <a href=""><img src={assets.linkedin_icon} alt="" /></a>
            </div>
        </div>
        <div className="footer-content-center">
            <h2 >SGK's Quick Made</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2 >Contact</h2>
            <ul>
                <li>+91 8341541957</li>
                <li>sgk@gmail.com</li>
                <li>koteswararao@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copy-right">Copyright 2025 ©️ SGK Food Delivery - All Rights Reserved.</p>
    </div>
    
    </>
  )
}

export default Footer

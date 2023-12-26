//import React from 'react'
import './Footer.css'
import footer_logo from '../assets/logo_big.png'
import instagram_logo from '../assets/instagram_icon.png'
import pinterest_logo from '../assets/pinterest_icon.png'
import whatsapp_logo from '../assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <img src={instagram_logo} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={pinterest_logo} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={whatsapp_logo} alt="" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2023 - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer

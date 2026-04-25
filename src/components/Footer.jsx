import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope
} from 'react-icons/fa'
import './style.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Top Section */}
        <div className="footer-top">

          {/* Brand Info */}
          <motion.div
            className="footer-box"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2>HomeAura</h2>
            <p>
              Transform your living space with elegant furniture,
              stylish décor, and premium home essentials crafted
              for modern lifestyles.
            </p>

            <div className="social-icons">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaLinkedinIn /></a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="footer-box"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/shop">Shop</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </motion.div>

          {/* Customer Support */}
          <motion.div
            className="footer-box"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <h3>Customer Support</h3>
            <ul>
              <li><Link to="/faq">FAQs</Link></li>
              <li><Link to="/shipping">Shipping Policy</Link></li>
              <li><Link to="/returns">Return Policy</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="footer-box"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h3>Contact Info</h3>

            <div className="contact-item">
              <FaMapMarkerAlt />
              <p>Gandhinagar, Gujarat, India</p>
            </div>

            <div className="contact-item">
              <FaPhoneAlt />
              <p>+91 98765 43210</p>
            </div>

            <div className="contact-item">
              <FaEnvelope />
              <p>support@homeaura.com</p>
            </div>
          </motion.div>

        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p>
            © 2026 HomeAura. All Rights Reserved. Designed with ❤️
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer 
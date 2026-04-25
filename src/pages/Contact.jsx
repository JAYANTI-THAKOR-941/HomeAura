import React from 'react'
import { motion } from 'framer-motion'
import './main.css'

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">

        {/* Heading */}
        <motion.div
          className="contact-heading"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Contact Us</h1>
          <p>
            We'd love to hear from you! Get in touch with HomeAura for
            any questions, support, or product inquiries.
          </p>
        </motion.div>

        <div className="contact-wrapper">

          {/* Contact Form */}
          <motion.div
            className="contact-form"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2>Send Message</h2>

            <form>
              <input type="text" placeholder="Full Name" />
              <input type="email" placeholder="Email Address" />
              <input type="text" placeholder="Subject" />
              <textarea
                rows="6"
                placeholder="Write your message here..."
              ></textarea>

              <button type="submit">Send Message</button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2>Get In Touch</h2>

            <div className="info-box">
              <h3>Address</h3>
              <p>Gandhinagar, Gujarat, India</p>
            </div>

            <div className="info-box">
              <h3>Email</h3>
              <p>support@homeaura.com</p>
            </div>

            <div className="info-box">
              <h3>Phone</h3>
              <p>+91 98765 43210</p>
            </div>

            <div className="info-box">
              <h3>Working Hours</h3>
              <p>Monday - Saturday : 9:00 AM - 7:00 PM</p>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Contact
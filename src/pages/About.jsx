import React from 'react'
import { motion } from 'framer-motion'
import './main.css'

const About = () => {
  return (
    <section className="about-section">
      <div className="container">

        {/* Hero Section */}
        <motion.div
          className="about-hero"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>About HomeAura</h1>
          <p>
            Welcome to <span>HomeAura</span> — where style meets comfort.
            We believe your home should reflect your personality, warmth,
            and lifestyle. Our mission is to bring premium-quality furniture,
            elegant décor, and modern living solutions right to your doorstep.
          </p>
        </motion.div>

        {/* Our Story */}
        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="about-text">
            <h2>Our Story</h2>
            <p>
              HomeAura started with a simple vision — to make beautiful,
              functional, and affordable home décor accessible for everyone.
              From cozy living rooms to stylish bedrooms and inspiring workspaces,
              we help create spaces you truly love.
            </p>

            <p>
              With carefully curated collections and a passion for design,
              we ensure every product adds elegance and comfort to your life.
            </p>
          </div>

          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
              alt="HomeAura Interior"
            />
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          className="why-choose"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <h2>Why Choose Us?</h2>

          <div className="features">

            <div className="feature-card">
              <h3>Premium Quality</h3>
              <p>
                Carefully selected materials and trusted craftsmanship
                for long-lasting beauty.
              </p>
            </div>

            <div className="feature-card">
              <h3>Modern Designs</h3>
              <p>
                Trendy, elegant, and timeless styles for every home.
              </p>
            </div>

            <div className="feature-card">
              <h3>Affordable Luxury</h3>
              <p>
                Beautiful interiors without compromising your budget.
              </p>
            </div>

            <div className="feature-card">
              <h3>Fast Delivery</h3>
              <p>
                Safe and quick doorstep delivery for your convenience.
              </p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default About
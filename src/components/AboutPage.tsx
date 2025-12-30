import './AboutPage.css'
import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <div className="about-page">
      <motion.div 
        className="about-hero"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          About Romeo Shoes
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Crafting Premium Footwear Since 2015
        </motion.p>
      </motion.div>

      <div className="about-page-container">
        {/* Main Story Section */}
        <section className="story-section">
          <div className="story-content">
            <h2>Our Story</h2>
            <p>
              Romeo Shoes was founded with a simple mission: to provide premium footwear that 
              combines exceptional comfort, timeless style, and unmatched durability. For nearly a 
              decade, we've been dedicated to delivering shoes that don't just look good—they feel 
              amazing too.
            </p>
            <p>
              What started as a small boutique has grown into a trusted name in the footwear 
              industry. We work directly with top manufacturers around the world to ensure every 
              pair meets our exacting standards. From the moment our designers conceive an idea to 
              the final quality check, we maintain meticulous attention to detail.
            </p>
            <p>
              Today, Romeo Shoes is proud to serve thousands of satisfied customers across Ghana 
              and beyond. Our commitment to excellence, innovation, and customer satisfaction 
              remains as strong as ever.
            </p>
          </div>
          <div className="story-image">
            <div className="image-box">📷 Our Journey</div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="mission-section">
          <h2>Our Mission & Values</h2>
          <div className="mission-grid">
            <div className="mission-card">
              <div className="mission-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>
                To deliver premium, stylish footwear that empowers our customers to express 
                themselves with confidence and comfort.
              </p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">💎</div>
              <h3>Quality First</h3>
              <p>
                We source only the finest materials and work with manufacturers who share our 
                commitment to excellence and sustainability.
              </p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">🌍</div>
              <h3>Sustainability</h3>
              <p>
                We believe in responsible manufacturing practices that respect our environment 
                and support fair labor standards.
              </p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">❤️</div>
              <h3>Customer Care</h3>
              <p>
                Your satisfaction is our priority. We stand behind every product with exceptional 
                service and support.
              </p>
            </div>
          </div>
        </section>

        {/* Features & Benefits */}
        <section className="benefits-section">
          <h2>Why Choose Romeo Shoes</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon">⭐</div>
              <h3>Premium Quality</h3>
              <p>Handpicked from top manufacturers worldwide, each pair undergoes rigorous quality control</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">🚚</div>
              <h3>Free Shipping</h3>
              <p>Enjoy free delivery on all orders over ₵75 within Ghana</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">↩️</div>
              <h3>30-Day Returns</h3>
              <p>Not satisfied? Hassle-free returns and exchanges within 30 days of purchase</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">👥</div>
              <h3>Expert Support</h3>
              <p>Our dedicated team is here to help with personalized recommendations and support</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">🎁</div>
              <h3>Loyalty Rewards</h3>
              <p>Earn points on every purchase and enjoy exclusive member benefits</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">✅</div>
              <h3>Authenticity Guaranteed</h3>
              <p>100% authentic products with certificates of authenticity included</p>
            </div>
          </div>
        </section>

        {/* Collections */}
        <section className="collections-section">
          <h2>Our Collections</h2>
          <div className="collections-grid">
            <div className="collection-card">
              <div className="collection-header athletic">
                <span>👟</span>
              </div>
              <h3>Athletic</h3>
              <p>High-performance running and sports shoes designed for active lifestyles</p>
            </div>
            <div className="collection-card">
              <div className="collection-header casual">
                <span>👞</span>
              </div>
              <h3>Casual</h3>
              <p>Comfortable everyday shoes perfect for work, school, or casual outings</p>
            </div>
            <div className="collection-card">
              <div className="collection-header hiking">
                <span>🥾</span>
              </div>
              <h3>Hiking & Outdoor</h3>
              <p>Durable boots and hiking shoes for outdoor adventures and exploration</p>
            </div>
            <div className="collection-card">
              <div className="collection-header formal">
                <span>🎩</span>
              </div>
              <h3>Formal</h3>
              <p>Elegant shoes for professional settings and special occasions</p>
            </div>
          </div>
        </section>

        {/* Team & Contact */}
        <section className="contact-cta-section">
          <h2>Get in Touch</h2>
          <p>Have questions or need personalized recommendations? Our team would love to help!</p>
          <div className="contact-info">
            <div className="contact-item">
              <h4>📍 Visit Us</h4>
              <p>Zogbeli, Tamale, Ghana</p>
            </div>
            <div className="contact-item">
              <h4>📞 Call Us</h4>
              <p>0596914663</p>
            </div>
            <div className="contact-item">
              <h4>✉️ Email Us</h4>
              <p>support@romeoshoes.com</p>
            </div>
          </div>
          <button className="contact-btn">Contact Us</button>
        </section>
      </div>
    </div>
  )
}

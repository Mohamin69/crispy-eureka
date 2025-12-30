import './ContactPage.css'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would send the form data to your backend
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    }, 3000)
  }

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <motion.div 
        className="contact-hero"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Get In Touch
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          We'd love to hear from you. Contact us anytime!
        </motion.p>
      </motion.div>

      <div className="contact-page-container">
        {/* Contact Info Cards */}
        <div className="info-cards">
          <div className="info-card">
            <div className="info-icon">📍</div>
            <h3>Location</h3>
            <p>Zogbeli</p>
            <p>Tamale, Ghana</p>
          </div>

          <div className="info-card">
            <div className="info-icon">📞</div>
            <h3>Phone</h3>
            <p>
              <a href="tel:0596914663">0596914663</a>
            </p>
            <p className="small">(Available 9AM - 6PM)</p>
          </div>

          <div className="info-card">
            <div className="info-icon">✉️</div>
            <h3>Email</h3>
            <p>
              <a href="mailto:info@romeoshoes.com">info@romeoshoes.com</a>
            </p>
            <p className="small">(Response within 24hrs)</p>
          </div>

          <div className="info-card">
            <div className="info-icon">🕐</div>
            <h3>Hours</h3>
            <p>Mon - Fri: 9AM - 6PM</p>
            <p>Sat: 10AM - 4PM</p>
            <p>Sun: Closed</p>
          </div>
        </div>

        {/* Contact Form & Details */}
        <div className="contact-content">
          {/* Contact Form */}
          <div className="contact-form-section">
            <h2>Send us a Message</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this about?"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more..."
                  rows={5}
                  required
                ></textarea>
              </div>

              {submitted && <div className="success-message">✓ Message sent successfully! We'll get back to you soon.</div>}

              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>

          {/* Business Info */}
          <div className="business-info-section">
            <h2>Why Choose Romeo Shoes?</h2>
            <div className="reasons">
              <div className="reason-item">
                <div className="reason-icon">👟</div>
                <h4>Premium Quality</h4>
                <p>We offer only the finest footwear from top brands and manufacturers.</p>
              </div>

              <div className="reason-item">
                <div className="reason-icon">💰</div>
                <h4>Competitive Prices</h4>
                <p>Affordable pricing without compromising on quality or style.</p>
              </div>

              <div className="reason-item">
                <div className="reason-icon">🚚</div>
                <h4>Fast Delivery</h4>
                <p>Quick and reliable delivery across Tamale and surrounding areas.</p>
              </div>

              <div className="reason-item">
                <div className="reason-icon">😊</div>
                <h4>Customer Service</h4>
                <p>Dedicated support team ready to help with any questions or concerns.</p>
              </div>

              <div className="reason-item">
                <div className="reason-icon">🔒</div>
                <h4>Secure Payment</h4>
                <p>Safe and secure MTN Mobile Money payment options available.</p>
              </div>

              <div className="reason-item">
                <div className="reason-icon">⭐</div>
                <h4>Trusted Brand</h4>
                <p>Trusted by thousands of customers for authentic and stylish footwear.</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-items">
            <div className="faq-item">
              <h4>Do you offer delivery?</h4>
              <p>
                Yes! We offer delivery within Tamale. You can arrange delivery or pick up in-store.
                Call us for delivery options and rates.
              </p>
            </div>

            <div className="faq-item">
              <h4>What payment methods do you accept?</h4>
              <p>
                We accept MTN Mobile Money payments. Simply input your MTN number during checkout
                and follow the payment instructions.
              </p>
            </div>

            <div className="faq-item">
              <h4>Can I return or exchange items?</h4>
              <p>
                Yes! We have a 30-day return and exchange policy. Items must be in original
                condition with tags attached.
              </p>
            </div>

            <div className="faq-item">
              <h4>How long does delivery take?</h4>
              <p>
                Standard delivery within Tamale takes 2-3 business days. Rush delivery options
                are available upon request.
              </p>
            </div>

            <div className="faq-item">
              <h4>Do you have a physical store?</h4>
              <p>
                Yes! Visit us at our location in Zogbeli, Tamale. We're open Monday to Saturday.
                Call ahead to confirm stock availability.
              </p>
            </div>

            <div className="faq-item">
              <h4>How can I track my order?</h4>
              <p>
                You'll receive a confirmation message with tracking details after your payment is
                confirmed. You can call us anytime for order updates.
              </p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="social-section">
          <h2>Follow Us</h2>
          <p>Stay updated with the latest shoe collections and promotions</p>
          <div className="social-links">
            <a href="#facebook" className="social-btn">
              f Facebook
            </a>
            <a href="#instagram" className="social-btn">
              📷 Instagram
            </a>
            <a href="#whatsapp" className="social-btn">
              💬 WhatsApp
            </a>
            <a href="#twitter" className="social-btn">
              𝕏 Twitter
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

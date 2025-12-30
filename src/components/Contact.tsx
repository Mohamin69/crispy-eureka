import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2>Get In Touch</h2>
        <p className="contact-subtitle">
          Have questions? We would love to hear from you
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <h4>📍 Address</h4>
              <p>Zogbeli, Tamale, Ghana</p>
            </div>
            <div className="info-item">
              <h4>📞 Phone</h4>
              <p>0596914663</p>
            </div>
            <div className="info-item">
              <h4>✉️ Email</h4>
              <p>support@stepstyle.com</p>
            </div>
            <div className="info-item">
              <h4>🕐 Hours</h4>
              <p>Mon - Fri: 9AM - 6PM EST</p>
              <p>Sat - Sun: 10AM - 4PM EST</p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

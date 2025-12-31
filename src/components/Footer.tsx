import './Footer.css'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <motion.footer 
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="footer-container">
        <motion.div 
          className="footer-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3>About Us</h3>
          <ul>
            <li>
              <motion.a 
                href="#about"
                whileHover={{ x: 5, color: "#f59e0b" }}
                transition={{ duration: 0.2 }}
              >
                Our Story
              </motion.a>
            </li>
            <li>
              <motion.a 
                href="#about"
                whileHover={{ x: 5, color: "#f59e0b" }}
                transition={{ duration: 0.2 }}
              >
                Sustainability
              </motion.a>
            </li>
            <li>
              <motion.a 
                href="#about"
                whileHover={{ x: 5, color: "#f59e0b" }}
                transition={{ duration: 0.2 }}
              >
                Careers
              </motion.a>
            </li>
          </ul>
        </motion.div>

        <motion.div 
          className="footer-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3>Shop</h3>
          <ul>
            <li>
              <motion.a 
                href="#products"
                whileHover={{ x: 5, color: "#f59e0b" }}
                transition={{ duration: 0.2 }}
              >
                Men's Shoes
              </motion.a>
            </li>
            <li>
              <motion.a 
                href="#products"
                whileHover={{ x: 5, color: "#f59e0b" }}
                transition={{ duration: 0.2 }}
              >
                Women's Shoes
              </motion.a>
            </li>
            <li>
              <motion.a 
                href="#products"
                whileHover={{ x: 5, color: "#f59e0b" }}
                transition={{ duration: 0.2 }}
              >
                Sale
              </motion.a>
            </li>
          </ul>
        </motion.div>

        <motion.div 
          className="footer-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3>Support</h3>
          <ul>
            <li>
              <motion.a 
                href="#contact"
                whileHover={{ x: 5, color: "#f59e0b" }}
                transition={{ duration: 0.2 }}
              >
                Contact Us
              </motion.a>
            </li>
            <li>
              <motion.a 
                href="#contact"
                whileHover={{ x: 5, color: "#f59e0b" }}
                transition={{ duration: 0.2 }}
              >
                FAQs
              </motion.a>
            </li>
            <li>
              <motion.a 
                href="#contact"
                whileHover={{ x: 5, color: "#f59e0b" }}
                transition={{ duration: 0.2 }}
              >
                Shipping Info
              </motion.a>
            </li>
          </ul>
        </motion.div>

        <motion.div 
          className="footer-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3>Follow Us</h3>
          <div className="social-links">
            <motion.a 
              href="#facebook"
              whileHover={{ scale: 1.2, color: "#f59e0b" }}
              whileTap={{ scale: 0.9 }}
            >
              Facebook
            </motion.a>
            <motion.a 
              href="#twitter"
              whileHover={{ scale: 1.2, color: "#f59e0b" }}
              whileTap={{ scale: 0.9 }}
            >
              Twitter
            </motion.a>
            <motion.a 
              href="#instagram"
              whileHover={{ scale: 1.2, color: "#f59e0b" }}
              whileTap={{ scale: 0.9 }}
            >
              Instagram
            </motion.a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="footer-bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <p>
          &copy; 2025 StepStyle. All rights reserved. | Privacy Policy |
          Terms of Service
        </p>
      </motion.div>
    </motion.footer>
  )
}

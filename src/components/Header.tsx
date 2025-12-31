import './Header.css'
import { motion } from 'framer-motion'

interface HeaderProps {
  isDark: boolean
  onToggleTheme: () => void
  cartCount: number
  cartTotal: string
  onCartClick: () => void
}

export default function Header({ isDark, onToggleTheme, cartCount, cartTotal, onCartClick }: HeaderProps) {
  return (
    <motion.header 
      className="header"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="header-container">
        <motion.a 
          href="#home" 
          className="logo"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <h1>👟 Romeo Shoes</h1>
        </motion.a>
        <nav className="nav">
          <motion.a 
            href="#home"
            whileHover={{ scale: 1.1, color: "#f59e0b" }}
            transition={{ duration: 0.2 }}
          >
            Home
          </motion.a>
          <motion.a 
            href="#products-page"
            whileHover={{ scale: 1.1, color: "#f59e0b" }}
            transition={{ duration: 0.2 }}
          >
            Products
          </motion.a>
          <motion.a 
            href="#about-page"
            whileHover={{ scale: 1.1, color: "#f59e0b" }}
            transition={{ duration: 0.2 }}
          >
            About
          </motion.a>
          <motion.a 
            href="#contact-page"
            whileHover={{ scale: 1.1, color: "#f59e0b" }}
            transition={{ duration: 0.2 }}
          >
            Contact
          </motion.a>
        </nav>
        <motion.button 
          className="theme-btn" 
          onClick={onToggleTheme}
          whileHover={{ scale: 1.2, rotate: 180 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          {isDark ? '☀️' : '🌙'}
        </motion.button>
        <motion.button 
          className="cart-btn" 
          onClick={onCartClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          🛒 Cart {cartCount > 0 && <motion.span 
            className="cart-badge"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 500 }}
          >
            {cartCount}
          </motion.span>}
          {cartCount > 0 && <span className="cart-total">₵{cartTotal}</span>}
        </motion.button>
      </div>
    </motion.header>
  )
}

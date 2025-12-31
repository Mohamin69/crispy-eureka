import React from 'react'
import { motion } from 'framer-motion'

export default function Header(){
  return (
    <header className="site-header">
      <div className="container header-inner">
        <motion.div className="brand" initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5}}>HAMZA</motion.div>
        <nav className="nav">
          <a className="nav-link" href="#">Home</a>
          <a className="nav-link" href="#products">Products</a>
          <a className="nav-link" href="#contact-form-section">Contact</a>
          <button className="btn auth">Log In</button>
        </nav>
      </div>
    </header>
  )
}

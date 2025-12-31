import React from 'react'
import { motion } from 'framer-motion'

export default function ProductModal({product, onClose}){
  if(!product) return null
  return (
    <motion.div className="modal-backdrop" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={onClose}>
      <motion.div className="modal-card" initial={{y:40, scale:0.98}} animate={{y:0, scale:1}} exit={{y:20, opacity:0}} transition={{type:'spring'}} onClick={(e)=>e.stopPropagation()}>
        <div className="modal-grid">
          <div className="modal-img">
            <img src={product.img} alt={product.name} />
            <div className="small muted">{product.size}</div>
          </div>
          <div className="modal-body">
            <h3>{product.name}</h3>
            <div className="price">{product.price}</div>
            <p className="muted">{product.effects}</p>
            <h5>Uses</h5>
            <ul>
              {product.uses.map((u,i)=>(<li key={i}>{u}</li>))}
            </ul>
            <h5>How to use</h5>
            <p className="muted">{product.directions}</p>
            <h6>Ingredients</h6>
            <p className="small muted">{product.ingredients}</p>
            <div className="mt-3 text-right">
              <button className="btn btn-secondary" onClick={onClose}>Close</button>
              <a className="btn btn-primary ms-2" href="#contact-form-section">Contact to Buy</a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

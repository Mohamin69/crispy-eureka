import React, {useState} from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ProductModal from './ProductModal'

const products = [
  {
    id: 'nivea-lotion',
    name: 'Nivea Body Lotion',
    price: 'GHS 45',
    img: '/images/cosmetics-on-pink-table.jpg',
    short: 'Lightweight daily moisturizer.',
    uses: ['Daily moisturizing','Soothes dry areas','After-shower use'],
    effects: 'Restores surface hydration and softness without greasy residue.',
    directions: 'Apply liberally to damp skin after showering. Massage until absorbed.',
    ingredients: 'Aqua, glycerin, emollients, mild fragrance',
    size: '400ml'
  },
  {
    id: 'nivea-cream',
    name: 'Nivea Intensive Cream',
    price: 'GHS 30',
    img: '/images/Dove_facial_products_1200x900.jpg',
    short: 'Rich cream for extra dry areas.',
    uses: ['Spot treatment for very dry patches','Night repair for hands and feet'],
    effects: 'Creates an occlusive layer that locks in moisture and supports skin repair overnight.',
    directions: 'Apply a small amount to affected areas; for intense care use overnight.',
    ingredients: 'Emollients, occlusives, humectants',
    size: '150ml'
  },
  {
    id: 'dove-spray',
    name: 'Dove Body Spray',
    price: 'GHS 28',
    img: '/images/doveproducts-600_GqrxFYf.jpg',
    short: 'Light, refreshing body mist.',
    uses: ['Quick refresh','Post-workout spray'],
    effects: 'Provides temporary fragrance; not an antiperspirant.',
    directions: 'Spray from about 15 cm onto pulse points or clothes.',
    ingredients: 'Alcohol denat., fragrance, water',
    size: '150ml'
  }
]

export default function Products(){
  const [active, setActive] = useState(null)

  return (
    <section id="products" className="products-section">
      <div className="section-header">
        <h2>Available Cosmetics</h2>
        <div className="muted">Prices shown in GHS</div>
      </div>

      <div className="grid">
        {products.map(p=> (
          <motion.article key={p.id} className="card product" layout whileHover={{scale:1.02}} whileTap={{scale:0.99}} onClick={()=>setActive(p)}>
            <div className="imgWrap">
              <img src={p.img} alt={p.name} />
            </div>
            <div className="body">
              <h5>{p.name}</h5>
              <div className="price">{p.price}</div>
              <p className="muted small">{p.short}</p>
            </div>
          </motion.article>
        ))}
      </div>

      <AnimatePresence>
        {active && <ProductModal key={active.id} product={active} onClose={()=>setActive(null)} />}
      </AnimatePresence>
    </section>
  )
}

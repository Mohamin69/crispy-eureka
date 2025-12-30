import './Products.css'
import { motion } from 'framer-motion'

interface Product {
  id: number
  name: string
  category: string
  price: number
  image: string
}

const products: Product[] = [
  {
    id: 1,
    name: 'Air Runner',
    category: 'Athletic',
    price: 129.99,
    image: '/shoes/alexander-rotker-l8p1aWZqHvE-unsplash.jpg',
  },
  {
    id: 2,
    name: 'Urban Classic',
    category: 'Casual',
    price: 89.99,
    image: '/shoes/felirbe-6zO5VKogoZE-unsplash.jpg',
  },
  {
    id: 3,
    name: 'Trail Explorer',
    category: 'Hiking',
    price: 149.99,
    image: '/shoes/irene-kredenets-dwKiHoqqxk8-unsplash.jpg',
  },
  {
    id: 4,
    name: 'Beach Vibes',
    category: 'Casual',
    price: 49.99,
    image: '/shoes/luis-felipe-lins-LG88A2XgIXY-unsplash.jpg',
  },
  {
    id: 5,
    name: 'Luxury Slip-On',
    category: 'Formal',
    price: 159.99,
    image: '/shoes/malvestida-DMl5gG0yWWY-unsplash.jpg',
  },
  {
    id: 6,
    name: 'Performance Pro',
    category: 'Sports',
    price: 189.99,
    image: '/shoes/maxim-hopman-8cT5ja0P_N4-unsplash.jpg',
  },
]

export default function Products() {
  return (
    <section className="products" id="products">
      <div className="products-container">
        <h2>Our Collections</h2>
        <p className="subtitle">
          Discover our premium selection of shoes for every lifestyle
        </p>

        <div className="products-grid">
          {products.map((product, index) => (
            <motion.div 
              key={product.id} 
              className="product-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                transition: { duration: 0.3 }
              }}
            >
              <div className="product-image">
                <motion.img 
                  src={product.image} 
                  alt={product.name}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="category">{product.category}</p>
                <div className="product-footer">
                  <span className="price">₵{product.price}</span>
                  <motion.button 
                    className="add-btn"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    Add to Cart
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

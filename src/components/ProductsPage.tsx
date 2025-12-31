import './ProductsPage.css'
import { useState } from 'react'
import { motion } from 'framer-motion'

interface Product {
  id: number
  name: string
  category: string
  price: number
  image: string
  description: string
}

interface ProductsPageProps {
  onAddToCart: (id: number, name: string, price: number) => void
}

const allProducts: Product[] = [
  {
    id: 1,
    name: 'Air Runner',
    category: 'Athletic',
    price: 649.99,
    image: '/shoes/alexander-rotker-l8p1aWZqHvE-unsplash.jpg',
    description: 'Premium athletic running shoes with advanced cushioning technology',
  },
  {
    id: 2,
    name: 'Urban Classic',
    category: 'Casual',
    price: 449.99,
    image: '/shoes/felirbe-6zO5VKogoZE-unsplash.jpg',
    description: 'Stylish everyday casual shoes perfect for urban lifestyle',
  },
  {
    id: 3,
    name: 'Trail Explorer',
    category: 'Hiking',
    price: 749.99,
    image: '/shoes/irene-kredenets-dwKiHoqqxk8-unsplash.jpg',
    description: 'Durable hiking boots designed for outdoor adventures',
  },
  {
    id: 4,
    name: 'Beach Vibes',
    category: 'Casual',
    price: 249.99,
    image: '/shoes/luis-felipe-lins-LG88A2XgIXY-unsplash.jpg',
    description: 'Comfortable summer sandals with elegant design',
  },
  {
    id: 5,
    name: 'Luxury Slip-On',
    category: 'Formal',
    price: 799.99,
    image: '/shoes/malvestida-DMl5gG0yWWY-unsplash.jpg',
    description: 'Sophisticated formal shoes for professional occasions',
  },
  {
    id: 6,
    name: 'Performance Pro',
    category: 'Sports',
    price: 949.99,
    image: '/shoes/maxim-hopman-8cT5ja0P_N4-unsplash.jpg',
    description: 'High-performance sports shoes with latest technology',
  },
  {
    id: 7,
    name: 'Street Style',
    category: 'Casual',
    price: 549.99,
    image: '/shoes/mojtaba-fahiminia-CQzCMx_wvk4-unsplash.jpg',
    description: 'Modern street style sneakers for fashion-forward individuals',
  },
  {
    id: 8,
    name: 'Comfort Walker',
    category: 'Casual',
    price: 399.99,
    image: '/shoes/nathan-dumlao-qxcQG21m_qE-unsplash.jpg',
    description: 'Comfortable everyday shoes with orthopedic support',
  },
  {
    id: 9,
    name: 'Elite Runner',
    category: 'Athletic',
    price: 849.99,
    image: '/shoes/omar-prestwich-jLEGurepDco-unsplash.jpg',
    description: 'Professional running shoes for serious athletes',
  },
  {
    id: 10,
    name: 'Elegant Evening',
    category: 'Formal',
    price: 899.99,
    image: '/shoes/usama-akram-kP6knT7tjn4-unsplash.jpg',
    description: 'Premium formal shoes for evening events',
  },
  {
    id: 11,
    name: 'Adventure Boots',
    category: 'Hiking',
    price: 799.99,
    image: '/shoes/xavier-teo-SxAXphIPWeg-unsplash.jpg',
    description: 'Rugged boots perfect for outdoor exploration',
  },
]

export default function ProductsPage({ onAddToCart }: ProductsPageProps) {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'Athletic', 'Casual', 'Hiking', 'Formal', 'Sports']
  const filteredProducts =
    selectedCategory === 'All'
      ? allProducts
      : allProducts.filter((p) => p.category === selectedCategory)

  return (
    <div className="products-page">
      <div className="products-header">
        <h1>Our Complete Collection</h1>
        <p>Discover our premium selection of shoes for every lifestyle and occasion</p>
      </div>

      <div className="products-page-container">
        <div className="category-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="products-showcase-grid">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              className="product-showcase-card"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="showcase-image-container">
                <img src={product.image} alt={product.name} />
                <div className="showcase-overlay">
                  <motion.button 
                    className="quick-view-btn"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Quick View
                  </motion.button>
                </div>
              </div>
              <div className="showcase-info">
                <h3>{product.name}</h3>
                <p className="showcase-category">{product.category}</p>
                <p className="showcase-description">{product.description}</p>
                <div className="showcase-footer">
                  <span className="showcase-price">₵{product.price}</span>
                  <motion.button 
                    className="add-to-cart-btn"
                    onClick={() => onAddToCart(product.id, product.name, product.price)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Add to Cart
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="no-products">
            <p>No products found in this category</p>
          </div>
        )}
      </div>
    </div>
  )
}

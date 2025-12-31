import './App.css'
import { useState, useEffect } from 'react'
import GridBackground from './components/GridBackground'
import Header from './components/Header'
import CartModal from './components/CartModal'
import PaymentModal from './components/PaymentModal'
import Hero from './components/Hero'
import Products from './components/Products'
import ProductsPage from './components/ProductsPage'
import AboutPage from './components/AboutPage'
import ContactPage from './components/ContactPage'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
}

function App() {
  const [isDark, setIsDark] = useState(false)
  const [currentPage, setCurrentPage] = useState<'home' | 'products' | 'about' | 'contact'>('home')
  const [cart, setCart] = useState<CartItem[]>([])
  const [showCart, setShowCart] = useState(false)
  const [showCheckout, setShowCheckout] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      setIsDark(true)
      document.documentElement.setAttribute('data-theme', 'dark')
    }

    const handleNavigation = (e: Event) => {
      const target = e.target as HTMLAnchorElement
      if (target.getAttribute('href') === '#home') {
        e.preventDefault()
        setCurrentPage('home')
        window.scrollTo(0, 0)
      } else if (target.getAttribute('href') === '#products-page') {
        e.preventDefault()
        setCurrentPage('products')
        window.scrollTo(0, 0)
      } else if (target.getAttribute('href') === '#about-page') {
        e.preventDefault()
        setCurrentPage('about')
        window.scrollTo(0, 0)
      } else if (target.getAttribute('href') === '#contact-page') {
        e.preventDefault()
        setCurrentPage('contact')
        window.scrollTo(0, 0)
      }
    }

    document.addEventListener('click', handleNavigation)
    return () => document.removeEventListener('click', handleNavigation)
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
    if (!isDark) {
      document.documentElement.setAttribute('data-theme', 'dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.removeAttribute('data-theme')
      localStorage.setItem('theme', 'light')
    }
  }

  const addToCart = (id: number, name: string, price: number) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === id)
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
      return [...prevCart, { id, name, price, quantity: 1 }]
    })
  }

  const getTotalAmount = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)
  }

  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id))
  }

  return (
    <div className="app">
      <GridBackground />
      <Header isDark={isDark} onToggleTheme={toggleTheme} cartCount={cart.length} cartTotal={getTotalAmount()} onCartClick={() => setShowCart(true)} />
      <CartModal
        isOpen={showCart}
        onClose={() => setShowCart(false)}
        cartItems={cart}
        totalAmount={getTotalAmount()}
        onRemoveItem={removeFromCart}
        onCheckout={() => {
          setShowCart(false)
          setShowCheckout(true)
        }}
      />
      <PaymentModal
        isOpen={showCheckout}
        onClose={() => setShowCheckout(false)}
        cartItems={cart}
        totalAmount={getTotalAmount()}
      />
      {currentPage === 'products' ? (
        <>
          <ProductsPage onAddToCart={addToCart} />
          <div style={{ marginTop: '3rem' }}>
            <button
              onClick={() => setCurrentPage('home')}
              style={{
                display: 'block',
                margin: '2rem auto',
                padding: '0.75rem 2rem',
                background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: '1rem',
              }}
            >
              ← Back to Home
            </button>
          </div>
          <Footer />
        </>
      ) : currentPage === 'about' ? (
        <>
          <AboutPage />
          <div style={{ marginTop: '3rem' }}>
            <button
              onClick={() => setCurrentPage('home')}
              style={{
                display: 'block',
                margin: '2rem auto',
                padding: '0.75rem 2rem',
                background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: '1rem',
              }}
            >
              ← Back to Home
            </button>
          </div>
          <Footer />
        </>
      ) : currentPage === 'contact' ? (
        <>
          <ContactPage />
          <div style={{ marginTop: '3rem' }}>
            <button
              onClick={() => setCurrentPage('home')}
              style={{
                display: 'block',
                margin: '2rem auto',
                padding: '0.75rem 2rem',
                background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: '1rem',
              }}
            >
              ← Back to Home
            </button>
          </div>
          <Footer />
        </>
      ) : (
        <>
          <Hero />
          <Products />
          <About />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  )
}

export default App

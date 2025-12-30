import { motion, AnimatePresence } from 'framer-motion'
import './CartModal.css'
import React from 'react'

interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
}

interface CartModalProps {
  isOpen: boolean
  onClose: () => void
  cartItems: CartItem[]
  totalAmount: string
  onRemoveItem?: (id: number) => void
  onCheckout?: () => void
}

export default function CartModal({
  isOpen,
  onClose,
  cartItems,
  totalAmount,
  onRemoveItem,
  onCheckout,
}: CartModalProps) {
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="modal-overlay" 
          onClick={handleOverlayClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div 
            className="modal-content"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <div className="modal-header">
              <h2>Shopping Cart</h2>
              <button className="modal-close-btn" onClick={onClose}>
                ✕
              </button>
            </div>

            <div className="modal-body">
              {cartItems.length === 0 ? (
                <div className="empty-cart">
                  <p>Your cart is empty</p>
                </div>
              ) : (
                <>
                  <div className="cart-items">
                    {cartItems.map((item, index) => (
                      <motion.div 
                        key={item.id} 
                        className="cart-item"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="item-info">
                          <h3>{item.name}</h3>
                          <p className="item-quantity">Quantity: {item.quantity}</p>
                        </div>
                        <div className="item-price">
                          <span className="unit-price">₵{item.price}</span>
                          <span className="subtotal">
                            Subtotal: ₵{(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                        {onRemoveItem && (
                          <motion.button
                            className="remove-btn"
                            onClick={() => onRemoveItem(item.id)}
                            title="Remove item"
                            whileHover={{ scale: 1.2, rotate: 10 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            🗑️
                          </motion.button>
                        )}
                      </motion.div>
                    ))}
                  </div>

                  <div className="modal-divider"></div>

                  <div className="cart-total">
                    <h3>Total Amount:</h3>
                    <span className="total-amount">₵{totalAmount}</span>
                  </div>

                  <div className="modal-actions">
                    <motion.button 
                      className="continue-btn" 
                      onClick={onClose}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Continue Shopping
                    </motion.button>
                    <motion.button 
                      className="checkout-btn" 
                      onClick={onCheckout} 
                      disabled={cartItems.length === 0}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Proceed to Checkout
                    </motion.button>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

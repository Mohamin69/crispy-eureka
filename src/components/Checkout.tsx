import './Checkout.css'
import { useState } from 'react'

interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
}

interface CheckoutProps {
  cartItems: CartItem[]
  totalAmount: string
  onBack: () => void
}

export default function Checkout({ cartItems, totalAmount, onBack }: CheckoutProps) {
  const [paymentMethod, setPaymentMethod] = useState('mtn')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [isProcessing, setIsProcessing] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!phoneNumber || !fullName || !email || !address) {
      setMessage('Please fill in all fields')
      return
    }

    if (!/^\d{10}$/.test(phoneNumber)) {
      setMessage('Please enter a valid 10-digit phone number')
      return
    }

    setIsProcessing(true)
    setMessage('')

    try {
      // Simulate MTN Mobile Money payment processing
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Here you would integrate with actual MTN Mobile Money API
      // For now, we're simulating success
      setMessage(
        `✓ Payment request sent to ${phoneNumber}. Please complete the transaction on your phone.`
      )

      setTimeout(() => {
        setMessage('')
        setPhoneNumber('')
        setFullName('')
        setEmail('')
        setAddress('')
        onBack()
      }, 3000)
    } catch (error) {
      setMessage('Payment processing failed. Please try again.')
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <div className="checkout">
      <div className="checkout-container">
        <div className="checkout-header">
          <h1>Checkout</h1>
          <button className="close-btn" onClick={onBack}>
            ✕
          </button>
        </div>

        <div className="checkout-content">
          {/* Order Summary */}
          <div className="order-summary">
            <h2>Order Summary</h2>
            <div className="summary-items">
              {cartItems.map((item) => (
                <div key={item.id} className="summary-item">
                  <div>
                    <p className="item-name">{item.name}</p>
                    <p className="item-qty">Qty: {item.quantity}</p>
                  </div>
                  <span className="item-total">₵{(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="summary-total">
              <h3>Total Amount</h3>
              <span className="total-price">₵{totalAmount}</span>
            </div>
          </div>

          {/* Checkout Form */}
          <div className="checkout-form">
            <h2>Billing & Delivery Information</h2>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="fullName">Full Name *</label>
                <input
                  type="text"
                  id="fullName"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Enter your full name"
                  disabled={isProcessing}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  disabled={isProcessing}
                />
              </div>

              <div className="form-group">
                <label htmlFor="address">Delivery Address *</label>
                <textarea
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter your delivery address"
                  rows={3}
                  disabled={isProcessing}
                />
              </div>

              <h3 className="payment-title">Payment Method</h3>

              <div className="payment-methods">
                <label className="payment-option">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="mtn"
                    checked={paymentMethod === 'mtn'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    disabled={isProcessing}
                  />
                  <div className="payment-info">
                    <span className="method-name">MTN Mobile Money</span>
                    <span className="method-desc">Pay using MTN Mobile Money Ghana</span>
                  </div>
                </label>
              </div>

              <div className="form-group">
                <label htmlFor="phoneNumber">MTN Mobile Money Phone Number *</label>
                <input
                  type="tel"
                  id="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ''))}
                  placeholder="024XXXXXXX (10 digits)"
                  maxLength={10}
                  disabled={isProcessing}
                />
                <small>Enter your MTN phone number (10 digits)</small>
              </div>

              {message && (
                <div className={`message ${message.includes('✓') ? 'success' : 'error'}`}>
                  {message}
                </div>
              )}

              <div className="form-actions">
                <button type="button" className="btn-cancel" onClick={onBack} disabled={isProcessing}>
                  Cancel
                </button>
                <button type="submit" className="btn-pay" disabled={isProcessing}>
                  {isProcessing ? 'Processing...' : `Pay ₵${totalAmount}`}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

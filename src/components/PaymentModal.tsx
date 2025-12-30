import './PaymentModal.css'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
}

interface PaymentModalProps {
  isOpen: boolean
  onClose: () => void
  cartItems: CartItem[]
  totalAmount: string
}

const BUSINESS_MOMO_NUMBER = '0557255260'

export default function PaymentModal({
  isOpen,
  onClose,
  cartItems,
  totalAmount,
}: PaymentModalProps) {
  const [step, setStep] = useState<'input' | 'processing' | 'success'>('input')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [error, setError] = useState('')

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '')
    setPhoneNumber(value.slice(0, 10))
    setError('')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!phoneNumber) {
      setError('Please enter your MTN mobile money number')
      return
    }

    if (phoneNumber.length !== 10) {
      setError('Please enter a valid 10-digit MTN number')
      return
    }

    if (!phoneNumber.startsWith('05')) {
      setError('MTN numbers in Ghana start with 05')
      return
    }

    setStep('processing')

    try {
      // INTEGRATION POINT: Replace this with your actual MTN Mobile Money API call
      // Example services you can use:
      // 1. MTN Mobile Money API (https://developer.mtn.com)
      // 2. Afrimax USSD Gateway (https://afrimax.com)
      // 3. Hubtel Payment API (https://hubtel.com)
      
      // Example API call structure:
      // const response = await fetch('YOUR_API_ENDPOINT', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'Authorization': `Bearer YOUR_API_KEY`
      //   },
      //   body: JSON.stringify({
      //     phone: phoneNumber,
      //     amount: totalAmount,
      //     businessNumber: BUSINESS_MOMO_NUMBER,
      //     description: 'Romeo Shoes Purchase'
      //   })
      // })

      // For now, simulating the API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // If using a real USSD gateway, the actual payment prompt would appear on the user's phone
      // They would dial the USSD code (usually *170#) or receive an automated prompt
      
      setStep('success')

      // Auto-close after 5 seconds
      setTimeout(() => {
        onClose()
        setStep('input')
        setPhoneNumber('')
      }, 5000)
    } catch (err) {
      setError('Payment processing failed. Please try again.')
      setStep('input')
    }
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="payment-modal-overlay" 
          onClick={(e) => {
            if (e.target === e.currentTarget && step === 'input') onClose()
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div 
            className="payment-modal"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          >
        {step === 'input' && (
          <>
            <div className="modal-header">
              <h2>MTN Mobile Money Payment</h2>
              <button className="close-btn" onClick={onClose}>✕</button>
            </div>

            <div className="modal-body">
              <div className="payment-info">
                <div className="info-item">
                  <span className="label">Total Amount</span>
                  <span className="value">₵{totalAmount}</span>
                </div>
                <div className="info-item">
                  <span className="label">Payment To</span>
                  <span className="value">{BUSINESS_MOMO_NUMBER}</span>
                </div>
                <div className="info-item">
                  <span className="label">Items</span>
                  <span className="value">{cartItems.length} item(s)</span>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="mtnNumber">Your MTN Mobile Money Number</label>
                  <input
                    type="tel"
                    id="mtnNumber"
                    value={phoneNumber}
                    onChange={handlePhoneChange}
                    placeholder="024XXXXXXX"
                    maxLength={10}
                    autoFocus
                  />
                  <small>Enter your 10-digit MTN number (e.g., 0241234567)</small>
                </div>

                {error && <div className="error-message">{error}</div>}

                <div className="instructions">
                  <h4>📱 How it works:</h4>
                  <ol>
                    <li>Enter your MTN Mobile Money number above</li>
                    <li>You'll receive a prompt on your phone to enter your MOMO PIN</li>
                    <li>Your payment will be sent to <strong>{BUSINESS_MOMO_NUMBER}</strong></li>
                    <li>Confirm the payment on your phone</li>
                  </ol>
                </div>

                <div className="modal-actions">
                  <button type="button" className="btn-cancel" onClick={onClose}>
                    Cancel
                  </button>
                  <button type="submit" className="btn-confirm">
                    Confirm Payment
                  </button>
                </div>
              </form>
            </div>
          </>
        )}

        {step === 'processing' && (
          <div className="modal-center">
            <div className="spinner"></div>
            <h2>Processing Payment</h2>
            <p>Sending payment request to {phoneNumber}...</p>
            <p className="small">Please wait for the MOMO prompt on your phone</p>
          </div>
        )}

        {step === 'success' && (
          <div className="modal-center success">
            <div className="success-icon">✓</div>
            <h2>Payment Request Sent!</h2>
            <div className="success-details">
              <p>A payment prompt has been sent to:</p>
              <p className="phone-number">{phoneNumber}</p>
              <p className="instruction">
                Please check your phone. You should receive a payment prompt asking you to enter your MOMO PIN to send ₵{totalAmount} to <strong>{BUSINESS_MOMO_NUMBER}</strong>
              </p>
              <p className="note">
                <strong>Note:</strong> This demo is in test mode. For real payments, integrate with MTN Mobile Money API. See PAYMENT_INTEGRATION_GUIDE.md for details.
              </p>
            </div>
            <p className="auto-close">Closing in a few seconds...</p>
          </div>
        )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

# MTN Mobile Money Payment Integration Guide

## Current Status
The payment form is currently in **simulation mode**. To enable real payments, you need to integrate with an actual MTN Mobile Money API or USSD gateway.

## Services to Integrate With

### 1. **MTN Mobile Money API** (Official)
- **Website**: https://developer.mtn.com
- **Endpoint**: MTN Mobile Money Collection API
- **Process**: Direct API integration with MTN's payment system
- **Requirements**: 
  - API credentials from MTN
  - Business account setup
  - Webhook for payment confirmation

### 2. **Hubtel Payment API** (Recommended for Ghana)
- **Website**: https://hubtel.com
- **Endpoint**: `/v1/merchants/{merchantId}/transactions/initiate`
- **Process**: REST API call to initiate payment
- **Features**: USSD, Mobile Money, Card payments
- **Ghana-specific**: Best support for MTN Ghana

### 3. **Afrimax USSD Gateway**
- **Website**: https://afrimax.com
- **Process**: USSD-based payment requests
- **Advantage**: Users receive USSD dial codes like *170#

### 4. **Simplify/Paystack with MTN**
- **Website**: https://paystack.com
- **Payment Methods**: Includes MTN Mobile Money Ghana
- **Easy Integration**: Well-documented, popular in Ghana

## Implementation Steps

### Step 1: Choose a Service
Select one of the above services based on your needs.

### Step 2: Get API Credentials
- Register on the service provider's developer portal
- Get API keys and merchant ID
- Setup webhook URLs for payment confirmation

### Step 3: Update PaymentModal.tsx
Replace the simulation code in the `handleSubmit` function with actual API calls:

```typescript
// Example for Hubtel
const response = await fetch('https://api.hubtel.com/v1/merchants/{merchantId}/transactions/initiate', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer YOUR_API_KEY`
  },
  body: JSON.stringify({
    customerPhone: phoneNumber,
    customerEmail: 'customer@example.com',
    customerName: 'Customer Name',
    amount: parseFloat(totalAmount),
    description: 'Romeo Shoes Purchase',
    merchantPhone: BUSINESS_MOMO_NUMBER,
    returnUrl: 'https://yoursite.com/payment/success',
    cancelUrl: 'https://yoursite.com/payment/cancel'
  })
})

const data = await response.json()
if (data.success) {
  // Payment initiated successfully
  setStep('success')
} else {
  throw new Error(data.message)
}
```

### Step 4: Handle Webhooks
Setup a backend endpoint to handle payment confirmations:

```typescript
// Backend (Node.js example)
app.post('/api/payment-webhook', (req, res) => {
  const { transactionId, status, amount, phone } = req.body
  
  if (status === 'completed') {
    // Payment successful - update order status
    // Send confirmation email
    // Update cart/order in database
  }
  
  res.json({ success: true })
})
```

## Testing

### Test Credentials
Most payment providers offer test/sandbox mode:
- Use test API keys during development
- Test with sandbox phone numbers provided by the service
- Verify webhook integration before going live

## Environment Variables

Add these to your `.env` file:
```
VITE_PAYMENT_API_KEY=your_api_key_here
VITE_MERCHANT_ID=your_merchant_id_here
VITE_BUSINESS_MOMO=0557255260
VITE_API_ENDPOINT=https://api.yourmotionservice.com
```

## Security Considerations

1. **Never expose API keys** in frontend code - use environment variables
2. **Validate all transactions** on the backend
3. **Use HTTPS** for all payment communications
4. **Store payment records** securely in your database
5. **Implement rate limiting** to prevent abuse

## Testing the Integration

Once integrated:
1. User enters their MTN number
2. Clicks "Confirm Payment"
3. They receive a real payment prompt on their phone
4. They enter their MOMO PIN
5. Payment is processed
6. You receive webhook confirmation
7. Order status is updated

## Support Resources

- **MTN Developer Docs**: https://developer.mtn.com/documentation
- **Hubtel Integration Guide**: https://hubtel.com/developers
- **Ghana Tech Community**: Ask in local dev communities

## Next Steps

1. Choose your payment provider
2. Register and get credentials
3. Implement the API integration in `src/components/PaymentModal.tsx`
4. Test thoroughly in sandbox mode
5. Go live!

---

**Need Help?** The PaymentModal component is ready for integration - just replace the simulation code with real API calls.

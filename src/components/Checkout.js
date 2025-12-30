import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './Checkout.css';
import { useState } from 'react';
export default function Checkout({ cartItems, totalAmount, onBack }) {
    const [paymentMethod, setPaymentMethod] = useState('mtn');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);
    const [message, setMessage] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!phoneNumber || !fullName || !email || !address) {
            setMessage('Please fill in all fields');
            return;
        }
        if (!/^\d{10}$/.test(phoneNumber)) {
            setMessage('Please enter a valid 10-digit phone number');
            return;
        }
        setIsProcessing(true);
        setMessage('');
        try {
            // Simulate MTN Mobile Money payment processing
            await new Promise((resolve) => setTimeout(resolve, 2000));
            // Here you would integrate with actual MTN Mobile Money API
            // For now, we're simulating success
            setMessage(`✓ Payment request sent to ${phoneNumber}. Please complete the transaction on your phone.`);
            setTimeout(() => {
                setMessage('');
                setPhoneNumber('');
                setFullName('');
                setEmail('');
                setAddress('');
                onBack();
            }, 3000);
        }
        catch (error) {
            setMessage('Payment processing failed. Please try again.');
        }
        finally {
            setIsProcessing(false);
        }
    };
    return (_jsx("div", { className: "checkout", children: _jsxs("div", { className: "checkout-container", children: [_jsxs("div", { className: "checkout-header", children: [_jsx("h1", { children: "Checkout" }), _jsx("button", { className: "close-btn", onClick: onBack, children: "\u2715" })] }), _jsxs("div", { className: "checkout-content", children: [_jsxs("div", { className: "order-summary", children: [_jsx("h2", { children: "Order Summary" }), _jsx("div", { className: "summary-items", children: cartItems.map((item) => (_jsxs("div", { className: "summary-item", children: [_jsxs("div", { children: [_jsx("p", { className: "item-name", children: item.name }), _jsxs("p", { className: "item-qty", children: ["Qty: ", item.quantity] })] }), _jsxs("span", { className: "item-total", children: ["\u20B5", (item.price * item.quantity).toFixed(2)] })] }, item.id))) }), _jsxs("div", { className: "summary-total", children: [_jsx("h3", { children: "Total Amount" }), _jsxs("span", { className: "total-price", children: ["\u20B5", totalAmount] })] })] }), _jsxs("div", { className: "checkout-form", children: [_jsx("h2", { children: "Billing & Delivery Information" }), _jsxs("form", { onSubmit: handleSubmit, children: [_jsxs("div", { className: "form-group", children: [_jsx("label", { htmlFor: "fullName", children: "Full Name *" }), _jsx("input", { type: "text", id: "fullName", value: fullName, onChange: (e) => setFullName(e.target.value), placeholder: "Enter your full name", disabled: isProcessing })] }), _jsxs("div", { className: "form-group", children: [_jsx("label", { htmlFor: "email", children: "Email Address *" }), _jsx("input", { type: "email", id: "email", value: email, onChange: (e) => setEmail(e.target.value), placeholder: "Enter your email", disabled: isProcessing })] }), _jsxs("div", { className: "form-group", children: [_jsx("label", { htmlFor: "address", children: "Delivery Address *" }), _jsx("textarea", { id: "address", value: address, onChange: (e) => setAddress(e.target.value), placeholder: "Enter your delivery address", rows: 3, disabled: isProcessing })] }), _jsx("h3", { className: "payment-title", children: "Payment Method" }), _jsx("div", { className: "payment-methods", children: _jsxs("label", { className: "payment-option", children: [_jsx("input", { type: "radio", name: "paymentMethod", value: "mtn", checked: paymentMethod === 'mtn', onChange: (e) => setPaymentMethod(e.target.value), disabled: isProcessing }), _jsxs("div", { className: "payment-info", children: [_jsx("span", { className: "method-name", children: "MTN Mobile Money" }), _jsx("span", { className: "method-desc", children: "Pay using MTN Mobile Money Ghana" })] })] }) }), _jsxs("div", { className: "form-group", children: [_jsx("label", { htmlFor: "phoneNumber", children: "MTN Mobile Money Phone Number *" }), _jsx("input", { type: "tel", id: "phoneNumber", value: phoneNumber, onChange: (e) => setPhoneNumber(e.target.value.replace(/\D/g, '')), placeholder: "024XXXXXXX (10 digits)", maxLength: 10, disabled: isProcessing }), _jsx("small", { children: "Enter your MTN phone number (10 digits)" })] }), message && (_jsx("div", { className: `message ${message.includes('✓') ? 'success' : 'error'}`, children: message })), _jsxs("div", { className: "form-actions", children: [_jsx("button", { type: "button", className: "btn-cancel", onClick: onBack, disabled: isProcessing, children: "Cancel" }), _jsx("button", { type: "submit", className: "btn-pay", disabled: isProcessing, children: isProcessing ? 'Processing...' : `Pay ₵${totalAmount}` })] })] })] })] })] }) }));
}

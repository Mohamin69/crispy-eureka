import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import './PaymentModal.css';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
const BUSINESS_MOMO_NUMBER = '0557255260';
export default function PaymentModal({ isOpen, onClose, cartItems, totalAmount, }) {
    const [step, setStep] = useState('input');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [error, setError] = useState('');
    const handlePhoneChange = (e) => {
        const value = e.target.value.replace(/\D/g, '');
        setPhoneNumber(value.slice(0, 10));
        setError('');
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        if (!phoneNumber) {
            setError('Please enter your MTN mobile money number');
            return;
        }
        if (phoneNumber.length !== 10) {
            setError('Please enter a valid 10-digit MTN number');
            return;
        }
        if (!phoneNumber.startsWith('05')) {
            setError('MTN numbers in Ghana start with 05');
            return;
        }
        setStep('processing');
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
            await new Promise((resolve) => setTimeout(resolve, 2000));
            // If using a real USSD gateway, the actual payment prompt would appear on the user's phone
            // They would dial the USSD code (usually *170#) or receive an automated prompt
            setStep('success');
            // Auto-close after 5 seconds
            setTimeout(() => {
                onClose();
                setStep('input');
                setPhoneNumber('');
            }, 5000);
        }
        catch (err) {
            setError('Payment processing failed. Please try again.');
            setStep('input');
        }
    };
    if (!isOpen)
        return null;
    return (_jsx(AnimatePresence, { children: isOpen && (_jsx(motion.div, { className: "payment-modal-overlay", onClick: (e) => {
                if (e.target === e.currentTarget && step === 'input')
                    onClose();
            }, initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: { duration: 0.3 }, children: _jsxs(motion.div, { className: "payment-modal", initial: { scale: 0.8, opacity: 0 }, animate: { scale: 1, opacity: 1 }, exit: { scale: 0.8, opacity: 0 }, transition: { type: 'spring', damping: 20, stiffness: 300 }, children: [step === 'input' && (_jsxs(_Fragment, { children: [_jsxs("div", { className: "modal-header", children: [_jsx("h2", { children: "MTN Mobile Money Payment" }), _jsx("button", { className: "close-btn", onClick: onClose, children: "\u2715" })] }), _jsxs("div", { className: "modal-body", children: [_jsxs("div", { className: "payment-info", children: [_jsxs("div", { className: "info-item", children: [_jsx("span", { className: "label", children: "Total Amount" }), _jsxs("span", { className: "value", children: ["\u20B5", totalAmount] })] }), _jsxs("div", { className: "info-item", children: [_jsx("span", { className: "label", children: "Payment To" }), _jsx("span", { className: "value", children: BUSINESS_MOMO_NUMBER })] }), _jsxs("div", { className: "info-item", children: [_jsx("span", { className: "label", children: "Items" }), _jsxs("span", { className: "value", children: [cartItems.length, " item(s)"] })] })] }), _jsxs("form", { onSubmit: handleSubmit, children: [_jsxs("div", { className: "form-group", children: [_jsx("label", { htmlFor: "mtnNumber", children: "Your MTN Mobile Money Number" }), _jsx("input", { type: "tel", id: "mtnNumber", value: phoneNumber, onChange: handlePhoneChange, placeholder: "024XXXXXXX", maxLength: 10, autoFocus: true }), _jsx("small", { children: "Enter your 10-digit MTN number (e.g., 0241234567)" })] }), error && _jsx("div", { className: "error-message", children: error }), _jsxs("div", { className: "instructions", children: [_jsx("h4", { children: "\uD83D\uDCF1 How it works:" }), _jsxs("ol", { children: [_jsx("li", { children: "Enter your MTN Mobile Money number above" }), _jsx("li", { children: "You'll receive a prompt on your phone to enter your MOMO PIN" }), _jsxs("li", { children: ["Your payment will be sent to ", _jsx("strong", { children: BUSINESS_MOMO_NUMBER })] }), _jsx("li", { children: "Confirm the payment on your phone" })] })] }), _jsxs("div", { className: "modal-actions", children: [_jsx("button", { type: "button", className: "btn-cancel", onClick: onClose, children: "Cancel" }), _jsx("button", { type: "submit", className: "btn-confirm", children: "Confirm Payment" })] })] })] })] })), step === 'processing' && (_jsxs("div", { className: "modal-center", children: [_jsx("div", { className: "spinner" }), _jsx("h2", { children: "Processing Payment" }), _jsxs("p", { children: ["Sending payment request to ", phoneNumber, "..."] }), _jsx("p", { className: "small", children: "Please wait for the MOMO prompt on your phone" })] })), step === 'success' && (_jsxs("div", { className: "modal-center success", children: [_jsx("div", { className: "success-icon", children: "\u2713" }), _jsx("h2", { children: "Payment Request Sent!" }), _jsxs("div", { className: "success-details", children: [_jsx("p", { children: "A payment prompt has been sent to:" }), _jsx("p", { className: "phone-number", children: phoneNumber }), _jsxs("p", { className: "instruction", children: ["Please check your phone. You should receive a payment prompt asking you to enter your MOMO PIN to send \u20B5", totalAmount, " to ", _jsx("strong", { children: BUSINESS_MOMO_NUMBER })] }), _jsxs("p", { className: "note", children: [_jsx("strong", { children: "Note:" }), " This demo is in test mode. For real payments, integrate with MTN Mobile Money API. See PAYMENT_INTEGRATION_GUIDE.md for details."] })] }), _jsx("p", { className: "auto-close", children: "Closing in a few seconds..." })] }))] }) })) }));
}

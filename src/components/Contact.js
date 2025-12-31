import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import './Contact.css';
export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };
    return (_jsx("section", { className: "contact", id: "contact", children: _jsxs("div", { className: "contact-container", children: [_jsx("h2", { children: "Get In Touch" }), _jsx("p", { className: "contact-subtitle", children: "Have questions? We would love to hear from you" }), _jsxs("div", { className: "contact-content", children: [_jsxs("div", { className: "contact-info", children: [_jsxs("div", { className: "info-item", children: [_jsx("h4", { children: "\uD83D\uDCCD Address" }), _jsx("p", { children: "Zogbeli, Tamale, Ghana" })] }), _jsxs("div", { className: "info-item", children: [_jsx("h4", { children: "\uD83D\uDCDE Phone" }), _jsx("p", { children: "0596914663" })] }), _jsxs("div", { className: "info-item", children: [_jsx("h4", { children: "\u2709\uFE0F Email" }), _jsx("p", { children: "support@stepstyle.com" })] }), _jsxs("div", { className: "info-item", children: [_jsx("h4", { children: "\uD83D\uDD50 Hours" }), _jsx("p", { children: "Mon - Fri: 9AM - 6PM EST" }), _jsx("p", { children: "Sat - Sun: 10AM - 4PM EST" })] })] }), _jsxs("form", { className: "contact-form", onSubmit: handleSubmit, children: [_jsx("input", { type: "text", name: "name", placeholder: "Your Name", value: formData.name, onChange: handleChange, required: true }), _jsx("input", { type: "email", name: "email", placeholder: "Your Email", value: formData.email, onChange: handleChange, required: true }), _jsx("input", { type: "text", name: "subject", placeholder: "Subject", value: formData.subject, onChange: handleChange, required: true }), _jsx("textarea", { name: "message", placeholder: "Your Message", rows: 5, value: formData.message, onChange: handleChange, required: true }), _jsx("button", { type: "submit", className: "submit-btn", children: "Send Message" })] })] })] }) }));
}

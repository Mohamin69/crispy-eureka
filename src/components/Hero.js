import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import './Hero.css';
import Carousel from './Carousel';
export default function Hero() {
    return (_jsxs("section", { className: "hero", id: "home", children: [_jsxs(motion.div, { className: "hero-content", initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, ease: "easeOut" }, children: [_jsx(motion.h2, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.2 }, children: "Step Into Style" }), _jsx(motion.p, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.4 }, children: "Premium Footwear for Every Occasion" }), _jsx(motion.button, { className: "cta-btn", initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.5, delay: 0.6 }, whileHover: { scale: 1.05, transition: { duration: 0.2 } }, whileTap: { scale: 0.95 }, children: "Shop Now" })] }), _jsx(motion.div, { className: "hero-image", initial: { opacity: 0, x: 100 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.8, delay: 0.3 }, children: _jsx(Carousel, {}) })] }));
}

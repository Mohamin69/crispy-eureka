import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './Products.css';
import { motion } from 'framer-motion';
const products = [
    {
        id: 1,
        name: 'Air Runner',
        category: 'Athletic',
        price: 129.99,
        image: '/shoes/alexander-rotker-l8p1aWZqHvE-unsplash.jpg',
    },
    {
        id: 2,
        name: 'Urban Classic',
        category: 'Casual',
        price: 89.99,
        image: '/shoes/felirbe-6zO5VKogoZE-unsplash.jpg',
    },
    {
        id: 3,
        name: 'Trail Explorer',
        category: 'Hiking',
        price: 149.99,
        image: '/shoes/irene-kredenets-dwKiHoqqxk8-unsplash.jpg',
    },
    {
        id: 4,
        name: 'Beach Vibes',
        category: 'Casual',
        price: 49.99,
        image: '/shoes/luis-felipe-lins-LG88A2XgIXY-unsplash.jpg',
    },
    {
        id: 5,
        name: 'Luxury Slip-On',
        category: 'Formal',
        price: 159.99,
        image: '/shoes/malvestida-DMl5gG0yWWY-unsplash.jpg',
    },
    {
        id: 6,
        name: 'Performance Pro',
        category: 'Sports',
        price: 189.99,
        image: '/shoes/maxim-hopman-8cT5ja0P_N4-unsplash.jpg',
    },
];
export default function Products() {
    return (_jsx("section", { className: "products", id: "products", children: _jsxs("div", { className: "products-container", children: [_jsx("h2", { children: "Our Collections" }), _jsx("p", { className: "subtitle", children: "Discover our premium selection of shoes for every lifestyle" }), _jsx("div", { className: "products-grid", children: products.map((product, index) => (_jsxs(motion.div, { className: "product-card", initial: { opacity: 0, scale: 0.8 }, whileInView: { opacity: 1, scale: 1 }, viewport: { once: true, amount: 0.2 }, transition: {
                            duration: 0.5,
                            delay: index * 0.1,
                            ease: "easeOut"
                        }, whileHover: {
                            y: -10,
                            boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                            transition: { duration: 0.3 }
                        }, children: [_jsx("div", { className: "product-image", children: _jsx(motion.img, { src: product.image, alt: product.name, whileHover: { scale: 1.1 }, transition: { duration: 0.4 } }) }), _jsxs("div", { className: "product-info", children: [_jsx("h3", { children: product.name }), _jsx("p", { className: "category", children: product.category }), _jsxs("div", { className: "product-footer", children: [_jsxs("span", { className: "price", children: ["\u20B5", product.price] }), _jsx(motion.button, { className: "add-btn", whileHover: { scale: 1.1 }, whileTap: { scale: 0.9 }, children: "Add to Cart" })] })] })] }, product.id))) })] }) }));
}

import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './ProductsPage.css';
import { useState } from 'react';
import { motion } from 'framer-motion';
const allProducts = [
    {
        id: 1,
        name: 'Air Runner',
        category: 'Athletic',
        price: 649.99,
        image: '/shoes/alexander-rotker-l8p1aWZqHvE-unsplash.jpg',
        description: 'Premium athletic running shoes with advanced cushioning technology',
    },
    {
        id: 2,
        name: 'Urban Classic',
        category: 'Casual',
        price: 449.99,
        image: '/shoes/felirbe-6zO5VKogoZE-unsplash.jpg',
        description: 'Stylish everyday casual shoes perfect for urban lifestyle',
    },
    {
        id: 3,
        name: 'Trail Explorer',
        category: 'Hiking',
        price: 749.99,
        image: '/shoes/irene-kredenets-dwKiHoqqxk8-unsplash.jpg',
        description: 'Durable hiking boots designed for outdoor adventures',
    },
    {
        id: 4,
        name: 'Beach Vibes',
        category: 'Casual',
        price: 249.99,
        image: '/shoes/luis-felipe-lins-LG88A2XgIXY-unsplash.jpg',
        description: 'Comfortable summer sandals with elegant design',
    },
    {
        id: 5,
        name: 'Luxury Slip-On',
        category: 'Formal',
        price: 799.99,
        image: '/shoes/malvestida-DMl5gG0yWWY-unsplash.jpg',
        description: 'Sophisticated formal shoes for professional occasions',
    },
    {
        id: 6,
        name: 'Performance Pro',
        category: 'Sports',
        price: 949.99,
        image: '/shoes/maxim-hopman-8cT5ja0P_N4-unsplash.jpg',
        description: 'High-performance sports shoes with latest technology',
    },
    {
        id: 7,
        name: 'Street Style',
        category: 'Casual',
        price: 549.99,
        image: '/shoes/mojtaba-fahiminia-CQzCMx_wvk4-unsplash.jpg',
        description: 'Modern street style sneakers for fashion-forward individuals',
    },
    {
        id: 8,
        name: 'Comfort Walker',
        category: 'Casual',
        price: 399.99,
        image: '/shoes/nathan-dumlao-qxcQG21m_qE-unsplash.jpg',
        description: 'Comfortable everyday shoes with orthopedic support',
    },
    {
        id: 9,
        name: 'Elite Runner',
        category: 'Athletic',
        price: 849.99,
        image: '/shoes/omar-prestwich-jLEGurepDco-unsplash.jpg',
        description: 'Professional running shoes for serious athletes',
    },
    {
        id: 10,
        name: 'Elegant Evening',
        category: 'Formal',
        price: 899.99,
        image: '/shoes/usama-akram-kP6knT7tjn4-unsplash.jpg',
        description: 'Premium formal shoes for evening events',
    },
    {
        id: 11,
        name: 'Adventure Boots',
        category: 'Hiking',
        price: 799.99,
        image: '/shoes/xavier-teo-SxAXphIPWeg-unsplash.jpg',
        description: 'Rugged boots perfect for outdoor exploration',
    },
];
export default function ProductsPage({ onAddToCart }) {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const categories = ['All', 'Athletic', 'Casual', 'Hiking', 'Formal', 'Sports'];
    const filteredProducts = selectedCategory === 'All'
        ? allProducts
        : allProducts.filter((p) => p.category === selectedCategory);
    return (_jsxs("div", { className: "products-page", children: [_jsxs("div", { className: "products-header", children: [_jsx("h1", { children: "Our Complete Collection" }), _jsx("p", { children: "Discover our premium selection of shoes for every lifestyle and occasion" })] }), _jsxs("div", { className: "products-page-container", children: [_jsx("div", { className: "category-filters", children: categories.map((category) => (_jsx("button", { className: `filter-btn ${selectedCategory === category ? 'active' : ''}`, onClick: () => setSelectedCategory(category), children: category }, category))) }), _jsx("div", { className: "products-showcase-grid", children: filteredProducts.map((product, index) => (_jsxs(motion.div, { className: "product-showcase-card", initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0 }, transition: {
                                duration: 0.5,
                                delay: index * 0.1,
                                ease: "easeOut"
                            }, whileHover: { y: -10, transition: { duration: 0.3 } }, children: [_jsxs("div", { className: "showcase-image-container", children: [_jsx("img", { src: product.image, alt: product.name }), _jsx("div", { className: "showcase-overlay", children: _jsx(motion.button, { className: "quick-view-btn", whileHover: { scale: 1.1 }, whileTap: { scale: 0.95 }, children: "Quick View" }) })] }), _jsxs("div", { className: "showcase-info", children: [_jsx("h3", { children: product.name }), _jsx("p", { className: "showcase-category", children: product.category }), _jsx("p", { className: "showcase-description", children: product.description }), _jsxs("div", { className: "showcase-footer", children: [_jsxs("span", { className: "showcase-price", children: ["\u20B5", product.price] }), _jsx(motion.button, { className: "add-to-cart-btn", onClick: () => onAddToCart(product.id, product.name, product.price), whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, children: "Add to Cart" })] })] })] }, product.id))) }), filteredProducts.length === 0 && (_jsx("div", { className: "no-products", children: _jsx("p", { children: "No products found in this category" }) }))] })] }));
}

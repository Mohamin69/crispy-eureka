import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import './Carousel.css';
const carouselImages = [
    { id: 1, src: '/shoes/alexander-rotker-l8p1aWZqHvE-unsplash.jpg', alt: 'Premium Shoe' },
    { id: 2, src: '/shoes/felirbe-6zO5VKogoZE-unsplash.jpg', alt: 'Casual Shoe' },
    { id: 3, src: '/shoes/irene-kredenets-dwKiHoqqxk8-unsplash.jpg', alt: 'Athletic Shoe' },
    { id: 4, src: '/shoes/luis-felipe-lins-LG88A2XgIXY-unsplash.jpg', alt: 'Stylish Shoe' },
    { id: 5, src: '/shoes/malvestida-DMl5gG0yWWY-unsplash.jpg', alt: 'Fashion Shoe' },
];
export default function Carousel() {
    const [currentSlide, setCurrentSlide] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);
    const goToSlide = (index) => {
        setCurrentSlide(index);
    };
    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
    };
    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    };
    return (_jsxs("div", { className: "carousel", children: [_jsx("div", { className: "carousel-container", children: carouselImages.map((image, index) => (_jsx("div", { className: `carousel-slide ${index === currentSlide ? 'active' : ''}`, children: _jsx("img", { src: image.src, alt: image.alt }) }, image.id))) }), _jsx("button", { className: "carousel-btn carousel-btn-prev", onClick: prevSlide, children: "\u276E" }), _jsx("button", { className: "carousel-btn carousel-btn-next", onClick: nextSlide, children: "\u276F" }), _jsx("div", { className: "carousel-dots", children: carouselImages.map((_, index) => (_jsx("button", { className: `dot ${index === currentSlide ? 'active' : ''}`, onClick: () => goToSlide(index) }, index))) })] }));
}

import { useState, useEffect } from 'react'
import './Carousel.css'

interface CarouselImage {
  id: number
  src: string
  alt: string
}

const carouselImages: CarouselImage[] = [
  { id: 1, src: '/shoes/alexander-rotker-l8p1aWZqHvE-unsplash.jpg', alt: 'Premium Shoe' },
  { id: 2, src: '/shoes/felirbe-6zO5VKogoZE-unsplash.jpg', alt: 'Casual Shoe' },
  { id: 3, src: '/shoes/irene-kredenets-dwKiHoqqxk8-unsplash.jpg', alt: 'Athletic Shoe' },
  { id: 4, src: '/shoes/luis-felipe-lins-LG88A2XgIXY-unsplash.jpg', alt: 'Stylish Shoe' },
  { id: 5, src: '/shoes/malvestida-DMl5gG0yWWY-unsplash.jpg', alt: 'Fashion Shoe' },
]

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
  }

  return (
    <div className="carousel">
      <div className="carousel-container">
        {carouselImages.map((image, index) => (
          <div
            key={image.id}
            className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
          >
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>

      <button className="carousel-btn carousel-btn-prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="carousel-btn carousel-btn-next" onClick={nextSlide}>
        &#10095;
      </button>

      <div className="carousel-dots">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}

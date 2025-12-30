import './About.css'

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-content">
          <h2>About StepStyle</h2>
          <p>
            Since 2015, StepStyle has been committed to providing premium
            footwear that combines comfort, style, and durability. Our carefully
            curated collections feature shoes for every occasion, from professional
            settings to adventurous outdoor experiences.
          </p>
          <div className="features">
            <div className="feature">
              <h4>✓ Premium Quality</h4>
              <p>Handpicked from top manufacturers worldwide</p>
            </div>
            <div className="feature">
              <h4>✓ Free Shipping</h4>
              <p>On all orders over $75</p>
            </div>
            <div className="feature">
              <h4>✓ 30-Day Returns</h4>
              <p>Hassle-free returns and exchanges</p>
            </div>
            <div className="feature">
              <h4>✓ Expert Support</h4>
              <p>Dedicated customer service team</p>
            </div>
          </div>
        </div>
        <div className="about-image">
          <div className="image-placeholder">
            <span>🏆 Award-Winning Collection</span>
          </div>
        </div>
      </div>
    </section>
  )
}

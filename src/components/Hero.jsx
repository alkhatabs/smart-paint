import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
  const [hover, setHover] = useState(false)
  const navigate = useNavigate()
  const heroBackgroundImage = `${import.meta.env.BASE_URL}images/warranty_smart_quality_painting.jpg`

  return (
    <section id="home" className="section hero">
      <div className="hero-badge fade-up">
        <span>✨</span> Innovative Smart Paint Technology
      </div>
      
      <h1 className="fade-up delay-1">
        Smart Paint
      </h1>
      
      <p className="fade-up delay-2">
        Protect your home intelligently
      </p>
      
      <div className="fade-up delay-3" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <button 
          className="btn btn-primary"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          style={{ transform: hover ? 'translateY(-2px)' : 'none' }}
          onClick={() => navigate('/products')}
        >
          Explore Products
        </button>
        <button 
          className="btn btn-ghost"
          onClick={() => navigate('/contact')}
        >
          Contact Us
        </button>
      </div>

      <div
        className="hero-bg fade-up"
        style={{
          marginTop: '3rem',
          padding: '3rem 2rem',
          backgroundImage: `url(${heroBackgroundImage})`
        }}
      >
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', marginBottom: '1rem' }}>
            Inspired by Omani Nature, Enhanced by Technology
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
            Our formulations draw inspiration from Omani nature, relying on authentic Omani frankincense 
            known since ancient times for its effective properties.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '2rem', flexWrap: 'wrap' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🌿</div>
              <div style={{ fontWeight: '600' }}>Natural Ingredients</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🛡️</div>
              <div style={{ fontWeight: '600' }}>Insect Protection</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>💎</div>
              <div style={{ fontWeight: '600' }}>Long Lasting</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🌍</div>
              <div style={{ fontWeight: '600' }}>Eco Friendly</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
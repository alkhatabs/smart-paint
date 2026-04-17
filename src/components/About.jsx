const About = () => {
  return (
    <section id="about" className="section">
      <div className="fade-up" style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginBottom: '1rem' }}>
          About Us
        </h2>
      </div>

      <div className="card fade-up delay-1" style={{ maxWidth: '980px', margin: '0 auto' }}>
        <p style={{ color: 'var(--text-muted)', marginBottom: '1.1rem' }}>
          We are a brand specialized in developing smart paint that combines beauty and protection, giving you a refined, clean, and insect-free environment. Our formulations are inspired by the Omani environment, and we rely on authentic Omani frankincense, known for its effective properties since ancient times, to deliver a product that blends tradition with modern technology.
        </p>
        <p style={{ color: 'var(--text-muted)', marginBottom: '1.1rem' }}>
          We believe that paint is no longer just a color, but a complete experience that enhances comfort and quality of life. We are committed to providing solutions that combine elegance, safety, and long-lasting performance.
        </p>
        <p style={{ color: 'var(--text-muted)' }}>
          Our goal is to be your first choice for a cleaner and more comfortable environment, with a touch that blends heritage and innovation.
        </p>
      </div>
    </section>
  )
}

export default About
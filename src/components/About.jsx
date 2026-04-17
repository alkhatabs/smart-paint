import { useState } from 'react'

const About = () => {
  const [activeTab, setActiveTab] = useState('mission')

  return (
    <section id="about" className="section">
      <div className="fade-up" style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginBottom: '1rem' }}>
          Who We Are
        </h2>
        <p style={{ color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto' }}>
          We believe that paint is no longer just a color, but a complete experience that enhances 
          comfort and quality of life.
        </p>
      </div>

      <div className="card fade-up delay-1" style={{ marginBottom: '2rem' }}>
        <div className="tabs" style={{ marginBottom: '1.5rem' }}>
          <div 
            className={`tab ${activeTab === 'mission' ? 'active' : ''}`}
            onClick={() => setActiveTab('mission')}
          >
            Our Mission
          </div>
          <div 
            className={`tab ${activeTab === 'vision' ? 'active' : ''}`}
            onClick={() => setActiveTab('vision')}
          >
            Our Vision
          </div>
          <div 
            className={`tab ${activeTab === 'values' ? 'active' : ''}`}
            onClick={() => setActiveTab('values')}
          >
            Our Values
          </div>
        </div>

        <div style={{ minHeight: '200px' }}>
          {activeTab === 'mission' && (
            <div>
              <h3 style={{ marginBottom: '1rem' }}>Combining Heritage with Innovation</h3>
              <p style={{ marginBottom: '1rem', color: 'var(--text-muted)' }}>
                We are committed to providing solutions that combine elegance, safety, and long-lasting 
                performance. Our goal is to be your first choice for a purer and more comfortable 
                environment, with a touch that combines heritage and innovation.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1.5rem' }}>
                <div style={{ 
                  width: '60px', 
                  height: '60px', 
                  borderRadius: 'var(--radius)',
                  backgroundImage: 'url(./images/frankincense_vs_myrrh_what_s_the_difference_which_.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}></div>
                <div>
                  <div style={{ fontWeight: '600' }}>Omani Frankincense</div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                    Authentic Omani frankincense known since ancient times for its effective properties
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'vision' && (
            <div>
              <h3 style={{ marginBottom: '1rem' }}>Redefining Home Protection</h3>
              <p style={{ marginBottom: '1rem', color: 'var(--text-muted)' }}>
                We envision a world where every home is protected intelligently, where paint serves 
                not just as decoration but as an active shield against environmental challenges while 
                maintaining aesthetic beauty.
              </p>
              <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-muted)' }}>
                <li>Smart protection integrated into everyday surfaces</li>
                <li>Harmony between technology and natural ingredients</li>
                <li>Sustainable solutions for modern living</li>
                <li>Enhanced quality of life through intelligent design</li>
              </ul>
            </div>
          )}

          {activeTab === 'values' && (
            <div>
              <h3 style={{ marginBottom: '1rem' }}>Our Core Values</h3>
              <div className="grid grid-3" style={{ marginTop: '1.5rem' }}>
                <div className="card" style={{ textAlign: 'center', padding: '1rem' }}>
                  <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>🌿</div>
                  <div style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Natural</div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                    Inspired by Omani nature and traditional wisdom
                  </div>
                </div>
                <div className="card" style={{ textAlign: 'center', padding: '1rem' }}>
                  <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>💡</div>
                  <div style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Innovative</div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                    Combining heritage with cutting-edge technology
                  </div>
                </div>
                <div className="card" style={{ textAlign: 'center', padding: '1rem' }}>
                  <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>🤝</div>
                  <div style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Trustworthy</div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                    Committed to safety, quality, and customer satisfaction
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="fade-up delay-2" style={{ textAlign: 'center', marginTop: '3rem' }}>
        <div className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h3 style={{ marginBottom: '1rem' }}>Why Choose Smart Paint?</h3>
          <div className="grid grid-2" style={{ marginTop: '1.5rem' }}>
            <div style={{ textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <div style={{ 
                  width: '32px', 
                  height: '32px', 
                  borderRadius: 'var(--radius-sm)',
                  background: 'rgba(109,158,255,.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent)'
                }}>✓</div>
                <div>Effective insect protection</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <div style={{ 
                  width: '32px', 
                  height: '32px', 
                  borderRadius: 'var(--radius-sm)',
                  background: 'rgba(109,158,255,.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent)'
                }}>✓</div>
                <div>Safe for families and children</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ 
                  width: '32px', 
                  height: '32px', 
                  borderRadius: 'var(--radius-sm)',
                  background: 'rgba(109,158,255,.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent)'
                }}>✓</div>
                <div>Environmentally friendly</div>
              </div>
            </div>
            <div style={{ textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <div style={{ 
                  width: '32px', 
                  height: '32px', 
                  borderRadius: 'var(--radius-sm)',
                  background: 'rgba(109,158,255,.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent)'
                }}>✓</div>
                <div>Long-lasting durability</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <div style={{ 
                  width: '32px', 
                  height: '32px', 
                  borderRadius: 'var(--radius-sm)',
                  background: 'rgba(109,158,255,.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent)'
                }}>✓</div>
                <div>Beautiful aesthetic finish</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ 
                  width: '32px', 
                  height: '32px', 
                  borderRadius: 'var(--radius-sm)',
                  background: 'rgba(109,158,255,.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent)'
                }}>✓</div>
                <div>Enhanced with Omani frankincense</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
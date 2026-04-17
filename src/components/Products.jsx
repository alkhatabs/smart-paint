import { useState } from 'react'

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null)

  const products = [
    {
      id: 1,
      name: "Interior Paint",
      description: "An innovative paint that provides effective protection against insects inside the home, with a safe, low-odor formula enriched with Omani frankincense extract to create a clean and comfortable atmosphere. Ideal for bedrooms and living rooms.",
      features: [
        "Enhanced with Omani frankincense extract",
        "Safe for bedrooms and living rooms",
        "Pure and comfortable atmospheres",
        "No strong chemical odors"
      ],
      icon: "🏠",
      color: "#6d9eff"
    },
    {
      id: 2,
      name: "Exterior Paint",
      description: "A weather-resistant paint designed for Gulf conditions, protecting your home’s walls from insects and heat with long-lasting durability. Enhanced with natural Omani frankincense properties for added effectiveness.",
      features: [
        "Resistant to Gulf climate conditions",
        "Protects from insects and heat",
        "Long-lasting durability",
        "Enhanced with natural frankincense properties"
      ],
      icon: "🌞",
      color: "#fbbf24"
    },
    {
      id: 3,
      name: "Natural Paint",
      description: "A plant-based formula made with natural oils inspired by the Omani environment. Includes Omani frankincense to help repel insects in a safe and eco-friendly way. Suitable for families and children.",
      features: [
        "100% plant-based formulation",
        "Safe for families and children",
        "Environmentally friendly",
        "Inspired by Omani nature"
      ],
      icon: "🌿",
      color: "#4ade80"
    },
    {
      id: 4,
      name: "Anti-Mosquito Paint",
      description: "An ideal solution to eliminate mosquitoes. Contains active ingredients from Omani frankincense, providing comfort and peaceful sleep without disturbance, with a gentle natural touch.",
      features: [
        "Effective mosquito protection",
        "Provides peaceful sleep",
        "Pleasant natural touch",
        "No disturbance or strong odors"
      ],
      icon: "🦟",
      color: "#f87171"
    },
    {
      id: 5,
      name: "Commercial Paint",
      description: "Designed for restaurants and warehouses, offering strong and long-lasting protection in environments with high insect exposure. Enriched with a professional formula that includes Omani frankincense to enhance efficiency and performance.",
      features: [
        "Strong protection for commercial spaces",
        "Long-lasting in high-exposure environments",
        "Professional formulation",
        "Enhanced efficiency and performance"
      ],
      icon: "🏢",
      color: "#8b5cf6"
    }
  ]

  return (
    <section id="products" className="section">
      <div className="fade-up" style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginBottom: '1rem' }}>
          Our Products
        </h2>
        <p style={{ color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto' }}>
          Discover our range of smart paint solutions that combine beauty, protection, and innovation.
        </p>
      </div>

      <div className="grid grid-3 fade-up delay-1">
        {products.map((product, index) => (
          <div 
            key={product.id}
            className={`card product-card ${selectedProduct === product.id ? 'selected' : ''}`}
            onClick={() => setSelectedProduct(product.id === selectedProduct ? null : product.id)}
            style={{ 
              cursor: 'pointer',
              borderColor: selectedProduct === product.id ? product.color : 'var(--border)',
              borderWidth: selectedProduct === product.id ? '2px' : '1px'
            }}
          >
            <div className="product-icon" style={{ background: `${product.color}20` }}>
              <span style={{ fontSize: '1.5rem' }}>{product.icon}</span>
            </div>
            
            <h3 style={{ marginBottom: '0.75rem', fontSize: '1.25rem' }}>{product.name}</h3>
            
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', flexGrow: 1 }}>
              {product.description}
            </p>

            <div className="product-features">
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {product.features.slice(0, 3).map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>

            <button 
              className="btn btn-ghost"
              style={{ 
                marginTop: '1rem',
                width: '100%',
                fontSize: '0.85rem'
              }}
              onClick={(e) => {
                e.stopPropagation()
                // In a real app, this would open a modal or navigate to product page
                alert(`Learn more about ${product.name}`)
              }}
            >
              Learn More
            </button>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className="fade-up" style={{ marginTop: '2rem' }}>
          <div className="card" style={{ 
            borderLeft: `4px solid ${products.find(p => p.id === selectedProduct)?.color}`,
            padding: '1.5rem'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1.5rem' }}>
                {products.find(p => p.id === selectedProduct)?.name} Details
              </h3>
              <button 
                className="btn btn-ghost"
                onClick={() => setSelectedProduct(null)}
                style={{ fontSize: '0.8rem', padding: '0.4rem 0.8rem' }}
              >
                Close
              </button>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
              <div>
                <h4 style={{ marginBottom: '0.75rem', color: 'var(--text-muted)' }}>Key Benefits</h4>
                <ul style={{ color: 'var(--text-muted)', paddingLeft: '1.5rem' }}>
                  {products.find(p => p.id === selectedProduct)?.features.map((feature, idx) => (
                    <li key={idx} style={{ marginBottom: '0.5rem' }}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 style={{ marginBottom: '0.75rem', color: 'var(--text-muted)' }}>Recommended Use</h4>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
                  {selectedProduct === 1 && "Ideal for bedrooms, living rooms, and indoor spaces where comfort and air quality are priorities."}
                  {selectedProduct === 2 && "Perfect for exterior walls in Gulf climate regions, providing year-round protection."}
                  {selectedProduct === 3 && "Best for families with children, eco-conscious homes, and indoor spaces requiring natural solutions."}
                  {selectedProduct === 4 && "Essential for bedrooms, outdoor living areas, and regions with mosquito challenges."}
                  {selectedProduct === 5 && "Designed for commercial kitchens, restaurants, warehouses, and high-traffic areas."}
                </p>
                
                <div style={{ 
                  background: 'rgba(255,255,255,.03)', 
                  padding: '1rem', 
                  borderRadius: 'var(--radius-sm)',
                  marginTop: '1rem'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <span style={{ color: 'var(--accent)' }}>✨</span>
                    <span style={{ fontWeight: '600' }}>Enhanced with Omani Frankincense</span>
                  </div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                    All our products contain authentic Omani frankincense, known for its natural protective properties.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="fade-up delay-2" style={{ textAlign: 'center', marginTop: '3rem' }}>
        <div className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h3 style={{ marginBottom: '1rem' }}>Technical Specifications</h3>
          <div className="grid grid-2" style={{ marginTop: '1.5rem' }}>
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Coverage</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>10-12 m² per liter (2 coats)</div>
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Drying Time</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>2-4 hours touch dry, 24 hours full cure</div>
              </div>
              <div>
                <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Application</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Brush, roller, or spray</div>
              </div>
            </div>
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Protection Duration</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Up to 5 years (exterior), 3 years (interior)</div>
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Safety</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Low VOC, child and pet safe</div>
              </div>
              <div>
                <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Packaging</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>1L, 4L, 10L, and 20L containers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Products
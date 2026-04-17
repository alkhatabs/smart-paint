import { useState } from 'react'

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'products', label: 'Products' },
    { id: 'contact', label: 'Contact' },
  ]

  const scrollToSection = (sectionId) => {
    setActiveLink(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <span style={{ color: 'var(--accent)' }}>Smart</span> Paint
      </div>
      
      <div className="nav-links">
        {navItems.map((item) => (
          <a
            key={item.id}
            className={`nav-link ${activeLink === item.id ? 'active' : ''}`}
            onClick={() => scrollToSection(item.id)}
          >
            {item.label}
          </a>
        ))}
      </div>

      <button 
        className="btn btn-ghost"
        onClick={() => scrollToSection('contact')}
        style={{ fontSize: '0.85rem' }}
      >
        Get Quote
      </button>

      {/* Mobile menu button */}
      <button 
        className="btn btn-ghost"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        style={{ display: 'none' }}
      >
        ☰
      </button>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '60px',
          left: 0,
          right: 0,
          background: 'var(--bg)',
          borderBottom: '1px solid var(--border)',
          padding: '1rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem'
        }}>
          {navItems.map((item) => (
            <a
              key={item.id}
              className={`nav-link ${activeLink === item.id ? 'active' : ''}`}
              onClick={() => scrollToSection(item.id)}
              style={{ padding: '0.5rem 0' }}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar
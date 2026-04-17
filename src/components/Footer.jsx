const SocialIcon = ({ name }) => {
  if (name === 'Instagram') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17.4" cy="6.6" r="1.2" fill="currentColor" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M7 18c2 1.2 4.3 1.8 6.7 1.8 4.1 0 7.8-1.8 10.3-4.7-.7.2-1.5.3-2.3.3-2.3 0-4.3-1-5.8-2.6-2.5-.2-4.6-2-5.3-4.4-.3 0-.6.1-.9.1-1 0-2-.2-2.8-.7.3-2.8 2.7-5 5.7-5 .8 0 1.5.1 2.2.4 1.7.6 3 2 3.4 3.8.8-.5 1.9-.8 3-.8 1.4 0 2.7.4 3.8 1.2-.7-2.1-2.5-3.8-4.7-4.3-.6-2.1-2.6-3.6-4.9-3.6-2.9 0-5.2 2.3-5.2 5.2v.2C4.7 6.3 1.8 9.6 1.6 13.5c1.1 1.9 2.9 3.5 5.4 4.5z"
        fill="currentColor"
      />
    </svg>
  )
}

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const socialLinks = [
    { name: 'Instagram', handle: '@smartpaint_om', href: '#' },
    { name: 'Snapchat', handle: '@smartpaint_om', href: '#' }
  ]

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Smart Paint</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
            We are a specialized brand in developing smart paint that combines beauty and protection, 
            providing you with an elegant and clean environment free from insects.
          </p>
          <div className="footer-social-list">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="footer-social-link"
                aria-label={social.name}
              >
                <span className="footer-social-icon">
                  <SocialIcon name={social.name} />
                </span>
                <span>{social.handle}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="footer-section">
          <h4>Products</h4>
          <ul>
            <li><a href="#products">Interior Paint</a></li>
            <li><a href="#products">Exterior Paint</a></li>
            <li><a href="#products">Natural Paint</a></li>
            <li><a href="#products">Anti-Mosquito Paint</a></li>
            <li><a href="#products">Commercial Paint</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#contact">Get Quote</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Info</h4>
          <ul style={{ color: 'var(--text-muted)' }}>
            <li style={{ marginBottom: '0.75rem' }}>
              <div style={{ fontWeight: '600', fontSize: '0.9rem' }}>Location</div>
              <div style={{ fontSize: '0.85rem' }}>Sultanate of Oman – Muscat</div>
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <div style={{ fontWeight: '600', fontSize: '0.9rem' }}>Email</div>
              <div style={{ fontSize: '0.85rem' }}>info@smartpaint.om</div>
            </li>
            <li>
              <div style={{ fontWeight: '600', fontSize: '0.9rem' }}>Hours</div>
              <div style={{ fontSize: '0.85rem' }}>Sun-Thu: 9AM-6PM</div>
            </li>
          </ul>
        </div>
      </div>

      <div className="copyright">
        <div style={{ marginBottom: '0.5rem' }}>
          © {currentYear} Smart Paint. All rights reserved.
        </div>
        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
          Inspired by Omani heritage, enhanced by modern technology.
        </div>
      </div>
    </footer>
  )
}

export default Footer
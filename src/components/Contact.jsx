import { useState } from 'react'

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

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    productInterest: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validateForm()
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        productInterest: ''
      })
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 5000)
    }, 1500)
  }

  const socialMedia = [
    { name: 'Instagram', handle: '@smartpaint_om' },
    { name: 'Snapchat', handle: '@smartpaint_om' }
  ]
  const quickContactItems = ['WhatsApp', 'Email', 'Fax']

  return (
    <section id="contact" className="section contact-section">
      <div className="fade-up contact-header">
        <h2 className="contact-title">
          Contact Us
        </h2>
        <p className="contact-subtitle">
          We are happy to hear from you anytime 💫
          <br />
          Our team is ready to answer your inquiries and assist you with care.
        </p>
      </div>

      <div className="fade-up delay-1 contact-main-grid">
        {/* Contact Form */}
        <div className="card contact-card-main">
          <h3 className="contact-card-title">Send Us a Message</h3>

          <h4 className="contact-subsection-title">Contact Us</h4>
          <div className="contact-social-list" style={{ marginBottom: '1rem' }}>
            {quickContactItems.map((item) => (
              <div key={item} className="card contact-social-card">
                <div>
                  <div className="contact-social-name">{item}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="contact-hours-wrap" style={{ marginBottom: '1rem' }}>
            <div className="contact-hours-row">
              <div className="contact-hours-day">📍 Location</div>
              <div className="contact-hours-time">Sultanate of Oman – Muscat</div>
            </div>
          </div>

          <h4 className="contact-subsection-title">Follow Us</h4>
          <div className="contact-social-list" style={{ marginBottom: '1rem' }}>
            {socialMedia.map((social, index) => (
              <div
                key={index}
                className="card contact-social-card"
                onClick={() => alert(`Opening ${social.name}`)}
              >
                <span className="contact-social-icon">
                  <SocialIcon name={social.name} />
                </span>
                <div>
                  <div className="contact-social-name">{social.name}</div>
                  <div className="contact-social-handle">{social.name}: {social.handle}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="contact-hours-wrap" style={{ marginBottom: '1rem' }}>
            <div className="contact-hours-row">
              <div className="contact-hours-day">🕐 Working Hours</div>
              <div className="contact-hours-time"></div>
            </div>
            <div className="contact-hours-row">
              <div className="contact-hours-day">Sunday to Thursday</div>
              <div className="contact-hours-time">9 AM – 6 PM</div>
            </div>
            <div className="contact-hours-row">
              <div className="contact-hours-day">Friday & Saturday</div>
              <div className="contact-hours-time"></div>
            </div>
          </div>
          
          {submitSuccess && (
            <div style={{ 
              background: 'rgba(74,222,128,.15)',
              border: '1px solid rgba(74,222,128,.3)',
              color: 'var(--success)',
              padding: '1rem',
              borderRadius: 'var(--radius-sm)',
              marginBottom: '1.5rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span>✓</span>
                <div>
                  <div style={{ fontWeight: '600' }}>Message Sent Successfully!</div>
                  <div style={{ fontSize: '0.9rem' }}>
                    We'll get back to you within 24 hours.
                  </div>
                </div>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? 'error' : ''}
                placeholder="Enter your full name"
              />
              {errors.name && <div className="field-error">{errors.name}</div>}
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'error' : ''}
                  placeholder="your.email@example.com"
                />
                {errors.email && <div className="field-error">{errors.email}</div>}
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={errors.phone ? 'error' : ''}
                  placeholder="+968 XXX XXXX"
                />
                {errors.phone && <div className="field-error">{errors.phone}</div>}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="productInterest">Product Interest (Optional)</label>
              <select
                id="productInterest"
                name="productInterest"
                value={formData.productInterest}
                onChange={handleChange}
              >
                <option value="">Select a product</option>
                <option value="interior">Interior Paint</option>
                <option value="exterior">Exterior Paint</option>
                <option value="natural">Natural Paint</option>
                <option value="anti-mosquito">Anti-Mosquito Paint</option>
                <option value="commercial">Commercial Paint</option>
                <option value="all">All Products</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={errors.message ? 'error' : ''}
                placeholder="Tell us about your project or ask any questions..."
                rows="4"
              />
              {errors.message && <div className="field-error">{errors.message}</div>}
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSubmitting}
              style={{ width: '100%', marginTop: '1rem' }}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner" style={{ width: '16px', height: '16px', borderWidth: '2px' }}></span>
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>

            <div style={{ 
              marginTop: '1rem', 
              textAlign: 'center',
              fontSize: '0.8rem',
              color: 'var(--text-muted)'
            }}>
              We typically respond within 24 hours
            </div>
          </form>

          <p style={{ marginTop: '1rem', color: 'var(--text-muted)', textAlign: 'center' }}>
            Your comfort matters to us, and we are always happy to serve you 🤍
          </p>
        </div>
      </div>

    </section>
  )
}

export default Contact
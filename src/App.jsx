import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Toast from './components/Toast'
import { useToast } from './hooks/useToast'

function App() {
  const { toasts, addToast } = useToast()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false)
      addToast('Welcome to Smart Paint!', 'success')
    }, 800)
    return () => clearTimeout(timer)
  }, [addToast])

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="spinner"></div>
        <p>Loading Smart Paint...</p>
      </div>
    )
  }

  return (
    <>
      <div className="glow"></div>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <Toast toasts={toasts} />
    </>
  )
}

export default App
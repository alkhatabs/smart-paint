import { useState, useCallback } from 'react'

export function useToast() {
  const [toasts, setToasts] = useState([])

  const addToast = useCallback((msg, type = 'success') => {
    const id = Date.now()
    setToasts(t => [...t, { id, msg, type }])
    
    // Auto remove after 3 seconds
    setTimeout(() => {
      setToasts(t => t.filter(x => x.id !== id))
    }, 3000)
  }, [])

  return { toasts, addToast }
}
import { useEffect } from 'react'
import { useLocation } from 'wouter'

export function useScrollToTop() {
  const [location] = useLocation()

  useEffect(() => {
    // Scroll to top when location changes
    window.scrollTo(0, 0)
  }, [location])
}

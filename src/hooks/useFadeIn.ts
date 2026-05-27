import { useEffect, useRef, useState } from "react"

interface UseFadeInOptions {
  threshold?: number
  rootMargin?: string
}

export function useFadeIn(options: UseFadeInOptions = {}) {
  const { threshold = 0.15, rootMargin = "0px 0px -60px 0px" } = options
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(element)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return { ref, isVisible }
}

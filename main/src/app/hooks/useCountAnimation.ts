import { useEffect, useState } from "react"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function useCountAnimation(end: number, duration: number = 2) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref)
  
  useEffect(() => {
    if (!isInView) return

    let startTime: number | null = null
    const startValue = 0
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      
      setCount(Math.floor(startValue + (end - startValue) * progress))
      
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    
    requestAnimationFrame(animate)
  }, [end, duration, isInView])
  
  return { count, ref }
}

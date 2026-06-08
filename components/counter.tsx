"use client"
import { useEffect, useRef, useState } from "react"

export function Counter({ value, duration = 2000 }: { value: string; duration?: number }) {
  const [displayValue, setDisplayValue] = useState(0)
  const hasStarted = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted.current) {
          hasStarted.current = true
          const numValue = parseInt(value)
          const scrambleDuration = duration * 0.5 // 50% for scrambling
          const smoothDuration = duration * 0.5 // 50% for smooth count
          const startTime = Date.now()

          const animate = () => {
            const elapsed = Date.now() - startTime
            
            if (elapsed < scrambleDuration) {
              // Scramble phase - random numbers
              setDisplayValue(Math.floor(Math.random() * numValue))
            } else {
              // Smooth count phase
              const smoothProgress = (elapsed - scrambleDuration) / smoothDuration
              const currentValue = Math.floor(smoothProgress * numValue)
              setDisplayValue(Math.min(currentValue, numValue))
            }

            if (elapsed < duration) {
              requestAnimationFrame(animate)
            } else {
              setDisplayValue(numValue)
            }
          }

          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.5 }
    )

    const element = document.querySelector(`[data-counter="${value}"]`)
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [value, duration])

  return <span data-counter={value}>{displayValue}+</span>
}
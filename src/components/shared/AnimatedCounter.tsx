import { useEffect, useRef, useState } from "react"
import { animate, useInView, useReducedMotion } from "@/lib/motion"

interface AnimatedCounterProps {
  value: number
  prefix?: string
  suffix?: string
  className?: string
  duration?: number
}

export function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  className,
  duration = 1.2,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "0px 0px -40px 0px" })
  const reduced = useReducedMotion()
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView || reduced) return
    const controls = animate(0, value, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, value, duration, reduced])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {reduced ? value : display}
      {suffix}
    </span>
  )
}

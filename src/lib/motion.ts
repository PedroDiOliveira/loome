import type { Variants } from "motion/react"

export {
  m,
  AnimatePresence,
  LazyMotion,
  domAnimation,
  MotionConfig,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useReducedMotion,
  useInView,
  animate,
} from "motion/react"

export const springSnappy = { type: "spring", stiffness: 260, damping: 24 } as const
export const springSoft = { type: "spring", stiffness: 120, damping: 20 } as const

export const viewportOnce = { once: true, amount: 0.2, margin: "0px 0px -60px 0px" } as const

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: springSoft },
}

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0, transition: springSoft },
}

export function staggerContainer(stagger = 0.08, delayChildren = 0): Variants {
  return {
    hidden: {},
    visible: { transition: { staggerChildren: stagger, delayChildren } },
  }
}

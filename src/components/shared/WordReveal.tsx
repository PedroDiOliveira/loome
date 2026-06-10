import { Fragment } from "react"
import type { Variants } from "motion/react"
import { cn } from "@/lib/utils"
import { m, springSoft, staggerContainer, viewportOnce } from "@/lib/motion"

interface WordRevealProps {
  text: string
  accentWord?: string
  accentClassName?: string
  className?: string
  as?: "h1" | "h2" | "h3" | "p"
  delay?: number
}

const wordVariant: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: springSoft },
}

export function WordReveal({
  text,
  accentWord,
  accentClassName = "text-azure-300",
  className,
  as = "h2",
  delay = 0,
}: WordRevealProps) {
  const words = text.split(" ")
  const MTag = m[as]

  return (
    <MTag
      aria-label={text}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerContainer(0.05, delay)}
    >
      {words.map((word, i) => {
        const clean = word.replace(/[.,!?;:—]+$/, "")
        const isAccent = accentWord !== undefined && clean === accentWord
        return (
          <Fragment key={i}>
            <m.span
              aria-hidden="true"
              variants={wordVariant}
              className={cn(
                "inline-block",
                isAccent && cn("font-display italic font-normal", accentClassName)
              )}
            >
              {word}
            </m.span>
            {i < words.length - 1 ? " " : null}
          </Fragment>
        )
      })}
    </MTag>
  )
}

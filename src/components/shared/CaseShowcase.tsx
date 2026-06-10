import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import type { CaseStudy } from "@/data/cases"
import { BrowserFrame } from "@/components/shared/BrowserFrame"
import {
  m,
  AnimatePresence,
  springSnappy,
  springSoft,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "@/lib/motion"

interface CaseShowcaseProps {
  caseStudy: CaseStudy
  reverse?: boolean
}

export function CaseShowcase({ caseStudy, reverse = false }: CaseShowcaseProps) {
  const [videoOpen, setVideoOpen] = useState(false)
  const mockupRef = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: mockupRef,
    offset: ["start end", "end start"],
  })
  const mobileY = useSpring(useTransform(scrollYProgress, [0, 1], [28, -28]), springSoft)

  useEffect(() => {
    if (!videoOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setVideoOpen(false)
    }
    document.addEventListener("keydown", onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [videoOpen])

  return (
    <>
      <div
        className={cn(
          "flex flex-col lg:flex-row items-center gap-12 lg:gap-16",
          reverse && "lg:flex-row-reverse"
        )}
      >
        {/* Mockup column */}
        <div className="flex-1 w-full max-w-lg lg:max-w-none">
          <div ref={mockupRef} className="relative pb-16 pr-12">
            <BrowserFrame url={caseStudy.desktopUrl}>
              <img
                src={caseStudy.desktopImg}
                alt={`Site da ${caseStudy.clinicName} — desktop`}
                className="w-full block"
                loading="lazy"
                decoding="async"
              />
            </BrowserFrame>

            {/* Mobile mockup com parallax */}
            <m.div
              style={reduced ? undefined : { y: mobileY }}
              className="absolute bottom-0 right-0 w-[108px] md:w-[128px] rounded-2xl overflow-hidden shadow-lg border border-gray-200"
            >
              <img
                src={caseStudy.mobileImg}
                alt={`Site da ${caseStudy.clinicName} — mobile`}
                className="w-full block"
                loading="lazy"
                decoding="async"
              />
            </m.div>
          </div>

          {/* Video button */}
          {caseStudy.videoUrl && (
            <button
              onClick={() => setVideoOpen(true)}
              className="mt-4 flex items-center gap-2 text-sm font-medium text-navy-600 hover:text-navy-700 transition-colors group cursor-pointer"
            >
              <m.span
                whileHover={{ scale: 1.12 }}
                transition={springSnappy}
                className="w-8 h-8 rounded-full bg-navy-50 border border-navy-200 flex items-center justify-center group-hover:bg-navy-100 transition-colors"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                  <path d="M2 1.5l9 4.5-9 4.5V1.5z" />
                </svg>
              </m.span>
              Ver vídeo do projeto
            </button>
          )}
        </div>

        {/* Text column */}
        <div className="flex-1 text-center lg:text-left">
          <span className="text-xs font-semibold text-navy-600 uppercase tracking-widest">
            {caseStudy.segment} · {caseStudy.location}
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-950 mt-2 leading-tight">
            {caseStudy.clinicName}
          </h3>
          <p className="text-lg text-gray-700 mt-3 font-medium leading-snug">
            {caseStudy.tagline}
          </p>
          <p className="text-base text-gray-600 mt-4 leading-relaxed max-w-md mx-auto lg:mx-0">
            {caseStudy.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-6 justify-center lg:justify-start">
            {caseStudy.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium text-navy-700 bg-white border border-navy-100 shadow-card rounded-full px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Actions */}
          {caseStudy.liveUrl && (
            <div className="mt-6">
              <a
                href={caseStudy.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-navy-600 hover:text-navy-700 transition-colors underline underline-offset-4"
              >
                Ver site ao vivo →
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Video modal */}
      <AnimatePresence>
        {videoOpen && caseStudy.videoUrl && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setVideoOpen(false)}
          >
            <m.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={springSnappy}
              className="relative w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setVideoOpen(false)}
                aria-label="Fechar vídeo"
                className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M1 1l12 12M13 1L1 13" />
                </svg>
              </button>
              <video
                src={caseStudy.videoUrl}
                controls
                autoPlay
                preload="metadata"
                className="w-full rounded-xl shadow-2xl"
              />
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  )
}

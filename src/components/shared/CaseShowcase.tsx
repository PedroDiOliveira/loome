import { useState } from "react"
import { cn } from "@/lib/utils"
import type { CaseStudy } from "@/data/cases"

interface CaseShowcaseProps {
  caseStudy: CaseStudy
  reverse?: boolean
}

export function CaseShowcase({ caseStudy, reverse = false }: CaseShowcaseProps) {
  const [videoOpen, setVideoOpen] = useState(false)

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
          <div className="relative pb-16 pr-12">
            {/* Desktop mockup */}
            <div className="rounded-xl overflow-hidden shadow-md border border-gray-200 bg-white">
              <div className="flex items-center gap-1.5 px-4 py-2.5 bg-gray-100 border-b border-gray-200">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                <div className="ml-2 flex-1 max-w-[220px] bg-white rounded-md px-3 py-1 text-[10px] text-gray-400 border border-gray-200 truncate">
                  {caseStudy.desktopUrl}
                </div>
              </div>
              <img
                src={caseStudy.desktopImg}
                alt={`Site da ${caseStudy.clinicName} — desktop`}
                className="w-full block"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Mobile mockup */}
            <div className="absolute bottom-0 right-0 w-[108px] md:w-[128px] rounded-2xl overflow-hidden shadow-lg border border-gray-200">
              <img
                src={caseStudy.mobileImg}
                alt={`Site da ${caseStudy.clinicName} — mobile`}
                className="w-full block"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          {/* Video button */}
          {caseStudy.videoUrl && (
            <button
              onClick={() => setVideoOpen(true)}
              className="mt-4 flex items-center gap-2 text-sm font-medium text-navy-600 hover:text-navy-700 transition-colors group"
            >
              <span className="w-8 h-8 rounded-full bg-navy-50 border border-navy-200 flex items-center justify-center group-hover:bg-navy-100 transition-colors">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                  <path d="M2 1.5l9 4.5-9 4.5V1.5z" />
                </svg>
              </span>
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
                className="text-xs font-medium text-navy-700 bg-navy-50 border border-navy-100 rounded-full px-3 py-1"
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
      {videoOpen && caseStudy.videoUrl && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setVideoOpen(false)}
              className="absolute -top-10 right-0 text-white/70 hover:text-white text-sm font-medium transition-colors flex items-center gap-1.5"
            >
              Fechar
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M1 1l12 12M13 1L1 13" />
              </svg>
            </button>
            <video
              src={caseStudy.videoUrl}
              controls
              autoPlay
              className="w-full rounded-xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </>
  )
}

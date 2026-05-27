import type { CaseStudy } from "@/data/cases"

interface CaseCardProps {
  caseStudy: CaseStudy
}

export function CaseCard({ caseStudy }: CaseCardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="aspect-[16/10] bg-gray-100 flex items-center justify-center">
        {caseStudy.screenshotUrl ? (
          <img
            src={caseStudy.screenshotUrl}
            alt={`Site da ${caseStudy.clinicName}`}
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <span className="text-sm text-gray-400">Screenshot</span>
        )}
      </div>
      <div className="p-6">
        <p className="text-xs font-medium text-navy-600 uppercase tracking-wide">
          {caseStudy.segment}
        </p>
        <h3 className="text-lg font-semibold text-gray-900 mt-1">
          {caseStudy.clinicName}
        </h3>
        <p className="text-sm text-gray-600 mt-2">{caseStudy.description}</p>
        {caseStudy.liveUrl && (
          <a
            href={caseStudy.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-sm font-medium text-navy-600 hover:text-navy-700 transition-colors"
          >
            Ver site &rarr;
          </a>
        )}
      </div>
    </div>
  )
}

export function CaseCardPlaceholder() {
  return (
    <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center col-span-full">
      <p className="text-xl text-gray-400 font-medium">Em breve</p>
      <p className="text-sm text-gray-400 mt-2">
        Estamos preparando nossos primeiros cases.
      </p>
    </div>
  )
}

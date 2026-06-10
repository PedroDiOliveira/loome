import { Marquee } from "@/components/shared/Marquee"

const deliverables = [
  "Mobile-first",
  "SEO local",
  "WhatsApp integrado",
  "Domínio próprio",
  "Hospedagem inclusa",
  "Entrega em 5–10 dias",
  "Design sob medida",
]

export function MarqueeStrip() {
  return (
    <div className="bg-surface-dark border-y border-white/10 py-4">
      <Marquee>
        {deliverables.map((item) => (
          <span
            key={item}
            className="flex items-center text-xs font-medium uppercase tracking-widest text-navy-200/60 whitespace-nowrap"
          >
            {item}
            <span className="mx-6 text-azure-400/60" aria-hidden="true">
              ·
            </span>
          </span>
        ))}
      </Marquee>
    </div>
  )
}

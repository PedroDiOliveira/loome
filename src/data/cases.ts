import aliaDesktop from "@/assets/case-alia-ortodontia-desktop.webp"
import aliaMobile from "@/assets/case-alia-ortodontia-mobile.webp"

export interface CaseStudy {
  id: string
  clinicName: string
  segment: string
  location: string
  tagline: string
  description: string
  desktopImg: string
  mobileImg: string
  desktopUrl: string
  videoUrl?: string
  liveUrl?: string
  tags: string[]
}

export const cases: CaseStudy[] = [
  {
    id: "alia-ortodontia",
    clinicName: "Aliá Ortodontia",
    segment: "Ortodontia",
    location: "Brasília-DF",
    tagline: "Do Instagram para o site próprio — em 10 dias.",
    description:
      "A Aliá precisava de presença online profissional para converter os seguidores do Instagram em pacientes agendados. Entregamos um site mobile-first com integração direta ao WhatsApp e posicionamento local no Google.",
    desktopImg: aliaDesktop,
    mobileImg: aliaMobile,
    desktopUrl: "aliaortodontia.com.br",
    tags: ["WhatsApp direto", "SEO local", "Mobile first", "Entrega em 10 dias"],
  },
]

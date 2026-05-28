import aliaDesktop from "@/assets/case-alia-ortodontia-desktop.webp"
import aliaMobile from "@/assets/case-alia-ortodontia-mobile.webp"
import aliaVideo from "@/assets/case-alia-ortodontia-video.mp4"
import raizDesktop from "@/assets/case-raiz-implantes-desktop.webp"
import raizMobile from "@/assets/case-raiz-implantes-mobile.webp"
import raizVideo from "@/assets/case-raiz-implantes-video.mp4"

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
      "Site desenvolvido para uma clínica de ortodontia em Brasília, com foco em captação de pacientes via mobile. O projeto contempla integração direta com WhatsApp, SEO local e uma estrutura pensada para converter visitas em agendamentos.",
    desktopImg: aliaDesktop,
    mobileImg: aliaMobile,
    desktopUrl: "aliaortodontia.com.br",
    videoUrl: aliaVideo,
    tags: ["WhatsApp direto", "SEO local", "Mobile first", "Entrega em 10 dias"],
  },
  {
    id: "raiz-implantes",
    clinicName: "Raiz Implantes",
    segment: "Implantodontia",
    location: "São Paulo-SP",
    tagline: "Presença digital à altura de uma clínica especializada.",
    description:
      "Site desenvolvido para uma clínica de implantodontia em São Paulo, com foco em transmitir autoridade e facilitar o primeiro contato do paciente. O projeto contempla estrutura mobile-first, integração com WhatsApp e posicionamento local no Google.",
    desktopImg: raizDesktop,
    mobileImg: raizMobile,
    desktopUrl: "raizimplantes.com.br",
    videoUrl: raizVideo,
    tags: ["WhatsApp direto", "SEO local", "Mobile first", "Implantodontia"],
  },
]

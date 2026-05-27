export interface FAQEntry {
  id: string
  question: string
  answer: string
}

export const faqEntries: FAQEntry[] = [
  {
    id: "prazo",
    question: "Quanto tempo demora?",
    answer: "Placeholder — preencher com prazo real e detalhes do processo.",
  },
  {
    id: "trocar",
    question: "Já tenho site, vale trocar?",
    answer: "Placeholder — preencher com argumentos sobre quando vale a troca.",
  },
  {
    id: "dependencia",
    question: "Vou ficar dependente de você?",
    answer: "Placeholder — preencher explicando autonomia do cliente sobre o site.",
  },
  {
    id: "nao-gostar",
    question: "E se eu não gostar?",
    answer: "Placeholder — preencher com política de revisões e garantias.",
  },
]

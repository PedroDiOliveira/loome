export interface PricingPlan {
  id: string
  name: string
  price: string
  description: string
  features: string[]
  highlighted: boolean
  ctaText: string
  whatsappMessage: string
}

export const plans: PricingPlan[] = [
  {
    id: "essencial",
    name: "Essencial",
    price: "R$ 1.500",
    description: "O básico bem feito para sua clínica marcar presença online.",
    features: [
      "1 página profissional",
      "Formulário de contato",
      "Botão de WhatsApp",
      "Hospedagem inclusa por 1 ano",
    ],
    highlighted: false,
    ctaText: "Quero esse plano",
    whatsappMessage: "Olá! Tenho interesse no plano Essencial para minha clínica.",
  },
  {
    id: "profissional",
    name: "Profissional",
    price: "R$ 2.400",
    description: "Tudo do Essencial, mais visibilidade no Google e conteúdo otimizado.",
    features: [
      "Tudo do plano Essencial",
      "SEO local (Google da sua cidade)",
      "Google Meu Negócio otimizado",
      "2 revisões de conteúdo",
    ],
    highlighted: true,
    ctaText: "Quero esse plano",
    whatsappMessage: "Olá! Tenho interesse no plano Profissional para minha clínica.",
  },
  {
    id: "completo",
    name: "Completo",
    price: "R$ 3.800",
    description: "Solução completa para clínicas que querem se destacar de verdade.",
    features: [
      "Tudo do plano Profissional",
      "Página de equipe",
      "Página de tratamentos",
      "Integração com sistema de agendamento",
    ],
    highlighted: false,
    ctaText: "Quero esse plano",
    whatsappMessage: "Olá! Tenho interesse no plano Completo para minha clínica.",
  },
]

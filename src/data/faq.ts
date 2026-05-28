export interface FAQEntry {
  id: string
  question: string
  answer: string
}

export const faqEntries: FAQEntry[] = [
  {
    id: "prazo",
    question: "Quanto tempo demora?",
    answer:
      "De 5 a 10 dias corridos a partir do envio dos conteúdos — textos, fotos e informações da clínica. O prazo depende principalmente da agilidade na revisão. A maioria dos projetos fica pronta em menos de uma semana.",
  },
  {
    id: "trocar",
    question: "Já tenho site, vale trocar?",
    answer:
      "Depende do que você tem hoje. Se o site demora para carregar no celular, não aparece no Google ou não tem um caminho claro para o paciente entrar em contato, provavelmente vale. Posso dar uma olhada no seu site atual sem compromisso.",
  },
  {
    id: "dependencia",
    question: "Vou ficar dependente de você?",
    answer:
      "Não. Você recebe acesso completo ao site e à hospedagem. Se precisar de ajustes no futuro, posso ajudar — mas você não fica preso a nenhum contrato ou mensalidade obrigatória.",
  },
  {
    id: "nao-gostar",
    question: "E se eu não gostar?",
    answer:
      "Antes de publicar, você recebe o site para revisar e pedir ajustes. Trabalhamos em cima do seu feedback até você aprovar. Só colocamos no ar quando você estiver satisfeito.",
  },
]

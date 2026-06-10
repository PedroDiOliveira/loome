export interface IncludedItem {
  id: string
  iconKey: "mobile" | "whatsapp" | "form" | "domain" | "search" | "hosting"
  title: string
  description: string
}

export const includedItems: IncludedItem[] = [
  {
    id: "mobile",
    iconKey: "mobile",
    title: "Página otimizada para celular",
    description: "Layout responsivo que funciona perfeitamente em qualquer dispositivo.",
  },
  {
    id: "whatsapp",
    iconKey: "whatsapp",
    title: "Integração com WhatsApp",
    description: "Botão direto para o paciente iniciar conversa com a clínica.",
  },
  {
    id: "form",
    iconKey: "form",
    title: "Formulário de agendamento",
    description: "Pacientes solicitam horário direto pelo site, sem complicação.",
  },
  {
    id: "domain",
    iconKey: "domain",
    title: "Domínio próprio (.com.br)",
    description: "Endereço profissional na internet com o nome da sua clínica.",
  },
  {
    id: "seo",
    iconKey: "search",
    title: "SEO local",
    description: "Otimização para sua clínica aparecer nas buscas da sua cidade e região.",
  },
  {
    id: "hosting",
    iconKey: "hosting",
    title: "Hospedagem inclusa por 1 ano",
    description: "Site no ar sem preocupação com servidor ou configuração técnica.",
  },
]

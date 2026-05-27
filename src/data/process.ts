export interface ProcessStepData {
  id: string
  stepNumber: number
  title: string
  description: string
}

export const processSteps: ProcessStepData[] = [
  {
    id: "conversa",
    stepNumber: 1,
    title: "Conversa inicial",
    description: "15 minutos para entender sua clínica, seus diferenciais e objetivos.",
  },
  {
    id: "proposta",
    stepNumber: 2,
    title: "Proposta",
    description: "Você recebe escopo, prazo e investimento detalhados para aprovar.",
  },
  {
    id: "conteudo",
    stepNumber: 3,
    title: "Envio de conteúdo",
    description: "Você envia textos, fotos e logo. Orientamos sobre o que é necessário.",
  },
  {
    id: "versao",
    stepNumber: 4,
    title: "Primeira versão",
    description: "Em até 5 dias úteis você recebe o site pronto para revisar.",
  },
  {
    id: "publicacao",
    stepNumber: 5,
    title: "Ajustes e publicação",
    description: "Fazemos os ajustes finais e colocamos seu site no ar.",
  },
]

import { useState } from "react"
import { SectionWrapper } from "@/components/shared/SectionWrapper"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function FinalCTA() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      await fetch("https://formspree.io/f/PLACEHOLDER_ID", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      })
      setSubmitted(true)
    } catch {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <SectionWrapper id="contato" background="dark">
        <div className="max-w-lg mx-auto text-center py-8">
          <svg
            className="w-16 h-16 text-green-400 mx-auto"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
          <p className="text-xl text-white font-medium mt-6">Mensagem enviada!</p>
          <p className="text-gray-400 mt-2">Entraremos em contato em breve.</p>
        </div>
      </SectionWrapper>
    )
  }

  return (
    <SectionWrapper id="contato" background="dark">
      <div className="max-w-lg mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          Pronto para ter um site profissional?
        </h2>
        <p className="text-gray-400 mt-3">
          Preencha abaixo e responderemos em até 4 horas, de segunda a sexta.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4 text-left">
          <div>
            <Label htmlFor="name" className="text-gray-300">Nome</Label>
            <Input
              id="name"
              name="name"
              required
              placeholder="Seu nome"
              className="mt-1.5"
            />
          </div>
          <div>
            <Label htmlFor="whatsapp" className="text-gray-300">WhatsApp</Label>
            <Input
              id="whatsapp"
              name="whatsapp"
              type="tel"
              required
              placeholder="(61) 99999-9999"
              className="mt-1.5"
            />
          </div>
          <div>
            <Label htmlFor="clinic" className="text-gray-300">Nome da clínica</Label>
            <Input
              id="clinic"
              name="clinic"
              placeholder="Ex: Clínica Sorriso"
              className="mt-1.5"
            />
          </div>
          <Button
            type="submit"
            disabled={submitting}
            className="w-full mt-2 bg-white text-navy-950 hover:bg-gray-100 font-medium py-3 h-auto cursor-pointer"
          >
            {submitting ? "Enviando..." : "Quero uma proposta"}
          </Button>
        </form>
      </div>
    </SectionWrapper>
  )
}

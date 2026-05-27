import { useState } from "react"
import { SectionWrapper } from "@/components/shared/SectionWrapper"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const WHATSAPP_URL = `https://wa.me/5561999999999?text=${encodeURIComponent("Olá! Vi o site da Loome e tenho interesse em um site para minha clínica.")}`

export function FinalCTA() {
  const [formOpen, setFormOpen] = useState(false)
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

  return (
    <SectionWrapper id="contato" background="dark">
      <div className="max-w-lg mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          Pronto para ter um site profissional?
        </h2>
        <p className="text-gray-400 mt-3">
          Resposta em até 4 horas, de segunda a sexta.
        </p>

        {/* Primary CTA — WhatsApp */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#20b857] text-white font-semibold text-lg rounded-xl py-4 transition-colors"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Falar no WhatsApp
        </a>

        <p className="text-xs text-gray-500 mt-3">
          Projetos a partir de R$ 1.099,90
        </p>

        {/* Secondary CTA — Form toggle */}
        {!formOpen && !submitted && (
          <button
            onClick={() => setFormOpen(true)}
            className="mt-6 text-sm text-gray-500 hover:text-gray-300 transition-colors underline underline-offset-4 cursor-pointer"
          >
            Prefere preencher um formulário?
          </button>
        )}

        {/* Form — revealed on demand */}
        {formOpen && !submitted && (
          <form onSubmit={handleSubmit} className="mt-6 space-y-4 text-left">
            <div className="h-px bg-white/10 mb-6" />
            <div>
              <Label htmlFor="name" className="text-gray-300">Nome</Label>
              <Input id="name" name="name" required placeholder="Seu nome" className="mt-1.5" />
            </div>
            <div>
              <Label htmlFor="whatsapp" className="text-gray-300">WhatsApp</Label>
              <Input id="whatsapp" name="whatsapp" type="tel" required placeholder="(61) 99999-9999" className="mt-1.5" />
            </div>
            <div>
              <Label htmlFor="clinic" className="text-gray-300">Nome da clínica</Label>
              <Input id="clinic" name="clinic" placeholder="Ex: Clínica Sorriso" className="mt-1.5" />
            </div>
            <Button
              type="submit"
              disabled={submitting}
              className="w-full mt-2 bg-white text-navy-950 hover:bg-gray-100 font-medium py-3 h-auto cursor-pointer"
            >
              {submitting ? "Enviando..." : "Enviar"}
            </Button>
          </form>
        )}

        {submitted && (
          <div className="mt-6 text-center">
            <svg className="w-12 h-12 text-green-400 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <p className="text-white font-medium mt-3">Mensagem enviada!</p>
            <p className="text-gray-400 text-sm mt-1">Entraremos em contato em breve.</p>
          </div>
        )}
      </div>
    </SectionWrapper>
  )
}

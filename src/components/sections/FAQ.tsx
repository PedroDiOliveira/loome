import { SectionWrapper } from "@/components/shared/SectionWrapper"
import { SectionHeading } from "@/components/shared/SectionHeading"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import { faqEntries } from "@/data/faq"

export function FAQ() {
  return (
    <SectionWrapper id="faq">
      <SectionHeading title="Perguntas frequentes" />
      <div className="max-w-2xl mx-auto">
        <Accordion type="single" collapsible>
          {faqEntries.map((entry) => (
            <AccordionItem key={entry.id} value={entry.id}>
              <AccordionTrigger>{entry.question}</AccordionTrigger>
              <AccordionContent>{entry.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </SectionWrapper>
  )
}

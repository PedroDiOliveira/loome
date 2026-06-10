import { SectionWrapper } from "@/components/shared/SectionWrapper"
import { SectionHeading } from "@/components/shared/SectionHeading"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import { faqEntries } from "@/data/faq"
import { m, fadeUp, staggerContainer, viewportOnce } from "@/lib/motion"

export function FAQ() {
  return (
    <SectionWrapper id="faq">
      <SectionHeading title="Perguntas frequentes" />
      <m.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.08)}
        className="max-w-2xl mx-auto"
      >
        <Accordion type="single" collapsible>
          {faqEntries.map((entry) => (
            <m.div key={entry.id} variants={fadeUp}>
              <AccordionItem value={entry.id}>
                <AccordionTrigger>{entry.question}</AccordionTrigger>
                <AccordionContent>{entry.answer}</AccordionContent>
              </AccordionItem>
            </m.div>
          ))}
        </Accordion>
      </m.div>
    </SectionWrapper>
  )
}

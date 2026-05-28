import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { WhatsAppButton } from "@/components/layout/WhatsAppButton"
import { Hero } from "@/components/sections/Hero"
import { Problem } from "@/components/sections/Problem"
import { Included } from "@/components/sections/Included"
import { Cases } from "@/components/sections/Cases"
import { Process } from "@/components/sections/Process"
import { FAQ } from "@/components/sections/FAQ"
import { FinalCTA } from "@/components/sections/FinalCTA"

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Included />
        <Cases />
        <Process />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton phoneNumber="5561999023060" />
    </>
  )
}

export default App

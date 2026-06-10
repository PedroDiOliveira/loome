import { LazyMotion, domAnimation, MotionConfig } from "@/lib/motion"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { WhatsAppButton } from "@/components/layout/WhatsAppButton"
import { Hero } from "@/components/sections/Hero"
import { MarqueeStrip } from "@/components/sections/MarqueeStrip"
import { Problem } from "@/components/sections/Problem"
import { Included } from "@/components/sections/Included"
import { Cases } from "@/components/sections/Cases"
import { Process } from "@/components/sections/Process"
import { FAQ } from "@/components/sections/FAQ"
import { FinalCTA } from "@/components/sections/FinalCTA"

function App() {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <Header />
        <main>
          <Hero />
          <MarqueeStrip />
          <Problem />
          <Included />
          <Cases />
          <Process />
          <FAQ />
          <FinalCTA />
        </main>
        <Footer />
        <WhatsAppButton phoneNumber="5561999023060" />
      </MotionConfig>
    </LazyMotion>
  )
}

export default App

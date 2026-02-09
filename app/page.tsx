import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { ValueProposition } from "@/components/value-proposition"
import { Services } from "@/components/services"
import { Projects } from "@/components/projects"
import { Testimonials } from "@/components/testimonials"
import { QuoteForm } from "@/components/quote-form"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ValueProposition />
      <Services />
      <Projects />
      <Testimonials />
      <QuoteForm />
      <Footer />
    </main>
  )
}

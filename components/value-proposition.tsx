"use client"

import { Target, ShieldCheck, TrendingUp } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const blocks = [
  {
    icon: Target,
    title: "Visibilite locale garantie",
    description:
      "Un site professionnel qui vous place en premiere position dans les recherches locales. Vos futurs clients vous trouvent avant vos concurrents.",
  },
  {
    icon: ShieldCheck,
    title: "Confiance et credibilite",
    description:
      "Photos de chantiers reels, avis clients verifies, garanties affichees. Chaque element de votre site rassure et convainc vos visiteurs.",
  },
  {
    icon: TrendingUp,
    title: "Demandes de devis qualifiees",
    description:
      "Un formulaire optimise qui transforme les visiteurs en clients concrets. Fini les appels de curieux, place aux vrais projets.",
  },
]

export function ValueProposition() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="bg-muted py-20 lg:py-28" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2
            className={`font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="text-balance">
              Pourquoi un site web change tout pour votre activite
            </span>
          </h2>
          <p
            className={`mt-4 text-lg leading-relaxed text-muted-foreground transition-all duration-700 delay-150 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Un artisan sans site web, c{"'"}est comme un chantier sans fondations.
          </p>
        </div>

        {/* 3 Blocks */}
        <div className="grid gap-8 md:grid-cols-3">
          {blocks.map((block, index) => (
            <div
              key={block.title}
              className={`group rounded-xl border border-border bg-card p-8 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-md ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: isVisible ? `${300 + index * 150}ms` : "0ms",
              }}
            >
              <div className="mb-5 inline-flex rounded-lg bg-accent/10 p-3">
                <block.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mb-3 font-serif text-xl font-semibold text-foreground">
                {block.title}
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                {block.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

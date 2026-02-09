"use client"

import React from "react"

import { useState } from "react"
import { Phone, Clock, CheckCircle, Send, ShieldCheck } from "lucide-react"
import { siteConfig } from "@/lib/config"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Button } from "@/components/ui/button"

export function QuoteForm() {
  const { ref, isVisible } = useScrollAnimation()
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const reassuranceItems = [
    {
      icon: Clock,
      title: "Reponse sous 48h",
      description: "Nous vous recontactons rapidement pour discuter de votre projet.",
    },
    {
      icon: CheckCircle,
      title: "Devis 100% gratuit",
      description: "Estimation detaillee et transparente, sans aucun frais.",
    },
    {
      icon: ShieldCheck,
      title: "Sans engagement",
      description: "Vous etes libre d'accepter ou non notre proposition.",
    },
  ]

  return (
    <section id="quote" className="bg-primary py-20 lg:py-28" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Form */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="mb-2 font-serif text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              <span className="text-balance">
                Demandez votre devis gratuit
              </span>
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-primary-foreground/70">
              Decrivez-nous votre projet, nous vous recontactons sous 48h.
            </p>

            {submitted ? (
              <div className="flex flex-col items-center gap-4 rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-10 text-center backdrop-blur-sm">
                <div className="rounded-full bg-accent/20 p-3">
                  <CheckCircle className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-primary-foreground">
                  Demande envoyee avec succes
                </h3>
                <p className="text-primary-foreground/70">
                  Nous vous recontacterons dans les 48h pour discuter de votre
                  projet. Merci pour votre confiance.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-medium text-primary-foreground/80"
                  >
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder="Jean Dupont"
                    className="w-full rounded-lg border border-primary-foreground/10 bg-primary-foreground/5 px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-1.5 block text-sm font-medium text-primary-foreground/80"
                  >
                    Telephone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    placeholder="06 XX XX XX XX"
                    className="w-full rounded-lg border border-primary-foreground/10 bg-primary-foreground/5 px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                  />
                </div>

                {/* Project Type */}
                <div>
                  <label
                    htmlFor="projectType"
                    className="mb-1.5 block text-sm font-medium text-primary-foreground/80"
                  >
                    Type de projet
                  </label>
                  <select
                    id="projectType"
                    required
                    className="w-full rounded-lg border border-primary-foreground/10 bg-primary-foreground/5 px-4 py-3 text-primary-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                    defaultValue=""
                  >
                    <option value="" disabled className="text-muted-foreground">
                      Selectionnez un type de projet
                    </option>
                    {siteConfig.projectTypes.map((type) => (
                      <option key={type} value={type} className="text-foreground">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Description */}
                <div>
                  <label
                    htmlFor="description"
                    className="mb-1.5 block text-sm font-medium text-primary-foreground/80"
                  >
                    Description du projet
                  </label>
                  <textarea
                    id="description"
                    rows={4}
                    placeholder="Decrivez votre projet en quelques lignes..."
                    className="w-full resize-none rounded-lg border border-primary-foreground/10 bg-primary-foreground/5 px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                  />
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  size="lg"
                  className="mt-2 gap-2 bg-accent py-6 text-base font-semibold text-accent-foreground shadow-lg transition-all hover:bg-accent/90 hover:shadow-xl"
                >
                  Envoyer ma demande
                  <Send className="h-5 w-5" />
                </Button>
              </form>
            )}
          </div>

          {/* Right: Reassurance */}
          <div
            className={`flex flex-col gap-8 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {reassuranceItems.map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="flex-shrink-0 rounded-lg bg-accent/20 p-3">
                  <item.icon className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-primary-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-primary-foreground/60">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Phone CTA */}
            <div className="mt-4 rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-6 backdrop-blur-sm">
              <p className="mb-3 text-sm text-primary-foreground/60">
                Vous preferez nous appeler directement ?
              </p>
              <a
                href={siteConfig.phoneHref}
                className="flex items-center gap-3 text-xl font-bold text-accent transition-colors hover:text-accent/80"
              >
                <Phone className="h-6 w-6" />
                {siteConfig.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

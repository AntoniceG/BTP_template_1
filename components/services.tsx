"use client"

import {
  Paintbrush,
  Home,
  Hammer,
  Maximize,
  Layers,
  Building,
  ArrowRight,
} from "lucide-react"
import { siteConfig } from "@/lib/config"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const iconMap = {
  Paintbrush,
  Home,
  Hammer,
  Maximize,
  Layers,
  Building,
} as const

export function Services() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#1F2A36] py-24 lg:py-32"
      ref={ref}
    >
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-20 flex flex-col items-start gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div
              className={`mb-6 h-1 w-16 rounded-full bg-[#C9A24D] transition-all duration-700 ${
                isVisible ? "opacity-100 w-16" : "opacity-0 w-0"
              }`}
            />
            <p
              className={`mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A24D] transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              Nos prestations
            </p>
            <h2
              className={`font-serif text-4xl font-bold leading-[1.15] tracking-tight text-[#F9FAFB] sm:text-5xl transition-all duration-700 delay-100 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              <span className="text-balance">
                Des solutions{" "}
                <span className="text-[#C9A24D]">{"compl\u00e8tes"}</span> pour
                tous vos projets
              </span>
            </h2>
            <p
              className={`mt-5 max-w-lg text-lg leading-relaxed text-[#E5E7EB]/70 transition-all duration-700 delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              De la conception {"\u00e0"} la {"\u00e9alisation"}, nous prenons en
              charge {"l\u2019int\u00e9gralit\u00e9"} de vos travaux avec
              rigueur et savoir-faire.
            </p>
          </div>
          <a
            href="#quote"
            className={`group hidden items-center gap-2 text-sm font-semibold text-[#C9A24D] transition-all duration-700 delay-300 hover:gap-3 lg:flex ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            Demander un devis
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Services Grid - 2 featured + 4 standard */}
        <div className="grid gap-5 lg:grid-cols-2">
          {siteConfig.services.slice(0, 2).map((service, index) => {
            const Icon = iconMap[service.icon]
            return (
              <div
                key={service.title}
                className={`group relative overflow-hidden rounded-xl border border-[#E5E7EB]/10 bg-[#F9FAFB]/[0.04] p-8 backdrop-blur-sm transition-all duration-700 hover:border-[#C9A24D]/30 hover:bg-[#F9FAFB]/[0.07] ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: isVisible ? `${400 + index * 150}ms` : "0ms",
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-[#C9A24D]/20">
                    <Icon className="h-6 w-6 text-[#C9A24D]" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#F9FAFB]">
                    {service.title}
                  </h3>
                </div>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-[#E5E7EB]/70">
                  {service.description}
                </p>
                <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-[#C9A24D] opacity-0 transition-all duration-300 group-hover:opacity-100">
                  En savoir plus
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
                {/* Accent line */}
                <div className="absolute left-0 top-0 h-16 w-1 bg-[#C9A24D] transition-all duration-500 group-hover:h-full" />
              </div>
            )
          })}
        </div>

        {/* Bottom 4 Standard Cards */}
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.services.slice(2).map((service, index) => {
            const Icon = iconMap[service.icon]
            return (
              <div
                key={service.title}
                className={`group relative overflow-hidden rounded-xl border border-[#E5E7EB]/10 bg-[#F9FAFB]/[0.04] p-6 backdrop-blur-sm transition-all duration-500 hover:border-[#C9A24D]/30 hover:bg-[#F9FAFB]/[0.07] ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: isVisible
                    ? `${700 + index * 100}ms`
                    : "0ms",
                }}
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-sm bg-[#C9A24D]/15">
                  <Icon className="h-5 w-5 text-[#C9A24D]" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-[#F9FAFB]">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#E5E7EB]/60">
                  {service.description}
                </p>
                {/* Bottom accent line on hover */}
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#C9A24D] transition-all duration-500 group-hover:w-full" />
              </div>
            )
          })}
        </div>

        {/* Mobile CTA */}
        <div
          className={`mt-12 flex justify-center lg:hidden transition-all duration-700 delay-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          <a
            href="#quote"
            className="group flex items-center gap-2 rounded-sm bg-[#C9A24D] px-8 py-4 text-sm font-semibold text-[#1F2A36] shadow-lg shadow-[#C9A24D]/20 transition-all duration-300 hover:bg-[#d4af5a] hover:shadow-xl"
          >
            Demander un devis gratuit
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  )
}

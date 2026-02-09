"use client"

import { useState, useEffect, useCallback } from "react"
import { ArrowRight, Clock, Shield, Award, ChevronDown } from "lucide-react"
import { siteConfig } from "@/lib/config"
import { Button } from "@/components/ui/button"

const slides = siteConfig.services.map((service) => ({
  title: service.title,
  description: service.description,
}))

const INTERVAL = 4000

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [prevIndex, setPrevIndex] = useState<number | null>(null)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const advanceSlide = useCallback(() => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setPrevIndex(activeIndex)
    setActiveIndex((prev) => (prev + 1) % slides.length)
    setTimeout(() => {
      setPrevIndex(null)
      setIsTransitioning(false)
    }, 1200)
  }, [activeIndex, isTransitioning])

  useEffect(() => {
    const timer = setInterval(advanceSlide, INTERVAL)
    return () => clearInterval(timer)
  }, [advanceSlide])

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#1F2A36]">
      {/* Subtle geometric background pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      {/* Gradient accents */}
      <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-[#C9A24D]/[0.06] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#1F2A36] to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Top accent bar */}
          <div className="mb-8 h-1 w-16 animate-fade-in rounded-full bg-[#C9A24D]" />

          {/* Trade label */}
          <p
            className="mb-4 animate-fade-up text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A24D]"
            style={{ animationDelay: "0.1s", animationFillMode: "both" }}
          >
            {siteConfig.tradeType}
          </p>

          {/* Rotating service title */}
          <div
            className="relative animate-fade-up font-serif text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
            style={{ animationDelay: "0.2s", animationFillMode: "both" }}
          >
            {slides.map((slide, i) => {
              const isActive = i === activeIndex
              const isPrev = i === prevIndex
              return (
                <span
                  key={slide.title}
                  className={`block w-full text-balance leading-tight ${
                    isActive ? "relative" : "absolute left-0 top-0"
                  }`}
                  style={{
                    color: "#F9FAFB",
                    transition: "opacity 0.8s ease, transform 0.8s ease",
                    opacity: isActive ? 1 : 0,
                    transform: isActive
                      ? "translateY(0)"
                      : isPrev
                        ? "translateY(-100%)"
                        : "translateY(100%)",
                    pointerEvents: isActive ? "auto" : "none",
                  }}
                  aria-hidden={!isActive}
                >
                  {slide.title}
                </span>
              )
            })}
          </div>

          {/* Rotating description */}
          <div
            className="relative mt-6 max-w-xl animate-fade-up"
            style={{ animationDelay: "0.35s", animationFillMode: "both" }}
          >
            {slides.map((slide, i) => {
              const isActive = i === activeIndex
              return (
                <p
                  key={slide.title}
                  className={`w-full text-lg leading-relaxed text-[#E5E7EB] sm:text-xl ${
                    isActive ? "relative" : "absolute left-0 top-0"
                  }`}
                  style={{
                    transition: "opacity 0.8s ease 0.15s",
                    opacity: isActive ? 1 : 0,
                    pointerEvents: isActive ? "auto" : "none",
                  }}
                  aria-hidden={!isActive}
                >
                  {slide.description}
                </p>
              )
            })}
          </div>

          {/* Divider */}
          <div
            className="my-8 h-px w-24 animate-fade-up bg-[#C9A24D]/40"
            style={{ animationDelay: "0.45s", animationFillMode: "both" }}
          />

          {/* CTA Buttons */}
          <div
            className="flex animate-fade-up flex-col gap-4 sm:flex-row sm:items-center"
            style={{ animationDelay: "0.5s", animationFillMode: "both" }}
          >
            <a href="#quote">
              <Button
                size="lg"
                className="gap-2.5 rounded-sm bg-[#C9A24D] px-8 py-6 text-base font-semibold text-[#1F2A36] shadow-lg shadow-[#C9A24D]/20 transition-all duration-300 hover:bg-[#d4af5a] hover:shadow-xl hover:shadow-[#C9A24D]/30"
              >
                {"Demander un devis gratuit"}
                <ArrowRight className="h-5 w-5" />
              </Button>
            </a>
            <a href="#services">
              <Button
                variant="outline"
                size="lg"
                className="gap-2 rounded-sm border-[#E5E7EB]/25 bg-transparent px-8 py-6 text-base text-[#F9FAFB] transition-all duration-300 hover:border-[#C9A24D]/50 hover:bg-[#C9A24D]/10 hover:text-[#F9FAFB]"
              >
                {"Voir nos prestations"}
              </Button>
            </a>
          </div>

          {/* Trust Badges */}
          <div
            className="mt-16 flex animate-fade-up flex-col gap-6 sm:flex-row sm:items-center sm:gap-10"
            style={{ animationDelay: "0.65s", animationFillMode: "both" }}
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-[#C9A24D]/15">
                <Award className="h-5 w-5 text-[#C9A24D]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#F9FAFB]">
                  {siteConfig.yearsExperience} ans
                </p>
                <p className="text-xs text-[#E5E7EB]/60">{"d\u2019exp\u00e9rience"}</p>
              </div>
            </div>
            <div className="hidden h-8 w-px bg-[#E5E7EB]/15 sm:block" />
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-[#C9A24D]/15">
                <Clock className="h-5 w-5 text-[#C9A24D]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#F9FAFB]">Devis sous 48h</p>
                <p className="text-xs text-[#E5E7EB]/60">{"R\u00e9ponse rapide"}</p>
              </div>
            </div>
            <div className="hidden h-8 w-px bg-[#E5E7EB]/15 sm:block" />
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-[#C9A24D]/15">
                <Shield className="h-5 w-5 text-[#C9A24D]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#F9FAFB]">{"Garantie d\u00e9cennale"}</p>
                <p className="text-xs text-[#E5E7EB]/60">Assurance pro</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <a href="#value" aria-label="D\u00e9filer vers le bas">
          <ChevronDown className="h-6 w-6 text-[#C9A24D]/60" />
        </a>
      </div>

      {/* Right-side vertical text */}
      <div className="absolute right-8 top-1/2 z-10 hidden -translate-y-1/2 lg:block">
        <p className="origin-center -rotate-90 whitespace-nowrap text-xs font-medium uppercase tracking-[0.3em] text-[#E5E7EB]/20">
          {siteConfig.companyName} &mdash; {siteConfig.city}
        </p>
      </div>
    </section>
  )
}

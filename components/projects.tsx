"use client"

import { MapPin, ArrowUpRight } from "lucide-react"
import { siteConfig } from "@/lib/config"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function Projects() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="projects" className="bg-background py-20 lg:py-28" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <div
            className={`mb-3 text-sm font-semibold uppercase tracking-widest text-[#C9A24D] transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            {"Nos r\u00e9alisations"}
          </div>
          <h2
            className={`font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            <span className="text-balance">
              {"Des projets qui parlent d\u2019eux-m\u00eames"}
            </span>
          </h2>
          <p
            className={`mt-4 text-lg leading-relaxed text-muted-foreground transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            {"D\u00e9couvrez quelques-unes de nos r\u00e9alisations r\u00e9centes dans la r\u00e9gion de "}{siteConfig.city}.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {siteConfig.projects.map((project, index) => (
            <div
              key={project.title}
              className={`group cursor-pointer overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-[#C9A24D]/30 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              style={{
                transitionDelay: isVisible ? `${300 + index * 150}ms` : "0ms",
              }}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `url("${(project as any).image}")`,
                  }}
                />
                {/* Subtle overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F2A36]/60 via-transparent to-transparent opacity-60" />
                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-[#1F2A36]/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex items-center gap-2 rounded-full bg-[#C9A24D] px-5 py-2.5 text-sm font-semibold text-[#1F2A36]">
                    Voir le projet
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
                {/* Location badge */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-card/90 px-3 py-1 text-xs font-medium text-foreground backdrop-blur-sm">
                  <MapPin className="h-3 w-3 text-[#C9A24D]" />
                  {project.location}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5">
                <h3 className="mb-2 font-serif text-lg font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

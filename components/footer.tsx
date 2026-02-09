import { MapPin, Phone, Mail } from "lucide-react"
import { siteConfig } from "@/lib/config"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Column 1: Brand */}
          <div>
            <h3 className="mb-3 font-serif text-xl font-bold text-background">
              {siteConfig.companyName}
            </h3>
            <p className="text-sm leading-relaxed text-background/50">
              {siteConfig.footerTagline}
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-background/70">
              Navigation
            </h4>
            <nav className="flex flex-col gap-2.5">
              {siteConfig.navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-background/50 transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-background/70">
              Contact
            </h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3 text-sm text-background/50">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                <span>{siteConfig.address}</span>
              </div>
              <a
                href={siteConfig.phoneHref}
                className="flex items-center gap-3 text-sm text-background/50 transition-colors hover:text-accent"
              >
                <Phone className="h-4 w-4 flex-shrink-0 text-accent" />
                {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 text-sm text-background/50 transition-colors hover:text-accent"
              >
                <Mail className="h-4 w-4 flex-shrink-0 text-accent" />
                {siteConfig.email}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center gap-3 border-t border-background/10 pt-8 sm:flex-row sm:justify-between">
          <p className="text-xs text-background/40">
            &copy; {currentYear} {siteConfig.copyright}. Tous droits reserves.
          </p>
          <p className="text-xs text-background/30">
            Site realise par {siteConfig.createdBy}
          </p>
        </div>
      </div>
    </footer>
  )
}

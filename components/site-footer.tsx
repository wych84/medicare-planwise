import Image from "next/image"
import { Phone, Mail } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <Image
              src="/medicare-planwise-wordmark.png"
              alt="Medicare PlanWise"
              width={680}
              height={340}
              className="h-16 w-auto"
            />
            <p className="mt-4 max-w-xs text-pretty text-sm leading-relaxed text-muted-foreground">
              Independent, licensed Medicare guidance — personally helping you choose with clarity
              and confidence.
            </p>
          </div>

          <div className="md:justify-self-end">
            <h3 className="text-sm font-semibold text-foreground">Get in touch</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <a
                  href="tel:+17149490664"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  714-949-0664
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <a
                  href="mailto:medicareplanwise@gmail.com"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  medicareplanwise@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-border pt-8">
          <p className="text-xs leading-relaxed text-muted-foreground">
            I do not offer every plan available in your area. Any information I provide is limited
            to those plans I do offer in your area. Please contact Medicare.gov or 1-800-MEDICARE to
            get information on all of your options. Not connected with or endorsed by the United
            States government or the federal Medicare program.
          </p>
          <div className="mt-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Medicare PlanWise. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Terms
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

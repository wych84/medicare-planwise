import { Phone, Mail, BadgeCheck } from "lucide-react"
import { Logo } from "@/components/logo"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <Logo size="text-3xl" />
            <span className="sr-only">Confianza Insurance Services</span>
            <p className="mt-4 max-w-xs text-pretty text-sm leading-relaxed text-muted-foreground">
              Asesoría de Medicare independiente y con licencia — le ayudo personalmente a elegir
              con claridad y confianza.
            </p>
          </div>

          <div className="md:justify-self-end">
            <h3 className="text-sm font-semibold text-foreground">Contáctenos</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <a
                  href="tel:+17147698445"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  714-769-8445
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <a
                  href="mailto:joyce@confianzainsuranceservices.com"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  joyce@confianzainsuranceservices.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <BadgeCheck className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <span className="text-sm text-muted-foreground">Licencia de CA #0M47941</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-border pt-8">
          <p className="text-xs leading-relaxed text-muted-foreground">
            No ofrezco todos los planes disponibles en su área. Cualquier información que le
            proporcione se limita a los planes que sí ofrezco en su área. Comuníquese con
            Medicare.gov o al 1-800-MEDICARE para obtener información sobre todas sus opciones. No
            estamos afiliados ni respaldados por el gobierno de los Estados Unidos ni por el
            programa federal de Medicare.
          </p>
          <div className="mt-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Confianza Insurance Services. Todos los derechos
              reservados.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Privacidad
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Términos
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Accesibilidad
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

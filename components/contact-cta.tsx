import { Phone } from "lucide-react"

export function ContactCta() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <div className="overflow-hidden rounded-3xl border border-border bg-card">
        <div className="flex flex-col items-center p-8 text-center md:p-14 lg:p-20">
          <p className="text-sm font-medium uppercase tracking-wider text-accent">
            Revisión gratuita y sin compromiso
          </p>
          <h2 className="mt-3 max-w-2xl text-balance font-serif text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl">
            Encontremos el plan que se ajusta a su vida
          </h2>
          <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
            Llámeme y me comunicaré con usted personalmente en el momento que mejor le convenga. Sin
            presión, nunca.
          </p>

          <a
            href="tel:+17147698445"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-accent px-7 py-4 text-accent-foreground transition-opacity hover:opacity-90"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            <span className="font-serif text-xl font-semibold">714-769-8445</span>
          </a>

          <p className="mt-6 text-sm text-muted-foreground">
            O escríbame a{" "}
            <a
              href="mailto:info@confianzainsuranceservices.com"
              className="text-foreground underline underline-offset-4 transition-colors hover:text-accent"
            >
              info@confianzainsuranceservices.com
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

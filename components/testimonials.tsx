import { Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "Estaba completamente perdida hasta que llamé. Mi asesora me explicó todo con calma y nunca me hizo sentir apurada. Por fin entiendo mi cobertura.",
    name: "Margaret R.",
    detail: "Inscrita en Medigap, Ohio",
  },
  {
    quote:
      "Mi asesora encontró un plan que mantuvo a mis dos médicos y me ahorró casi $90 al mes. Honesta, amable y genuinamente de mi lado.",
    name: "James T.",
    detail: "Medicare Advantage, Arizona",
  },
  {
    quote:
      "Lo que más aprecié fueron las llamadas personales después de inscribirme. Es raro sentirse tan bien atendido hoy en día.",
    name: "Dorothy y Bill K.",
    detail: "Revisión de Parte D, Florida",
  },
]

export function Testimonials() {
  return (
    <section className="bg-secondary/40">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-wider text-accent">Historias de clientes</p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl">
            Personas reales, tranquilidad real
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-border bg-card p-8"
            >
              <div className="flex items-center gap-0.5 text-accent">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-current" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 text-pretty leading-relaxed text-foreground">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-5">
                <p className="font-semibold text-foreground">{t.name}</p>
                <p className="mt-0.5 text-sm text-muted-foreground">{t.detail}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

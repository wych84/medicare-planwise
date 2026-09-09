import { Check } from "lucide-react"

const points = [
  "Le explico los detalles — nunca hay presión",
  "Le aclaro la letra pequeña antes de que firme",
  "Estoy disponible todo el año, no solo durante la inscripción",
]

export function AboutFeature() {
  return (
    <section id="about" className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-3xl px-5 py-20 text-center md:px-8 md:py-28">
        <div>
          <p className="text-sm font-medium uppercase tracking-wider text-primary-foreground/70">
            Mi promesa
          </p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
            Consejos que ponen a las personas primero, de alguien que realmente se preocupa
          </h2>
          <p className="mt-5 mx-auto max-w-md text-pretty leading-relaxed text-primary-foreground/80">
            Fundé Confianza Insurance Services sobre una creencia sencilla: elegir cobertura de
            salud debe sentirse apoyado, no estresante. Trato a cada cliente como si fuera de mi
            familia.
          </p>

          <p className="mt-6 font-serif text-lg font-semibold text-primary-foreground">
            — Joyce Yang
          </p>

          <ul className="mt-8 inline-flex flex-col gap-4 text-left">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <Check className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="leading-relaxed text-primary-foreground/90">{point}</span>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </section>
  )
}

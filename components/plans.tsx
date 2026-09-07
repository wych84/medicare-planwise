"use client"

import { useRef } from "react"
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react"

const plans = [
  {
    name: "Medicare Advantage",
    tag: "Parte C",
    body: "Cobertura todo en uno que a menudo combina servicios médicos, hospitalarios y de medicamentos recetados — a veces con extras como dental y visión.",
    points: ["Beneficios combinados", "A menudo opciones con prima de $0", "Atención basada en red"],
  },
  {
    name: "Suplemento de Medicare",
    tag: "Medigap",
    body: "Se combina con Medicare Original para ayudar a cubrir costos de bolsillo como copagos, coseguros y deducibles.",
    points: [
      "Consulte a cualquier médico que acepte Medicare",
      "Costos predecibles",
      "Sin necesidad de referencias",
    ],
    featured: true,
  },
  {
    name: "Planes de medicamentos recetados",
    tag: "Parte D",
    body: "Cobertura independiente que ayuda a reducir el costo de los medicamentos que toma — ajustada a sus recetas específicas.",
    points: ["Revisión personalizada de medicamentos", "Comparaciones de farmacias", "Revisiones anuales de costos"],
  },
  {
    name: "Productos complementarios",
    tag: "Suplementario",
    body: "Complete su cobertura con pólizas que ayudan con los costos que Medicare no cubre — para que un diagnóstico inesperado o una hospitalización no desestabilicen su presupuesto.",
    points: ["Cáncer, ataque cardíaco y derrame", "Indemnización hospitalaria", "Dental, visión y audición"],
    featured: true,
  },
]

export function Plans() {
  const trackRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "prev" | "next") => {
    const track = trackRef.current
    if (!track) return
    const amount = track.clientWidth * 0.8
    track.scrollBy({ left: direction === "next" ? amount : -amount, behavior: "smooth" })
  }

  return (
    <section id="plans" className="bg-card">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="flex items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-wider text-accent">Opciones de cobertura</p>
            <h2 className="mt-3 text-balance font-serif text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl">
              Entienda cada tipo de plan de Medicare
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              No existe una respuesta única para todos. Le ayudaré a evaluar cada opción según sus
              necesidades de salud, su presupuesto y los médicos que aprecia.
            </p>
          </div>
          <div className="hidden shrink-0 gap-3 md:flex">
            <button
              type="button"
              onClick={() => scroll("prev")}
              aria-label="Planes anteriores"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:bg-secondary"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => scroll("next")}
              aria-label="Planes siguientes"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:bg-secondary"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`flex w-[85%] shrink-0 snap-start flex-col rounded-2xl border p-8 sm:w-[60%] lg:w-[calc((100%-3rem)/3)] ${
                plan.featured
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-background"
              }`}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    plan.featured
                      ? "bg-primary-foreground/15 text-primary-foreground"
                      : "bg-secondary text-secondary-foreground"
                  }`}
                >
                  {plan.tag}
                </span>
                <ArrowUpRight
                  className={`h-5 w-5 ${plan.featured ? "text-primary-foreground/70" : "text-accent"}`}
                  aria-hidden="true"
                />
              </div>

              <h3 className="mt-5 font-serif text-2xl font-semibold">{plan.name}</h3>
              <p
                className={`mt-3 leading-relaxed ${
                  plan.featured ? "text-primary-foreground/80" : "text-muted-foreground"
                }`}
              >
                {plan.body}
              </p>

              <ul
                className={`mt-6 space-y-3 pt-6 text-sm ${
                  plan.featured ? "border-t border-primary-foreground/20" : "border-t border-border"
                }`}
              >
                {plan.points.map((point) => (
                  <li
                    key={point}
                    className={`flex items-center gap-3 ${
                      plan.featured ? "text-primary-foreground/90" : "text-foreground"
                    }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        plan.featured ? "bg-primary-foreground" : "bg-accent"
                      }`}
                      aria-hidden="true"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

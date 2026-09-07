"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    q: "¿Tiene algún costo trabajar con Confianza Insurance Services?",
    a: "No. Mis servicios son completamente gratuitos para usted. Las aseguradoras me compensan cuando usted se inscribe, y esa compensación es la misma sin importar qué plan elija — por eso mi asesoría se mantiene imparcial.",
  },
  {
    q: "¿Está afiliada a una compañía de seguros específica?",
    a: "No. Confianza Insurance Services es una práctica de asesoría independiente, y trabajo con todas las principales aseguradoras nacionales y regionales. Esa independencia me permite recomendar lo que realmente es mejor para usted, no lo que es mejor para una sola compañía.",
  },
  {
    q: "¿Cuándo puedo hacer cambios a mi plan de Medicare?",
    a: "La mayoría de las personas pueden hacer cambios durante el Período Anual de Inscripción (del 15 de octubre al 7 de diciembre), así como durante ciertos períodos de inscripción especial. Le ayudaré a entender qué períodos aplican a su caso.",
  },
  {
    q: "¿Qué debo tener listo para mi consulta?",
    a: "Ayuda tener una lista de sus médicos actuales, sus medicamentos y dosis, y su tarjeta de Medicare si ya la tiene. No se preocupe si le falta algo — yo lo guiaré durante el proceso.",
  },
  {
    q: "¿Con quién estaré trabajando?",
    a: "Trabajará directamente conmigo de principio a fin. Conozco su situación personalmente y estoy disponible todo el año para preguntas, ayuda con reclamos y revisiones anuales de su plan.",
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="mx-auto max-w-3xl px-5 py-20 md:px-8 md:py-28">
      <div className="text-center">
        <p className="text-sm font-medium uppercase tracking-wider text-accent">Preguntas</p>
        <h2 className="mt-3 text-balance font-serif text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl">
          Respuestas a lo que más preguntan los clientes
        </h2>
      </div>

      <div className="mt-12 divide-y divide-border border-y border-border">
        {faqs.map((faq, i) => {
          const isOpen = open === i
          return (
            <div key={faq.q}>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
                aria-expanded={isOpen}
              >
                <span className="font-serif text-lg font-medium text-foreground">{faq.q}</span>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-accent">
                  {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                </span>
              </button>
              {isOpen && (
                <p className="-mt-1 pb-6 pr-12 leading-relaxed text-muted-foreground">{faq.a}</p>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}

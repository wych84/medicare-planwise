const steps = [
  {
    n: "01",
    title: "Cuénteme sobre usted",
    body: "Comparta sus médicos, medicamentos y prioridades en una conversación relajada y sin presión — por teléfono o video.",
  },
  {
    n: "02",
    title: "Comparo sus opciones",
    body: "Analizo planes de todas las principales aseguradoras y le explico las ventajas y desventajas en lenguaje sencillo.",
  },
  {
    n: "03",
    title: "Inscríbase con confianza",
    body: "Cuando esté listo, me encargo del papeleo y permanezco a su lado durante la inscripción y más allá.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <div className="max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-wider text-accent">Cómo funciona</p>
        <h2 className="mt-3 text-balance font-serif text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl">
          Un camino guiado, hecho simple
        </h2>
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
          Tres pasos bien pensados reemplazan horas de confusión. Usted mantiene el control en todo
          momento.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3 md:gap-8">
        {steps.map((step) => (
          <div
            key={step.n}
            className="rounded-2xl border border-border bg-card p-8 transition-shadow hover:shadow-sm"
          >
            <span className="font-serif text-5xl font-semibold text-accent/30">{step.n}</span>
            <h3 className="mt-6 font-serif text-xl font-semibold text-foreground">{step.title}</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">{step.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

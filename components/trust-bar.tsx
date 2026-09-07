import { ShieldCheck, HandHeart, Scale, Clock } from "lucide-react"

const items = [
  {
    icon: Scale,
    title: "Imparcial por diseño",
    body: "Comparo planes de todas las principales aseguradoras, sin dirigirle nunca hacia los productos de una sola compañía.",
  },
  {
    icon: HandHeart,
    title: "Orientación, no ventas",
    body: "Conversaciones pacientes y sin tecnicismos que ponen su salud y su presupuesto primero, siempre.",
  },
  {
    icon: ShieldCheck,
    title: "Con licencia y certificación",
    body: "Con licencia estatal y recertificación anual sobre las últimas reglas de Medicare.",
  },
  {
    icon: Clock,
    title: "Apoyo que perdura",
    body: "Estoy aquí mucho después de la inscripción — para preguntas de reclamos, revisiones anuales y cambios de plan.",
  },
]

export function TrustBar() {
  return (
    <section className="border-y border-border bg-card" aria-label="Por qué los clientes confían en mí">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-px overflow-hidden px-5 py-4 sm:grid-cols-2 md:px-8 lg:grid-cols-4">
        {items.map((item) => (
          <div key={item.title} className="flex gap-4 px-2 py-6 lg:px-6">
            <item.icon className="h-6 w-6 shrink-0 text-accent" aria-hidden="true" />
            <div>
              <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

import { ShieldCheck, HandHeart, Scale, Clock } from "lucide-react"

const items = [
  {
    icon: Scale,
    title: "Unbiased by design",
    body: "We compare plans across all major carriers — never steering you toward one company's products.",
  },
  {
    icon: HandHeart,
    title: "Guidance, not sales",
    body: "Patient, jargon-free conversations that put your health and budget first, every time.",
  },
  {
    icon: ShieldCheck,
    title: "Licensed & certified",
    body: "Every advisor is state-licensed and recertified annually on the latest Medicare rules.",
  },
  {
    icon: Clock,
    title: "Support that lasts",
    body: "We're here long after enrollment — for claims questions, annual reviews, and plan changes.",
  },
]

export function TrustBar() {
  return (
    <section className="border-y border-border bg-card" aria-label="Why members trust us">
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

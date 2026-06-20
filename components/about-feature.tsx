import Image from "next/image"
import { Check } from "lucide-react"

const points = [
  "We listen first — no scripts, no pressure",
  "We explain the fine print before you sign",
  "We're available year-round, not just at enrollment",
]

export function AboutFeature() {
  return (
    <section id="about" className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-2 lg:gap-16">
        <div className="relative order-last lg:order-first">
          <div className="overflow-hidden rounded-2xl">
            <Image
              src="/advisor.png"
              alt="A licensed Medicare PlanWise advisor ready to help"
              width={680}
              height={760}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div>
          <p className="text-sm font-medium uppercase tracking-wider text-primary-foreground/70">
            Our promise
          </p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
            People-first advice, from people who genuinely care
          </h2>
          <p className="mt-5 max-w-md text-pretty leading-relaxed text-primary-foreground/80">
            Medicare PlanWise was founded on a simple belief: choosing healthcare coverage should
            feel supported, not stressful. Our advisors treat every member like family.
          </p>

          <ul className="mt-8 space-y-4">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <Check className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="leading-relaxed text-primary-foreground/90">{point}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-primary-foreground/15 pt-8">
            <Stat value="12k+" label="Members guided" />
            <Stat value="98%" label="Would recommend" />
            <Stat value="15+" label="Years of service" />
          </div>
        </div>
      </div>
    </section>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-serif text-3xl font-semibold">{value}</p>
      <p className="mt-1 text-sm text-primary-foreground/70">{label}</p>
    </div>
  )
}

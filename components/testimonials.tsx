import { Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "I was completely lost until I called. My advisor walked me through everything slowly and never made me feel rushed. I finally understand my coverage.",
    name: "Margaret R.",
    detail: "Enrolled in Medigap, Ohio",
  },
  {
    quote:
      "My advisor found a plan that kept both my doctors and saved me almost $90 a month. Honest, kind, and genuinely on my side.",
    name: "James T.",
    detail: "Medicare Advantage, Arizona",
  },
  {
    quote:
      "What I appreciated most was the personal check-ins after I enrolled. It's rare to feel this cared for these days.",
    name: "Dorothy & Bill K.",
    detail: "Part D review, Florida",
  },
]

export function Testimonials() {
  return (
    <section className="bg-secondary/40">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-wider text-accent">Client stories</p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl">
            Real people, real peace of mind
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

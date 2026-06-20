const steps = [
  {
    n: "01",
    title: "Tell us about you",
    body: "Share your doctors, prescriptions, and priorities in a relaxed, no-pressure conversation — by phone or video.",
  },
  {
    n: "02",
    title: "We compare your options",
    body: "Your advisor analyzes plans from every major carrier and explains the trade-offs in plain language.",
  },
  {
    n: "03",
    title: "Enroll with confidence",
    body: "Once you're ready, we handle the paperwork and stay by your side through enrollment and beyond.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <div className="max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-wider text-accent">How it works</p>
        <h2 className="mt-3 text-balance font-serif text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl">
          A guided path, made simple
        </h2>
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
          Three thoughtful steps replace hours of confusion. You stay in control the entire way.
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

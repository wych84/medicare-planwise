import Image from "next/image"
import { ArrowRight } from "lucide-react"

const articles = [
  {
    category: "Getting Started",
    title: "When should I enroll in Medicare?",
    body: "Understand your Initial Enrollment Period and how to avoid costly late-enrollment penalties.",
    image: "/lifestyle-walk.png",
  },
  {
    category: "Comparing Plans",
    title: "Advantage vs. Supplement: which is right?",
    body: "A clear, side-by-side look at the trade-offs between the two most common paths.",
    image: "/consultation.png",
  },
  {
    category: "Saving Money",
    title: "Lowering your prescription costs",
    body: "Simple strategies to make sure your Part D plan matches the medications you actually take.",
    image: "/advisor.png",
  },
]

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-wider text-accent">Learn</p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl">
            Knowledge that puts you in control
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Plain-spoken guides I&apos;ve written to help you make informed, confident decisions.
          </p>
        </div>
        <a
          href="#"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-accent"
        >
          Browse all resources
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {articles.map((article) => (
          <a
            key={article.title}
            href="#"
            className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-md"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={article.image || "/placeholder.svg"}
                alt=""
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <span className="text-xs font-medium uppercase tracking-wider text-accent">
                {article.category}
              </span>
              <h3 className="mt-3 font-serif text-xl font-semibold leading-snug text-foreground">
                {article.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {article.body}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-foreground group-hover:text-accent">
                Read article
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

"use client"

import { useRef } from "react"
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react"

const plans = [
  {
    name: "Medicare Advantage",
    tag: "Part C",
    body: "All-in-one coverage that often bundles medical, hospital, and prescription drugs — sometimes with extras like dental and vision.",
    points: ["Bundled benefits", "Often $0 premium options", "Network-based care"],
  },
  {
    name: "Medicare Supplement",
    tag: "Medigap",
    body: "Pairs with Original Medicare to help cover out-of-pocket costs like copays, coinsurance, and deductibles.",
    points: ["See any doctor that accepts Medicare", "Predictable costs", "No referrals needed"],
    featured: true,
  },
  {
    name: "Prescription Drug Plans",
    tag: "Part D",
    body: "Stand-alone coverage that helps lower the cost of the medications you take — matched to your specific prescriptions.",
    points: ["Personalized drug review", "Pharmacy comparisons", "Annual cost checkups"],
  },
  {
    name: "Ancillary Products",
    tag: "Supplemental",
    body: "Round out your coverage with policies that help with the costs Medicare doesn't — so an unexpected diagnosis or hospital stay doesn't derail your budget.",
    points: ["Cancer, heart attack & stroke", "Hospital indemnity", "Dental, vision & hearing"],
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
            <p className="text-sm font-medium uppercase tracking-wider text-accent">Coverage options</p>
            <h2 className="mt-3 text-balance font-serif text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl">
              Understand every type of Medicare plan
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              There&apos;s no one-size-fits-all answer. I&apos;ll help you weigh each option against
              your health needs, budget, and the doctors you love.
            </p>
          </div>
          <div className="hidden shrink-0 gap-3 md:flex">
            <button
              type="button"
              onClick={() => scroll("prev")}
              aria-label="Previous plans"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:bg-secondary"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => scroll("next")}
              aria-label="Next plans"
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

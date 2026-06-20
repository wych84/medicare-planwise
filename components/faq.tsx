"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    q: "Does it cost anything to work with Medicare PlanWise?",
    a: "No. My services are completely free to you. I'm compensated by the insurance carriers when you enroll, and that compensation is the same regardless of which plan you choose — so my advice stays unbiased.",
  },
  {
    q: "Are you connected to one specific insurance company?",
    a: "No. Medicare PlanWise is an independent advisory practice, and I work with all major national and regional carriers. That independence lets me recommend what's genuinely best for you, not what's best for a single company.",
  },
  {
    q: "When can I make changes to my Medicare plan?",
    a: "Most people can make changes during the Annual Enrollment Period (October 15 – December 7), as well as during certain special enrollment periods. I'll help you understand which windows apply to you.",
  },
  {
    q: "What should I have ready for my consultation?",
    a: "It helps to have a list of your current doctors, your prescriptions and dosages, and your Medicare card if you already have one. Don't worry if you're missing something — I'll guide you through it.",
  },
  {
    q: "Who will I be working with?",
    a: "You'll work directly with me from start to finish. I know your situation personally and am available year-round for questions, claims help, and annual plan reviews.",
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="mx-auto max-w-3xl px-5 py-20 md:px-8 md:py-28">
      <div className="text-center">
        <p className="text-sm font-medium uppercase tracking-wider text-accent">Questions</p>
        <h2 className="mt-3 text-balance font-serif text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl">
          Answers to what members ask most
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

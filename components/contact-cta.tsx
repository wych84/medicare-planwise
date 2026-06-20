"use client"

import type React from "react"
import { useState } from "react"
import { Phone, ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactCta() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <div className="overflow-hidden rounded-3xl border border-border bg-card">
        <div className="grid lg:grid-cols-2">
          <div className="flex flex-col justify-center p-8 md:p-12 lg:p-14">
            <p className="text-sm font-medium uppercase tracking-wider text-accent">
              Free, no-obligation review
            </p>
            <h2 className="mt-3 text-balance font-serif text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl">
              Let&apos;s find the plan that fits your life
            </h2>
            <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
              Share a few details and a licensed advisor will reach out at a time that works for
              you. No pressure, ever.
            </p>

            <a
              href="tel:18005550123"
              className="mt-8 inline-flex items-center gap-3 text-foreground"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-accent">
                <Phone className="h-5 w-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-sm text-muted-foreground">Prefer to talk now?</span>
                <span className="font-serif text-xl font-semibold">1-800-555-0123</span>
              </span>
            </a>
          </div>

          <div className="border-t border-border bg-secondary/30 p-8 md:p-12 lg:border-l lg:border-t-0 lg:p-14">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <Check className="h-7 w-7" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-serif text-2xl font-semibold text-foreground">
                  Thank you!
                </h3>
                <p className="mt-2 max-w-xs leading-relaxed text-muted-foreground">
                  An advisor will be in touch within one business day to schedule your free review.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="First name" name="firstName" autoComplete="given-name" />
                  <Field label="Last name" name="lastName" autoComplete="family-name" />
                </div>
                <Field label="Phone number" name="phone" type="tel" autoComplete="tel" />
                <Field label="Email" name="email" type="email" autoComplete="email" />
                <div className="flex flex-col gap-2">
                  <label htmlFor="zip" className="text-sm font-medium text-foreground">
                    ZIP code
                  </label>
                  <input
                    id="zip"
                    name="zip"
                    inputMode="numeric"
                    required
                    className="h-11 rounded-md border border-input bg-background px-3.5 text-foreground outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/30"
                  />
                </div>
                <Button type="submit" size="lg" className="mt-2 w-full rounded-full">
                  Request my free review
                  <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                </Button>
                <p className="text-center text-xs leading-relaxed text-muted-foreground">
                  By submitting, you agree to be contacted by a licensed advisor. We respect your
                  privacy and never sell your information.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  type = "text",
  autoComplete,
}: {
  label: string
  name: string
  type?: string
  autoComplete?: string
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-sm font-medium text-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required
        className="h-11 rounded-md border border-input bg-background px-3.5 text-foreground outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/30"
      />
    </div>
  )
}

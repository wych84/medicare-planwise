import Image from "next/image"
import { ArrowRight, Star } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-2 lg:gap-16 lg:py-28">
        <div className="flex flex-col">
          <span className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            Independent &amp; unbiased guidance
          </span>

          <h1 className="text-balance font-serif text-4xl font-semibold leading-[1.08] tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Clarity and confidence for every step of your Medicare journey
          </h1>

          <p className="mt-6 max-w-md text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            Navigating Medicare can feel overwhelming. Our licensed advisors guide you through your
            options with patience and honesty — so you choose a plan that truly fits your life.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className={buttonVariants({ size: "lg", className: "rounded-full" })}
            >
              Get your free plan review
              <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#how-it-works"
              className={buttonVariants({
                variant: "outline",
                size: "lg",
                className: "rounded-full bg-transparent",
              })}
            >
              See how it works
            </a>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-2" aria-hidden="true">
              {[0, 1, 2, 3].map((i) => (
                <span
                  key={i}
                  className="h-9 w-9 rounded-full border-2 border-background bg-secondary"
                />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-0.5 text-accent">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-current" aria-hidden="true" />
                ))}
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                Trusted by <span className="font-semibold text-foreground">12,000+</span> members
                nationwide
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl border border-border shadow-sm">
            <Image
              src="/hero-couple.png"
              alt="A retired couple reviewing their Medicare options with a trusted advisor"
              width={720}
              height={820}
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <div className="absolute -bottom-5 -left-5 hidden rounded-xl border border-border bg-card p-5 shadow-md sm:block">
            <p className="font-serif text-3xl font-semibold text-foreground">$0</p>
            <p className="mt-1 text-sm text-muted-foreground">
              cost to you — we&apos;re paid by carriers, not by you
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-2 lg:gap-16 lg:py-28">
        <div className="flex flex-col">
          <span className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            Asesoría independiente e imparcial
          </span>

          <h1 className="text-balance font-serif text-4xl font-semibold leading-[1.08] tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Le ayudo a elegir Medicare con claridad y confianza
          </h1>

          <p className="mt-6 max-w-md text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            Navegar Medicare puede resultar abrumador. Como asesora independiente y con licencia, le
            brindo orientación personalizada con paciencia y honestidad, ayudándole a entender sus
            opciones y a elegir su cobertura con confianza.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className={buttonVariants({ size: "lg", className: "rounded-full" })}
            >
              Reciba su revisión de plan gratis
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
              Vea cómo funciona
            </a>
          </div>

        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl border border-border shadow-sm">
            <Image
              src="/hero-couple.png"
              alt="Una pareja jubilada revisando sus opciones de Medicare con su asesora independiente de confianza"
              width={720}
              height={820}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

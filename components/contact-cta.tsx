"use client"

import { useActionState } from "react"
import { useFormStatus } from "react-dom"
import { Phone, ArrowRight, Check, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { sendLead, type LeadState } from "@/app/actions/send-lead"

const initialState: LeadState = { status: "idle" }

export function ContactCta() {
  const [state, formAction] = useActionState(sendLead, initialState)
  const submitted = state.status === "success"

  return (
    <section id="contact" className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <div className="overflow-hidden rounded-3xl border border-border bg-card">
        <div className="grid lg:grid-cols-2">
          <div className="flex flex-col justify-center p-8 md:p-12 lg:p-14">
            <p className="text-sm font-medium uppercase tracking-wider text-accent">
              Revisión gratuita y sin compromiso
            </p>
            <h2 className="mt-3 text-balance font-serif text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl">
              Encontremos el plan que se ajusta a su vida
            </h2>
            <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
              Comparta algunos datos y me comunicaré con usted personalmente en el momento que mejor
              le convenga. Sin presión, nunca.
            </p>

            <a
              href="tel:+17147698445"
              className="mt-8 inline-flex items-center gap-3 text-foreground"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-accent">
                <Phone className="h-5 w-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-sm text-muted-foreground">¿Prefiere hablar ahora?</span>
                <span className="font-serif text-xl font-semibold">714-769-8445</span>
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
                  ¡Gracias!
                </h3>
                <p className="mt-2 max-w-xs leading-relaxed text-muted-foreground">
                  Me comunicaré con usted dentro de un día hábil para agendar su revisión gratuita.
                </p>
              </div>
            ) : (
              <form action={formAction} className="flex flex-col gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Nombre" name="firstName" autoComplete="given-name" />
                  <Field label="Apellido" name="lastName" autoComplete="family-name" />
                </div>
                <Field label="Número de teléfono" name="phone" type="tel" autoComplete="tel" />
                <Field label="Correo electrónico" name="email" type="email" autoComplete="email" />
                <div className="flex flex-col gap-2">
                  <label htmlFor="zip" className="text-sm font-medium text-foreground">
                    Código postal
                  </label>
                  <input
                    id="zip"
                    name="zip"
                    inputMode="numeric"
                    required
                    className="h-11 rounded-md border border-input bg-background px-3.5 text-foreground outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/30"
                  />
                </div>
                <SubmitButton />
                {state.status === "error" && state.message ? (
                  <p className="text-center text-sm text-destructive" role="alert">
                    {state.message}
                  </p>
                ) : null}
                <p className="text-center text-xs leading-relaxed text-muted-foreground">
                  Al enviar, usted acepta ser contactado por una asesora con licencia. Respeto su
                  privacidad y nunca vendo su información.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" size="lg" disabled={pending} className="mt-2 w-full rounded-full">
      {pending ? (
        <>
          <Loader2 className="mr-1 h-4 w-4 animate-spin" aria-hidden="true" />
          Enviando...
        </>
      ) : (
        <>
          Solicitar mi revisión gratuita
          <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
        </>
      )}
    </Button>
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

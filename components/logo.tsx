import { cn } from "@/lib/utils"

type LogoProps = {
  className?: string
  /** Tailwind text-size utility that sets the base scale of the wordmark. */
  size?: string
}

/**
 * Text-based wordmark for Confianza Insurance Services.
 * Rendered as live text so it stays crisp, perfectly transparent, and easy to restyle —
 * keeping the original two-tone (teal + navy) style with a teal sparkle accent.
 * Both lines are sized in `em` so the whole mark scales from the `size` prop.
 */
export function Logo({ className, size = "text-3xl md:text-4xl" }: LogoProps) {
  return (
    <span className={cn("inline-flex select-none flex-col leading-none font-sans", size, className)}>
      <span className="relative font-bold lowercase tracking-tight text-accent">
        confianza
        <Sparkle className="absolute -right-[0.5em] -top-[0.1em] h-[0.42em] w-[0.42em]" />
      </span>
      <span className="mt-[0.15em] text-[0.4em] font-bold lowercase tracking-[0.14em] text-primary">
        insurance services
      </span>
    </span>
  )
}

function Sparkle({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={cn("text-accent", className)}
    >
      <path d="M12 0c.7 5.9 5.4 10.6 12 11.3v1.4C17.4 13.4 12.7 18.1 12 24c-.7-5.9-5.4-10.6-12-11.3v-1.4C6.6 10.6 11.3 5.9 12 0Z" />
    </svg>
  )
}

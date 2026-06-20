import Image from "next/image"

const columns = [
  {
    title: "Plans",
    links: ["Medicare Advantage", "Medicare Supplement", "Prescription Drug Plans", "Dental & Vision"],
  },
  {
    title: "Resources",
    links: ["Education Center", "Enrollment Periods", "Eligibility Guide", "Glossary"],
  },
  {
    title: "Company",
    links: ["About Us", "Our Advisors", "Careers", "Contact"],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Image
              src="/medicare-planwise-logo.png"
              alt="Medicare PlanWise"
              width={680}
              height={340}
              className="h-16 w-auto mix-blend-multiply"
            />
            <p className="mt-4 max-w-xs text-pretty text-sm leading-relaxed text-muted-foreground">
              Independent, licensed Medicare guidance — helping you choose with clarity and
              confidence.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-foreground">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 border-t border-border pt-8">
          <p className="text-xs leading-relaxed text-muted-foreground">
            We do not offer every plan available in your area. Any information we provide is limited
            to those plans we do offer in your area. Please contact Medicare.gov or 1-800-MEDICARE to
            get information on all of your options. Not connected with or endorsed by the United
            States government or the federal Medicare program.
          </p>
          <div className="mt-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Medicare PlanWise. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Terms
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

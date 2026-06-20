import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { TrustBar } from "@/components/trust-bar"
import { HowItWorks } from "@/components/how-it-works"
import { Plans } from "@/components/plans"
import { AboutFeature } from "@/components/about-feature"
import { Education } from "@/components/education"
import { Testimonials } from "@/components/testimonials"
import { Faq } from "@/components/faq"
import { ContactCta } from "@/components/contact-cta"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <TrustBar />
        <HowItWorks />
        <Plans />
        <AboutFeature />
        <Education />
        <Testimonials />
        <Faq />
        <ContactCta />
      </main>
      <SiteFooter />
    </>
  )
}

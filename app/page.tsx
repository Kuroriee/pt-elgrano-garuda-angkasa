import { SiteNav } from "@/components/site-nav"
import { Hero } from "@/components/hero"
import { Ticker } from "@/components/ticker"
import { Stats } from "@/components/stats"
import { Story } from "@/components/story"
import { Process } from "@/components/process"
import { Products } from "@/components/products"
import { Certifications } from "@/components/certifications"
import { Sustainability } from "@/components/sustainability"
import { Contact } from "@/components/contact"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main className="overflow-x-hidden bg-background">
      <h1 className="sr-only">PT Elgrano Garuda Angkasa — Specialty Sumatran Coffee Exporter</h1>
      <SiteNav />
      <Hero />
      <Ticker />
      <Stats />
      <Story />
      <Process />
      <Products />
      <Certifications />
      <Sustainability />
      <Contact />
      <SiteFooter />
    </main>
  )
}

import type { Metadata } from "next"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "About",
  description:
    "PT Elgrano Garuda Angkasa is a Medan-based exporter of specialty Sumatran green coffee, sourced from 500+ smallholder farmers and exported to 30+ countries since 2004.",
  alternates: { canonical: "/about/" },
}

export default function AboutPage() {
  return (
    <main className="bg-background">
      <SiteNav />
      <article className="mx-auto max-w-3xl px-6 pb-24 pt-32 md:px-12">
        <h1 className="mb-8 font-heading text-4xl font-semibold tracking-tight text-coffee md:text-5xl">
          About PT Elgrano Garuda Angkasa
        </h1>
        <p className="mb-6 leading-relaxed text-coffee/80">
          PT Elgrano Garuda Angkasa (EGA) is a specialty green coffee exporter based in Medan, North Sumatra,
          Indonesia. Since 2004 we have sourced Arabica and Robusta from the volcanic highlands of Sumatra,
          working with more than 500 smallholder farmers and exporting to buyers in over 30 countries.
        </p>
        <h2 className="mb-4 mt-10 font-heading text-2xl font-semibold text-coffee">Origins we export</h2>
        <ul className="mb-6 list-disc space-y-2 pl-6 text-coffee/80">
          <li>Gayo Arabica (Aceh)</li>
          <li>Mandheling (North Tapanuli)</li>
          <li>Lintong Green (North Sumatra)</li>
          <li>Fine Robusta (Sumatra)</li>
        </ul>
        <h2 className="mb-4 mt-10 font-heading text-2xl font-semibold text-coffee">Where we are</h2>
        <address className="not-italic leading-relaxed text-coffee/80">
          Jl. Bromo Ujung Gg. Sedar No. 9A, Binjai, Kec. Medan Denai
          <br />
          Medan 20228, Sumatera Utara, Indonesia
        </address>
        <p className="mt-10 text-coffee/80">
          Questions or sample requests? See our{" "}
          <a className="text-amber underline" href="/contact/">
            contact page
          </a>
          .
        </p>
      </article>
      <SiteFooter />
    </main>
  )
}
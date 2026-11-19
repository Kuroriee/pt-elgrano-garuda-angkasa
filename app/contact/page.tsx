import type { Metadata } from "next"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { basePath } from "@/lib/base-path"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact PT Elgrano Garuda Angkasa for green coffee inquiries, by email, phone or at our office in Medan, Indonesia.",
  alternates: { canonical: "/contact/" },
}

export default function ContactPage() {
  return (
    <main className="bg-background">
      <SiteNav />
      <article className="mx-auto max-w-3xl px-6 pb-24 pt-32 md:px-12">
        <h1 className="mb-8 font-heading text-4xl font-semibold tracking-tight text-coffee md:text-5xl">
          Contact us
        </h1>
        <dl className="space-y-6 text-coffee/80">
          <div>
            <dt className="font-mono text-xs uppercase tracking-[0.15em] text-amber">Email</dt>
            <dd>
              <a className="underline" href="mailto:elgranogaruda@gmail.com">
                elgranogaruda@gmail.com
              </a>
            </dd>
          </div>
          <div>
            <dt className="font-mono text-xs uppercase tracking-[0.15em] text-amber">Phone</dt>
            <dd>
              <a className="underline" href="tel:+6281396041308">
                +62-813-9604-1308
              </a>
            </dd>
          </div>
          <div>
            <dt className="font-mono text-xs uppercase tracking-[0.15em] text-amber">Address</dt>
            <dd>
              <address className="not-italic">
                PT Elgrano Garuda Angkasa
                <br />
                Jl. Bromo Ujung Gg. Sedar No. 9A, Binjai, Kec. Medan Denai
                <br />
                Medan 20228, Sumatera Utara, Indonesia
              </address>
            </dd>
          </div>
        </dl>
        <p className="mt-10 text-coffee/80">
          Prefer a form? Use the inquiry section on our{" "}
          <a className="text-amber underline" href={`${basePath}/#contact`}>
            homepage
          </a>
          .
        </p>
      </article>
      <SiteFooter />
    </main>
  )
}
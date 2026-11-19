import type { Metadata } from "next"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of use for the PT Elgrano Garuda Angkasa website.",
  alternates: { canonical: "/terms/" },
}

// DRAFT: have the company owner review this text before publishing.
export default function TermsPage() {
  return (
    <main className="bg-background">
      <SiteNav />
      <article className="mx-auto max-w-3xl px-6 pb-24 pt-32 md:px-12">
        <h1 className="mb-8 font-heading text-4xl font-semibold tracking-tight text-coffee md:text-5xl">
          Terms of Use
        </h1>
        <div className="space-y-8 leading-relaxed text-coffee/80">
          <section>
            <h2 className="mb-2 font-heading text-2xl font-semibold text-coffee">1. Information only</h2>
            <p>
              The content on this website describes the products and services of PT Elgrano Garuda Angkasa. It is
              provided for general information and is not a binding offer.
            </p>
          </section>
          <section>
            <h2 className="mb-2 font-heading text-2xl font-semibold text-coffee">2. Inquiries and orders</h2>
            <p>
              Product specifications, availability, prices and shipping terms are confirmed only in a separate
              written agreement or proforma invoice between PT Elgrano Garuda Angkasa and the buyer.
            </p>
          </section>
          <section>
            <h2 className="mb-2 font-heading text-2xl font-semibold text-coffee">3. Intellectual property</h2>
            <p>
              Text, images, logos and other materials on this website belong to PT Elgrano Garuda Angkasa and may
              not be copied or reused without written permission.
            </p>
          </section>
          <section>
            <h2 className="mb-2 font-heading text-2xl font-semibold text-coffee">4. Accuracy and liability</h2>
            <p>
              We aim to keep this website accurate and up to date, but we give no warranty that it is complete or
              error-free. To the extent permitted by law, PT Elgrano Garuda Angkasa is not liable for losses arising
              from the use of this website.
            </p>
          </section>
          <section>
            <h2 className="mb-2 font-heading text-2xl font-semibold text-coffee">5. Governing law</h2>
            <p>These terms are governed by the laws of the Republic of Indonesia.</p>
          </section>
          <section>
            <h2 className="mb-2 font-heading text-2xl font-semibold text-coffee">6. Contact</h2>
            <p>
              Questions about these terms:{" "}
              <a className="text-amber underline" href="mailto:elgranogaruda@gmail.com">
                elgranogaruda@gmail.com
              </a>
              .
            </p>
          </section>
        </div>
      </article>
      <SiteFooter />
    </main>
  )
}
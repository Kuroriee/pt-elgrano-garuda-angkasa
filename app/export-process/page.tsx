import { basePath } from '@/lib/base-path'
import { SiteNav } from "@/components/site-nav"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Export Process & FAQ',
  description:
    'How to source specialty green coffee from PT Elgrano Garuda Angkasa — MOQs, sample requests, Incoterms, payment terms, certifications, and shipping documentation for international buyers.',
}

const steps = [
  {
    number: '01',
    title: 'Inquiry & Sample Request',
    description:
      'Tell us your target volume, preferred origin (Gayo Arabica, Mandheling, Lintong Green, or Fine Robusta), and target market. We respond within two business days with sample availability and indicative pricing.',
  },
  {
    number: '02',
    title: 'Cupping & Sample Approval',
    description:
      'We ship pre-shipment samples (200g–1kg) for cupping and QC evaluation. Cupping notes and SCA scores are provided alongside each sample lot.',
  },
  {
    number: '03',
    title: 'Quotation & Terms',
    description:
      'Once the sample is approved, we issue a formal quotation with Incoterms (FOB Belawan or CIF to your port), packaging specification, and delivery timeline.',
  },
  {
    number: '04',
    title: 'Contract & Payment',
    description:
      'We work with T/T (bank transfer) and Letter of Credit (L/C) for first-time and recurring buyers. Contract terms, including partial deposit and balance on shipment, are agreed before production begins.',
  },
  {
    number: '05',
    title: 'Production & Quality Control',
    description:
      'Beans are sorted, graded, and packed in GrainPro-lined jute bags under climate-controlled storage. Q-Grader certification confirms Grade 1 standard before export clearance.',
  },
  {
    number: '06',
    title: 'Shipping & Documentation',
    description:
      'Export is processed via Belawan International Container Terminal. We provide Certificate of Origin, phytosanitary certificate, packing list, and commercial invoice for customs clearance in your country.',
  },
  {
    number: '07',
    title: 'Delivery & Ongoing Support',
    description:
      'After delivery, our export team stays available for reorders, volume scaling, and long-term supply agreements across future harvest seasons.',
  },
]

const faqs = [
  {
    question: 'What is your minimum order quantity (MOQ)?',
    answer:
      'MOQ varies by origin and packaging format. We accommodate both trial orders for new roasters and full-container loads for established distributors — contact us with your target volume for a specific quote.',
  },
  {
    question: 'Do you provide samples before purchase?',
    answer:
      'Yes. Pre-shipment samples are available for all four origins in our collection, shipped with cupping notes and SCA scores.',
  },
  {
    question: 'What Incoterms do you support?',
    answer:
      'We primarily export FOB (Belawan Port) and CIF to major destination ports across Europe, North America, Asia-Pacific, and the Middle East.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'Bank transfer (T/T) and Letter of Credit (L/C) are both supported, with terms agreed per contract.',
  },
  {
    question: 'Are your beans traceable to farm level?',
    answer:
      'Yes. Each lot is traceable to the smallholder farmer group it was sourced from across Aceh, North Tapanuli, or West Sumatra, with GAP-certified production practices.',
  },
  {
    question: 'What documents do you provide for customs clearance?',
    answer:
      'Certificate of Origin, phytosanitary certificate, packing list, and commercial invoice are provided as standard with every shipment.',
  },
  {
    question: 'Do you export to my country?',
    answer:
      'We currently export to 30+ countries across Europe, North America, Asia-Pacific, and the Middle East. Reach out with your destination and we will confirm shipping feasibility and lead time.',
  },
  {
    question: 'What is your typical lead time from order to shipment?',
    answer:
      'Lead time depends on harvest season and order volume — our export team will confirm an exact timeline once your order is confirmed.',
  },
]

export default function ExportProcessPage() {
  return (
    <>
      <SiteNav />
      <main className="mx-auto max-w-4xl bg-background px-6 pb-16 pt-32 md:px-12">
        <header className="mb-16 text-center">
          <h1 className="font-heading text-4xl font-semibold tracking-tight text-coffee md:text-5xl">
            Export Process & FAQ
          </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-coffee/70">
          Everything international buyers need to know about sourcing specialty
          green coffee from PT Elgrano Garuda Angkasa — from first inquiry to
          delivery.
        </p>
      </header>

      <section className="mb-20">
        <h2 className="mb-8 font-heading text-2xl font-semibold text-coffee">
          From Inquiry to Delivery
        </h2>
        <ol className="space-y-8">
          {steps.map((step) => (
            <li key={step.number} className="flex gap-5">
              <span className="font-heading text-lg font-semibold text-amber-700">
                {step.number}
              </span>
              <div>
                <h3 className="font-heading text-lg font-semibold text-coffee">
                  {step.title}
                </h3>
                <p className="mt-1 text-sm text-coffee/70">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section>
        <h2 className="mb-8 font-heading text-2xl font-semibold text-coffee">
          Frequently Asked Questions
        </h2>
        <div className="divide-y divide-coffee/10">
          {faqs.map((faq) => (
            <div key={faq.question} className="py-6">
              <h3 className="font-heading text-base font-semibold text-coffee">
                {faq.question}
              </h3>
              <p className="mt-2 text-sm text-coffee/70">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-16 rounded-lg bg-cream/85 p-8 text-center">
        <h2 className="font-heading text-xl font-semibold text-coffee">
          Ready to start a partnership?
        </h2>
        <p className="mt-2 text-sm text-coffee/70">
          Tell us your volume, target markets, and terms — our export team
          responds within two business days.
        </p>
        <a
          href={`${basePath}/#contact`}
          className="mt-4 inline-block rounded-full bg-amber-700 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-amber-800"
        >
          Contact Our Export Team
        </a>
      </div>
    </main>
    </>
  )
}
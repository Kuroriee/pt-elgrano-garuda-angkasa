"use client"

import { useLanguage, translations as t } from "@/lib/i18n"

export function Certifications() {
  const { lang } = useLanguage()
  const certs = t.certs.items[lang]
  return (
    <section className="bg-peach px-6 py-24 md:px-12">
      <div className="mx-auto max-w-5xl">
        <span className="mb-4 block font-mono text-[0.68rem] uppercase tracking-[0.2em] text-coffee">
          {t.certs.eyebrow[lang]}
        </span>
        <h2 className="mb-3 font-heading text-3xl font-medium text-espresso">{t.certs.title[lang]}</h2>
        <p className="mb-12 max-w-xl font-heading text-lg italic text-espresso/75">{t.certs.subtitle[lang]}</p>
        <div className="flex flex-wrap gap-4">
          {certs.map((cert) => (
            <span
              key={cert}
              className="flex items-center gap-2 bg-espresso px-5 py-3 font-mono text-[0.68rem] uppercase tracking-[0.1em] text-cream before:content-['✓']"
            >
              {cert}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

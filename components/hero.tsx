"use client"

import { useLanguage, translations as t } from "@/lib/i18n"
import { basePath } from "@/lib/base-path"

export function Hero() {
  const { lang } = useLanguage()
  return (
    <section id="top" className="grid min-h-screen grid-cols-1 pt-20 md:grid-cols-2">
      <div className="relative flex flex-col justify-center overflow-hidden bg-mint px-6 py-20 md:px-12 lg:px-16">
        <div className="scanlines pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="relative">
          <p className="mb-6 flex items-center gap-3 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-amber">
            <span className="h-px w-8 bg-amber" aria-hidden="true" />
            {t.hero.location[lang]}
          </p>
          <h1 className="mb-7 font-heading text-[clamp(2.4rem,5vw,3.6rem)] font-medium leading-[1.15] text-espresso text-balance">
            {t.hero.titleA[lang]}
            <em className="italic text-amber">{t.hero.titleEm[lang]}</em>
            {t.hero.titleB[lang]}
          </h1>
          <p className="mb-10 max-w-sm text-sm leading-relaxed text-coffee">{t.hero.body[lang]}</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 border border-amber bg-amber px-8 py-3.5 font-mono text-xs uppercase tracking-[0.12em] text-cream transition-colors hover:bg-transparent hover:text-amber"
          >
            {t.hero.cta[lang]}
          </a>
        </div>
      </div>

      <div
        className="relative min-h-[50vh] bg-cover bg-center md:min-h-0"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(58,42,28,0.1) 0%, rgba(58,42,28,0.35) 100%), url(${basePath}/images/hero-coffee.png)`,
        }}
      >
        <div className="absolute inset-x-6 bottom-12 border-l-2 border-amber bg-cream/90 px-6 py-5 backdrop-blur-sm md:inset-x-8">
          <p className="font-heading text-lg italic text-espresso">{t.hero.quote[lang]}</p>
          <span className="mt-2 block font-mono text-[0.68rem] uppercase tracking-[0.1em] text-coffee">
            {t.hero.quoteBy[lang]}
          </span>
        </div>
      </div>
    </section>
  )
}

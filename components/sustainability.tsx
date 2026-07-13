"use client"

import { useLanguage, translations as t } from "@/lib/i18n"

export function Sustainability() {
  const { lang } = useLanguage()
  const pillars = t.sustain.pillars[lang]
  return (
    <section
      id="sustainability"
      className="px-6 py-28 md:px-12"
      style={{
        background: "linear-gradient(135deg, #f9c0c0 0%, #f6d6ad 50%, #fafcc2 100%)",
      }}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <span className="mb-4 block font-mono text-[0.68rem] uppercase tracking-[0.2em] text-coffee">
            {t.sustain.eyebrow[lang]}
          </span>
          <h2 className="mb-6 font-heading text-4xl font-medium leading-tight text-espresso">{t.sustain.title[lang]}</h2>
          <div>
            {pillars.map((pillar, i) => (
              <div
                key={pillar.title}
                className={`py-6 ${i < pillars.length - 1 ? "border-b border-espresso/15" : ""}`}
              >
                <h3 className="mb-2 font-mono text-xs uppercase tracking-[0.15em] text-amber">{pillar.title}</h3>
                <p className="text-sm leading-relaxed text-coffee/85">{pillar.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div
          className="relative h-[480px] rounded-sm bg-cover bg-center"
          style={{ backgroundImage: "url('/pt-elgrano-garuda-angkasa/images/sustainability.png')" }}
          role="img"
          aria-label="Terraced coffee plantation on Sumatra's volcanic highland slopes"
        >
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-espresso/85 to-transparent p-8">
            <p className="font-heading text-base italic text-cream">{t.sustain.imgQuote[lang]}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

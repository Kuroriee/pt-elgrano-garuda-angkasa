"use client"

import { useLanguage, translations as t } from "@/lib/i18n"
import { basePath } from "@/lib/base-path"

export function Story() {
  const { lang } = useLanguage()
  return (
    <section id="story" className="grid grid-cols-1 items-center gap-12 px-6 py-28 md:grid-cols-2 md:px-12 lg:gap-20">
      <div>
        <p className="mb-5 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-amber">{t.story.eyebrow[lang]}</p>
        <h2 className="mb-6 font-heading text-4xl font-medium leading-tight text-espresso text-balance lg:text-[2.6rem]">
          {t.story.titleA[lang]}
          <em className="italic text-amber">{t.story.titleEm[lang]}</em>
          {t.story.titleB[lang]}
        </h2>
        <blockquote className="my-6 border-l-2 border-amber pl-6 font-heading text-xl italic leading-relaxed text-coffee">
          {t.story.quote[lang]}
        </blockquote>
        <div className="space-y-4 text-sm leading-relaxed text-coffee/80">
          <p>{t.story.p1[lang]}</p>
          <p>{t.story.p2[lang]}</p>
          <p>{t.story.p3[lang]}</p>
        </div>
        <div className="mt-8 flex items-center gap-4 border-t border-coffee/15 pt-6">
          <img
            src={`${basePath}/images/ega-logo.png`}
            alt="Stempel resmi PT Elgrano Garuda Angkasa — Medan"
            className="h-20 w-20 shrink-0 object-contain opacity-80"
          />
          <p className="font-mono text-[0.62rem] uppercase leading-relaxed tracking-[0.14em] text-coffee/60">
            PT Elgrano Garuda Angkasa
            <br />
            Medan, Sumatra Utara — {lang === "id" ? "Sejak 2004" : "Est. 2004"}
          </p>
        </div>
      </div>
      <div className="grid h-[460px] grid-rows-2 gap-4">
        <div
          className="rounded-sm bg-cover bg-center"
          style={{ backgroundImage: `url(${basePath}/images/story-cherries.png)` }}
          role="img"
          aria-label="Ripe red coffee cherries on the branch in the Sumatran highlands"
        />
        <div
          className="rounded-sm bg-cover bg-center"
          style={{ backgroundImage: `url(${basePath}/images/story-hands.png)` }}
          role="img"
          aria-label="A farmer's hands holding freshly picked green coffee beans"
        />
      </div>
    </section>
  )
}

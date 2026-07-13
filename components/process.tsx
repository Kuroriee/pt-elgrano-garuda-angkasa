"use client"

import { Sprout, Cherry, Droplets, Settings, Sun, Filter, Package, Ship } from "lucide-react"
import { useLanguage, translations as t } from "@/lib/i18n"

const icons = [Sprout, Cherry, Droplets, Settings, Sun, Filter, Package, Ship]

export function Process() {
  const { lang } = useLanguage()
  const steps = t.process.steps[lang]
  return (
    <section id="process" className="bg-butter px-6 py-28 md:px-12">
      <div className="mb-16 text-center">
        <span className="mb-4 block font-mono text-[0.68rem] uppercase tracking-[0.2em] text-amber">
          {t.process.eyebrow[lang]}
        </span>
        <h2 className="font-heading text-4xl font-medium text-espresso">{t.process.title[lang]}</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => {
          const Icon = icons[i]
          const num = String(i + 1).padStart(2, "0")
          return (
            <div
              key={num}
              className={`border-amber/15 p-8 sm:[&:nth-child(odd)]:border-r lg:border-r lg:[&:nth-child(4n)]:border-r-0 ${
                i >= 4 ? "lg:border-t" : ""
              } sm:[&:nth-child(n+3)]:border-t lg:[&:nth-child(3)]:border-t-0 lg:[&:nth-child(4)]:border-t-0`}
            >
              <div className="mb-4 font-mono text-[0.65rem] tracking-[0.1em] text-amber/70">{num}</div>
              <Icon className="mb-3 size-6 text-amber" strokeWidth={1.5} aria-hidden="true" />
              <h3 className="mb-2 font-heading text-lg font-medium text-espresso">{step.title}</h3>
              <p className="text-sm leading-relaxed text-coffee/80">{step.text}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

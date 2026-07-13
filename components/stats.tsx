"use client"

import { useLanguage, translations as t } from "@/lib/i18n"

export function Stats() {
  const { lang } = useLanguage()
  const stats = t.stats.items[lang]
  return (
    <div className="grid grid-cols-2 border-b border-t border-amber/20 md:grid-cols-4">
      {stats.map((stat, i) => (
        <div
          key={stat.label}
          className={`border-amber/20 px-6 py-10 text-center ${
            i % 2 === 0 ? "border-r" : ""
          } ${i < 2 ? "border-b md:border-b-0" : ""} md:border-r md:last:border-r-0`}
        >
          <div className="font-heading text-5xl font-medium leading-none text-amber">{stat.num}</div>
          <div className="mt-1.5 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-muted-foreground">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  )
}

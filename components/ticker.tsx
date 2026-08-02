"use client"

import { useLanguage, translations as t } from "@/lib/i18n"

export function Ticker() {
  const { lang } = useLanguage()
  const items = t.ticker.items[lang]
  const loop = [...items, ...items]
  return (
    <div className="overflow-hidden bg-amber py-2.5">
      <div className="flex w-max animate-ticker gap-16">
        {loop.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-6 font-mono text-[0.7rem] uppercase tracking-[0.15em] text-cream after:opacity-50 after:content-['·']"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

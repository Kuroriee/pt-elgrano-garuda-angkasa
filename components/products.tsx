"use client"

import { useRef, useState } from "react"
import { useLanguage, translations as t } from "@/lib/i18n"
import { basePath } from "@/lib/base-path"

const images = [
 { src: `${basePath}/images/product-aceh.png` },
 { src: `${basePath}/images/product-mandheling.png` },
 { src: `${basePath}/images/product-lintong.png` },
 { src: `${basePath}/images/product-robusta.png` },
]

export function Products() {
  const { lang } = useLanguage()
  const products = t.products.items[lang]
  const labels = t.products.labels
  const [open, setOpen] = useState<number | null>(null)
  const cardRefs = useRef<(HTMLElement | null)[]>([])

  function handleToggle(i: number, isOpen: boolean) {
    const next = isOpen ? null : i
    setOpen(next)
    if (next !== null) {
      // Smoothly scroll the expanded card into view after it animates open
      window.setTimeout(() => {
        cardRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "center" })
      }, 120)
    }
  }

  return (
    <section id="products" className="px-6 py-28 md:px-12">
      <div className="mb-12 text-center">
        <span className="mb-4 block font-mono text-[0.68rem] uppercase tracking-[0.2em] text-amber">
          {t.products.eyebrow[lang]}
        </span>
        <h2 className="font-heading text-4xl font-medium text-espresso">{t.products.title[lang]}</h2>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2">
        {products.map((product, i) => {
          const isOpen = open === i
          return (
            <article
              key={product.name}
              ref={(el) => {
                cardRefs.current[i] = el
              }}
              className="group flex flex-col overflow-hidden border border-amber/20 bg-card transition-colors hover:border-amber"
            >
              <div className="relative h-44 overflow-hidden">
                <div
                  className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url('${images[i].src}')` }}
                  role="img"
                  aria-label={`${product.name} coffee beans`}
                />
                <span className="absolute right-4 top-4 bg-amber px-3 py-1 font-mono text-[0.62rem] uppercase tracking-[0.1em] text-cream">
                  {product.grade}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="mb-1 font-mono text-[0.65rem] uppercase tracking-[0.15em] text-amber">{product.origin}</p>
                <h3 className="mb-3 font-heading text-2xl font-medium text-espresso">{product.name}</h3>
                <p className="mb-4 text-sm leading-relaxed text-coffee/80">{product.notes}</p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-amber/30 px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-[0.08em] text-coffee/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Smoothly expanding in-depth description */}
                <div
                  className="grid transition-all duration-500 ease-[cubic-bezier(0.65,0,0.35,1)]"
                  style={{
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div className="overflow-hidden">
                    <div className="space-y-4 border-t border-amber/15 pt-5">
                      <DetailBlock label={labels.profile[lang]} text={product.profile} />
                      <DetailBlock label={labels.process[lang]} text={product.process} />
                      <DetailBlock label={labels.brewing[lang]} text={product.brewing} />
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleToggle(i, isOpen)}
                  aria-expanded={isOpen}
                  className="mt-5 flex items-center gap-2 self-start font-mono text-[0.65rem] uppercase tracking-[0.12em] text-amber transition-colors hover:text-espresso"
                >
                  {isOpen ? t.products.readLess[lang] : t.products.readMore[lang]}
                  <span
                    aria-hidden="true"
                    className="inline-block transition-transform duration-300"
                    style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                  >
                    ↓
                  </span>
                </button>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

function DetailBlock({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <p className="mb-1.5 font-mono text-[0.6rem] uppercase tracking-[0.15em] text-amber">{label}</p>
      <p className="text-sm leading-relaxed text-coffee/85">{text}</p>
    </div>
  )
}

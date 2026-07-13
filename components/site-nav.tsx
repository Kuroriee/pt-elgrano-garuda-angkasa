"use client"

import { useLanguage, translations as t } from "@/lib/i18n"
import { ExportPdfButton } from "@/components/export-pdf"

export function SiteNav() {
  const { lang, toggle } = useLanguage()

  const links = [
    { label: t.nav.story[lang], href: "#story" },
    { label: t.nav.production[lang], href: "#process" },
    { label: t.nav.products[lang], href: "#products" },
    { label: t.nav.sustainability[lang], href: "#sustainability" },
  ]

  return (
    <nav className="fixed inset-x-0 top-0 z-50 flex items-center justify-between border-b border-amber/20 bg-cream/85 px-6 py-4 backdrop-blur-md md:px-12">
      <a href="#top" className="flex items-center gap-2.5">
        <img
          src="/pt-elgrano-garuda-angkasa/images/ega-mark.png"
          alt="Lambang garuda PT Elgrano Garuda Angkasa"
          className="h-8 w-8 shrink-0 object-contain"
        />
        <span className="font-heading text-lg font-semibold leading-tight tracking-[0.06em] text-amber md:text-xl">
          ELGRANO GARUDA ANGKASA
        </span>
      </a>
      <ul className="hidden items-center gap-8 md:flex">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-xs uppercase tracking-[0.12em] text-coffee transition-colors hover:text-amber"
            >
              {link.label}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#contact"
            className="text-xs uppercase tracking-[0.12em] text-amber transition-opacity hover:opacity-80"
          >
            {t.nav.inquiry[lang]}
          </a>
        </li>
        <li>
          <ExportPdfButton />
        </li>
        <li>
          <LangToggle lang={lang} toggle={toggle} />
        </li>
      </ul>
      <div className="flex items-center gap-3 md:hidden">
        <ExportPdfButton className="inline-flex items-center gap-1.5 border border-amber bg-amber px-2.5 py-1.5 font-mono text-[0.6rem] uppercase tracking-[0.1em] text-cream disabled:opacity-60" />
        <LangToggle lang={lang} toggle={toggle} />
      </div>
    </nav>
  )
}

function LangToggle({ lang, toggle }: { lang: "id" | "en"; toggle: () => void }) {
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={lang === "id" ? "Switch to English" : "Ganti ke Bahasa Indonesia"}
      className="relative flex items-center overflow-hidden rounded-full border border-amber/40 bg-amber/5 p-0.5 font-mono text-[0.65rem] uppercase tracking-[0.1em] transition-colors hover:border-amber"
    >
      {/* sliding pill indicator */}
      <span
        aria-hidden="true"
        className="absolute left-0.5 top-0.5 h-[calc(100%-0.25rem)] w-[calc(50%-0.125rem)] rounded-full bg-amber shadow-sm transition-transform duration-300 ease-[cubic-bezier(0.65,0,0.35,1)]"
        style={{ transform: lang === "en" ? "translateX(100%)" : "translateX(0%)" }}
      />
      <span
        className={`relative z-10 px-2.5 py-1 transition-colors duration-300 ${
          lang === "id" ? "text-espresso" : "text-amber/60"
        }`}
      >
        ID
      </span>
      <span
        className={`relative z-10 px-2.5 py-1 transition-colors duration-300 ${
          lang === "en" ? "text-espresso" : "text-amber/60"
        }`}
      >
        EN
      </span>
    </button>
  )
}

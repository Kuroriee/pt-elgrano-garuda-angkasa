"use client"

import { useEffect, useState } from "react"
import { useLanguage, translations as t } from "@/lib/i18n"
import { ExportPdfButton } from "@/components/export-pdf"
import { basePath } from "@/lib/base-path"

export function SiteNav() {
  const { lang, toggle } = useLanguage()
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { label: t.nav.story[lang], href: `${basePath}/#story` },
    { label: t.nav.production[lang], href: `${basePath}/#process` },
    { label: t.nav.products[lang], href: `${basePath}/#products` },
    { label: t.nav.sustainability[lang], href: `${basePath}/#sustainability` },
    { label: t.nav.exportFaq[lang], href: `${basePath}/export-process/` },
  ]

  // Lock page scroll while the mobile menu is open, and close it if the
  // viewport is resized back up to desktop width.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) setMenuOpen(false)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-amber/20 bg-cream/85 backdrop-blur-md">
      <div className="flex items-center justify-between px-6 py-4 md:px-12">
        <a href={`${basePath}/#top`} className="flex items-center gap-2.5" onClick={() => setMenuOpen(false)}>
          <img
            src={`${basePath}/images/ega-mark.png`}
            alt="Lambang garuda PT Elgrano Garuda Angkasa"
            className="h-8 w-8 shrink-0 object-contain"
          />
          <span className="font-heading text-lg font-semibold leading-tight tracking-[0.06em] text-amber md:text-xl">
            ELGRANO GARUDA ANGKASA
          </span>
        </a>

        {/* Desktop nav */}
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
              href={`${basePath}/#contact`}
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

        {/* Mobile controls */}
        <div className="flex items-center gap-3 md:hidden">
          <ExportPdfButton className="inline-flex items-center gap-1.5 border border-amber bg-amber px-2.5 py-1.5 font-mono text-[0.6rem] uppercase tracking-[0.1em] text-cream disabled:opacity-60" />
          <LangToggle lang={lang} toggle={toggle} />
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-panel"
            className="flex h-9 w-9 shrink-0 items-center justify-center border border-amber/40 text-amber transition-colors hover:border-amber"
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>
      </div>

      {/* Mobile expandable panel */}
      {menuOpen && (
        <div
          id="mobile-nav-panel"
          className="max-h-[calc(100vh-64px)] overflow-y-auto border-t border-amber/20 bg-cream px-6 pb-6 pt-2 md:hidden"
        >
          <ul className="flex flex-col divide-y divide-amber/15">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3.5 text-sm uppercase tracking-[0.1em] text-coffee transition-colors hover:text-amber"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`${basePath}/#contact`}
                onClick={() => setMenuOpen(false)}
                className="block py-3.5 text-sm uppercase tracking-[0.1em] text-amber transition-opacity hover:opacity-80"
              >
                {t.nav.inquiry[lang]}
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}

function MenuIcon({ open }: { open: boolean }) {
  if (open) {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    )
  }
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
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

"use client"

import { useLanguage, translations as t } from "@/lib/i18n"
import { basePath } from "@/lib/base-path"

export function SiteFooter() {
  const { lang } = useLanguage()
  const linkClass = "text-[0.7rem] tracking-[0.08em] text-cream/70 hover:text-amber"
  return (
    <footer className="flex flex-col items-center justify-between gap-4 border-t border-amber/20 bg-espresso px-6 py-8 md:flex-row md:px-12">
      <div className="flex items-center gap-3">
        <img
          src={`${basePath}/images/ega-logo.png`}
          alt="Stempel resmi PT Elgrano Garuda Angkasa, Medan"
          className="h-12 w-12 shrink-0 rounded-full bg-cream object-contain p-0.5"
        />
        <div className="font-heading text-lg font-semibold leading-tight text-amber">
          ELGRANO GARUDA ANGKASA
        </div>
      </div>
      <p className="font-mono text-[0.72rem] text-cream/70">
        © {new Date().getFullYear()} PT Elgrano Garuda Angkasa · {t.footer.rights[lang]}
      </p>
      <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-6 gap-y-2">
        <a href={`${basePath}/about/`} className={linkClass}>
          {lang === "id" ? "Tentang Kami" : "About"}
        </a>
        <a href={`${basePath}/#story`} className={linkClass}>
          {t.footer.story[lang]}
        </a>
        <a href={`${basePath}/#products`} className={linkClass}>
          {t.footer.products[lang]}
        </a>
        <a href={`${basePath}/contact/`} className={linkClass}>
          {t.footer.contact[lang]}
        </a>
        <a href={`${basePath}/terms/`} className={linkClass}>
          {lang === "id" ? "Syarat Penggunaan" : "Terms"}
        </a>
      </nav>
    </footer>
  )
}
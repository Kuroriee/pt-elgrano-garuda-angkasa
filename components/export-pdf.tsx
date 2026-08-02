"use client"

import React, { useEffect, useRef, useState } from "react"
import { useLanguage, translations as t } from "@/lib/i18n"

// Brand palette (matches the site theme)
const C = {
  mint: "#ccf6c8",
  mintSoft: "#e2f7df",
  butter: "#fafcc2",
  peach: "#f6d6ad",
  blush: "#f9c0c0",
  espresso: "#3a2a1c",
  coffee: "#6b4a2f",
  amber: "#b06a34",
  cream: "#fbfdf2",
  line: "#e3d6c8",
}

type Lang = "id" | "en"

const ui = {
  download: { id: "Unduh PDF", en: "Download PDF" },
  generating: { id: "Menyiapkan...", en: "Preparing..." },
  docTitle: { id: "Profil Perusahaan", en: "Company Profile" },
  storyTitle: { id: "Kisah Kami", en: "Our Story" },
  page: { id: "Halaman", en: "Page" },
  choose: { id: "Pilih bahasa PDF", en: "Choose PDF language" },
  langId: { id: "Bahasa Indonesia", en: "Indonesian" },
  langEn: { id: "English", en: "English" },
}

// Build the PDF document. react-pdf primitives are imported dynamically at call time.
async function buildDocument(lang: Lang) {
  const { Document, Page, View, Text, StyleSheet, Image } = await import("@react-pdf/renderer")

  const s = StyleSheet.create({
    page: {
      backgroundColor: C.cream,
      color: C.espresso,
      paddingTop: 48,
      paddingBottom: 56,
      paddingHorizontal: 48,
      fontFamily: "Helvetica",
      fontSize: 10,
      lineHeight: 1.5,
    },
    // Cover
    cover: {
      backgroundColor: C.mint,
      paddingTop: 0,
      paddingBottom: 0,
      paddingHorizontal: 0,
      color: C.espresso,
      fontFamily: "Helvetica",
    },
    coverInner: { padding: 56, flexGrow: 1, justifyContent: "space-between" },
    brandRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
    brand: { fontFamily: "Times-Bold", fontSize: 22, color: C.amber, letterSpacing: 1 },
    coverEyebrow: { fontSize: 9, letterSpacing: 2, color: C.coffee, textTransform: "uppercase" },
    coverTitle: { fontFamily: "Times-Roman", fontSize: 34, color: C.espresso, lineHeight: 1.2, marginBottom: 18 },
    coverEm: { fontFamily: "Times-BoldItalic", color: C.amber },
    coverBody: { fontSize: 11, color: C.coffee, maxWidth: 360, lineHeight: 1.6 },
    coverQuoteBox: {
      borderLeftWidth: 2,
      borderLeftColor: C.amber,
      backgroundColor: C.cream,
      paddingVertical: 14,
      paddingHorizontal: 18,
    },
    coverQuote: { fontFamily: "Times-Italic", fontSize: 13, color: C.espresso, lineHeight: 1.5 },
    coverQuoteBy: { fontSize: 8, letterSpacing: 1, color: C.coffee, textTransform: "uppercase", marginTop: 8 },
    docTag: { fontSize: 9, letterSpacing: 2, color: C.coffee, textTransform: "uppercase" },

    // Stats strip on cover
    statsRow: { flexDirection: "row", backgroundColor: C.amber, color: C.cream },
    statCell: { flexGrow: 1, flexBasis: 0, paddingVertical: 18, paddingHorizontal: 14 },
    statNum: { fontFamily: "Times-Bold", fontSize: 20, color: C.cream },
    statLabel: { fontSize: 7.5, letterSpacing: 1, color: C.cream, textTransform: "uppercase", marginTop: 4 },

    // Section
    sectionEyebrow: { fontSize: 8.5, letterSpacing: 2, color: C.amber, textTransform: "uppercase", marginBottom: 6 },
    sectionTitle: { fontFamily: "Times-Roman", fontSize: 20, color: C.espresso, marginBottom: 14 },
    sectionTitleEm: { fontFamily: "Times-Italic", color: C.amber },
    para: { fontSize: 10, color: C.coffee, marginBottom: 8, lineHeight: 1.6 },
    quote: {
      fontFamily: "Times-Italic",
      fontSize: 13,
      color: C.espresso,
      borderLeftWidth: 2,
      borderLeftColor: C.amber,
      paddingLeft: 14,
      marginBottom: 14,
      lineHeight: 1.5,
    },

    // Process steps
    step: { flexDirection: "row", marginBottom: 12 },
    stepNum: { fontFamily: "Times-Bold", fontSize: 12, color: C.amber, width: 28 },
    stepBody: { flexGrow: 1, flexBasis: 0 },
    stepTitle: { fontFamily: "Helvetica-Bold", fontSize: 10.5, color: C.espresso, marginBottom: 2 },
    stepText: { fontSize: 9, color: C.coffee, lineHeight: 1.5 },

    // Product card
    product: {
      borderWidth: 1,
      borderColor: C.line,
      borderRadius: 3,
      padding: 16,
      marginBottom: 14,
      backgroundColor: "#ffffff",
    },
    prodHead: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 4 },
    prodOrigin: { fontSize: 8, letterSpacing: 1.5, color: C.amber, textTransform: "uppercase", marginBottom: 2 },
    prodName: { fontFamily: "Times-Bold", fontSize: 16, color: C.espresso },
    prodGrade: {
      backgroundColor: C.amber,
      color: C.cream,
      fontSize: 7.5,
      letterSpacing: 1,
      textTransform: "uppercase",
      paddingVertical: 3,
      paddingHorizontal: 7,
      borderRadius: 2,
    },
    tagRow: { flexDirection: "row", flexWrap: "wrap", marginTop: 6, marginBottom: 8 },
    tag: {
      borderWidth: 1,
      borderColor: C.line,
      color: C.coffee,
      fontSize: 7.5,
      letterSpacing: 0.5,
      textTransform: "uppercase",
      paddingVertical: 2,
      paddingHorizontal: 6,
      marginRight: 5,
      marginBottom: 4,
      borderRadius: 2,
    },
    detailLabel: { fontSize: 8, letterSpacing: 1.5, color: C.amber, textTransform: "uppercase", marginTop: 6, marginBottom: 2 },
    detailText: { fontSize: 9, color: C.coffee, lineHeight: 1.5 },

    // Certs / pillars
    chipRow: { flexDirection: "row", flexWrap: "wrap" },
    chip: {
      backgroundColor: C.peach,
      color: C.espresso,
      fontSize: 8.5,
      paddingVertical: 5,
      paddingHorizontal: 10,
      marginRight: 6,
      marginBottom: 6,
      borderRadius: 2,
    },
    pillar: { marginBottom: 10 },
    pillarTitle: { fontFamily: "Helvetica-Bold", fontSize: 10, color: C.amber, marginBottom: 2 },

    // Contact
    contactBox: { backgroundColor: C.mintSoft, borderRadius: 3, padding: 18, marginTop: 6 },
    contactRow: { flexDirection: "row", marginBottom: 8 },
    contactLabel: { width: 70, fontSize: 8, letterSpacing: 1, color: C.amber, textTransform: "uppercase" },
    contactValue: { flexGrow: 1, flexBasis: 0, fontSize: 10, color: C.espresso },

    band: { height: 8, flexDirection: "row", marginBottom: 24 },

    footer: {
      position: "absolute",
      bottom: 24,
      left: 48,
      right: 48,
      flexDirection: "row",
      justifyContent: "space-between",
      borderTopWidth: 1,
      borderTopColor: C.line,
      paddingTop: 8,
      fontSize: 7.5,
      color: C.coffee,
    },
  })

  const tr = (o: { id: string; en: string }) => o[lang]
  const hero = t.hero
  const stats = t.stats.items[lang]
  const story = t.story
  const proc = t.process
  const prods = t.products.items[lang]
  const pl = t.products.labels
  const certs = t.certs.items[lang]
  const pillars = t.sustain.pillars[lang]
  const details = t.contact.details[lang]

  const ColorBand = () =>
    React.createElement(
      View,
      { style: s.band },
      [C.mint, C.butter, C.peach, C.blush].map((c, i) =>
        React.createElement(View, { key: i, style: { flexGrow: 1, backgroundColor: c } }),
      ),
    )

  const Footer = () =>
    React.createElement(
      View,
      { style: s.footer, fixed: true },
      React.createElement(Text, null, "PT ELGRANO GARUDA ANGKASA — Medan, Sumatra, Indonesia"),
      React.createElement(Text, {
        render: ({ pageNumber, totalPages }: { pageNumber: number; totalPages: number }) =>
          `${ui.page[lang]} ${pageNumber} / ${totalPages}`,
      }),
    )

  return React.createElement(
    Document,
    { title: "PT Elgrano Garuda Angkasa — Company Profile", author: "PT Elgrano Garuda Angkasa" },

    // COVER
    React.createElement(
      Page,
      { size: "A4", style: s.cover },
      React.createElement(
        View,
        { style: s.coverInner },
        React.createElement(
          View,
          null,
          React.createElement(
            View,
            { style: s.brandRow },
            React.createElement(Text, { style: s.brand }, "PT ELGRANO GARUDA ANGKASA"),
            React.createElement(Text, { style: s.docTag }, ui.docTitle[lang]),
          ),
          React.createElement(Text, { style: [s.coverEyebrow, { marginTop: 36, marginBottom: 14 }] }, tr(hero.location)),
          React.createElement(
            Text,
            { style: s.coverTitle },
            tr(hero.titleA),
            React.createElement(Text, { style: s.coverEm }, tr(hero.titleEm)),
            tr(hero.titleB),
          ),
          React.createElement(Text, { style: s.coverBody }, tr(hero.body)),
        ),
        React.createElement(
          View,
          { style: s.coverQuoteBox },
          React.createElement(Text, { style: s.coverQuote }, tr(hero.quote)),
          React.createElement(Text, { style: s.coverQuoteBy }, tr(hero.quoteBy)),
        ),
      ),
      React.createElement(
        View,
        { style: s.statsRow },
        stats.map((st, i) =>
          React.createElement(
            View,
            { key: i, style: s.statCell },
            React.createElement(Text, { style: s.statNum }, st.num),
            React.createElement(Text, { style: s.statLabel }, st.label),
          ),
        ),
      ),
    ),

    // STORY + PRODUCTION
    React.createElement(
      Page,
      { size: "A4", style: s.page },
      React.createElement(ColorBand),
      React.createElement(Text, { style: s.sectionEyebrow }, tr(story.eyebrow)),
      React.createElement(
        Text,
        { style: s.sectionTitle },
        tr(story.titleA),
        React.createElement(Text, { style: s.sectionTitleEm }, tr(story.titleEm)),
        tr(story.titleB),
      ),
      React.createElement(Text, { style: s.quote }, tr(story.quote)),
      React.createElement(Text, { style: s.para }, tr(story.p1)),
      React.createElement(Text, { style: s.para }, tr(story.p2)),
      React.createElement(Text, { style: [s.para, { marginBottom: 22 }] }, tr(story.p3)),

      React.createElement(Text, { style: s.sectionEyebrow }, tr(proc.eyebrow)),
      React.createElement(Text, { style: s.sectionTitle }, tr(proc.title)),
      ...t.process.steps[lang].map((step, i) =>
        React.createElement(
          View,
          { key: i, style: s.step, wrap: false },
          React.createElement(Text, { style: s.stepNum }, String(i + 1).padStart(2, "0")),
          React.createElement(
            View,
            { style: s.stepBody },
            React.createElement(Text, { style: s.stepTitle }, step.title),
            React.createElement(Text, { style: s.stepText }, step.text),
          ),
        ),
      ),
      React.createElement(Footer),
    ),

    // PRODUCTS
    React.createElement(
      Page,
      { size: "A4", style: s.page },
      React.createElement(ColorBand),
      React.createElement(Text, { style: s.sectionEyebrow }, tr(t.products.eyebrow)),
      React.createElement(Text, { style: [s.sectionTitle, { marginBottom: 18 }] }, tr(t.products.title)),
      ...prods.map((p, i) =>
        React.createElement(
          View,
          { key: i, style: s.product, wrap: false },
          React.createElement(
            View,
            { style: s.prodHead },
            React.createElement(
              View,
              null,
              React.createElement(Text, { style: s.prodOrigin }, p.origin),
              React.createElement(Text, { style: s.prodName }, p.name),
            ),
            React.createElement(Text, { style: s.prodGrade }, p.grade),
          ),
          React.createElement(
            View,
            { style: s.tagRow },
            p.tags.map((tag, j) => React.createElement(Text, { key: j, style: s.tag }, tag)),
          ),
          React.createElement(Text, { style: s.detailLabel }, pl.profile[lang]),
          React.createElement(Text, { style: s.detailText }, p.profile),
          React.createElement(Text, { style: s.detailLabel }, pl.process[lang]),
          React.createElement(Text, { style: s.detailText }, p.process),
          React.createElement(Text, { style: s.detailLabel }, pl.brewing[lang]),
          React.createElement(Text, { style: s.detailText }, p.brewing),
        ),
      ),
      React.createElement(Footer),
    ),

    // CERTS + SUSTAINABILITY + CONTACT
    React.createElement(
      Page,
      { size: "A4", style: s.page },
      React.createElement(ColorBand),
      React.createElement(Text, { style: s.sectionEyebrow }, tr(t.certs.eyebrow)),
      React.createElement(Text, { style: s.sectionTitle }, tr(t.certs.title)),
      React.createElement(Text, { style: [s.para, { marginBottom: 12 }] }, tr(t.certs.subtitle)),
      React.createElement(
        View,
        { style: [s.chipRow, { marginBottom: 24 }] },
        certs.map((c, i) => React.createElement(Text, { key: i, style: s.chip }, c)),
      ),

      React.createElement(Text, { style: s.sectionEyebrow }, tr(t.sustain.eyebrow)),
      React.createElement(Text, { style: s.sectionTitle }, tr(t.sustain.title)),
      ...pillars.map((p, i) =>
        React.createElement(
          View,
          { key: i, style: s.pillar, wrap: false },
          React.createElement(Text, { style: s.pillarTitle }, p.title),
          React.createElement(Text, { style: s.detailText }, p.text),
        ),
      ),
      React.createElement(Text, { style: [s.quote, { marginTop: 8, marginBottom: 24 }] }, tr(t.sustain.imgQuote)),

      React.createElement(Text, { style: s.sectionEyebrow }, tr(t.contact.eyebrow)),
      React.createElement(Text, { style: s.sectionTitle }, tr(t.contact.title)),
      React.createElement(Text, { style: [s.para, { marginBottom: 4 }] }, tr(t.contact.body)),
      React.createElement(
        View,
        { style: s.contactBox },
        details.map((d, i) =>
          React.createElement(
            View,
            { key: i, style: s.contactRow },
            React.createElement(Text, { style: s.contactLabel }, d.label),
            React.createElement(Text, { style: s.contactValue }, d.value),
          ),
        ),
      ),
      React.createElement(Footer),
    ),
  )
}

export function ExportPdfButton({ className }: { className?: string }) {
  const { lang } = useLanguage()
  const [busy, setBusy] = useState<Lang | null>(null)
  const [open, setOpen] = useState(false)
  const wrapRef = useRef<HTMLDivElement>(null)

  // Close the language menu when clicking outside of it
  useEffect(() => {
    if (!open) return
    function handleClickOutside(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [open])

  async function handleDownload(target: Lang) {
    setOpen(false)
    if (busy) return
    setBusy(target)
    try {
      const { pdf } = await import("@react-pdf/renderer")
      const doc = await buildDocument(target)
      const blob = await pdf(doc).toBlob()
      const url = URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download =
        target === "id" ? "PT-Elgrano-Garuda-Angkasa-Profil-Perusahaan.pdf" : "PT-Elgrano-Garuda-Angkasa-Company-Profile.pdf"
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
    } catch (err) {
      console.log("[v0] PDF generation error:", err)
    } finally {
      setBusy(null)
    }
  }

  return (
    <div className="relative" ref={wrapRef}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        disabled={busy !== null}
        aria-haspopup="true"
        aria-expanded={open}
        aria-label={ui.download[lang]}
        className={
          className ??
          "inline-flex items-center gap-2 border border-amber bg-amber px-4 py-2 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-cream transition-colors hover:bg-transparent hover:text-amber disabled:opacity-60"
        }
      >
        <DownloadIcon />
        {busy ? ui.generating[busy] : ui.download[lang]}
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 top-full z-50 mt-1.5 min-w-[190px] overflow-hidden rounded-sm border border-amber/30 bg-cream shadow-lg"
        >
          <p className="border-b border-amber/15 px-4 py-2 font-mono text-[0.6rem] uppercase tracking-[0.1em] text-coffee/70">
            {ui.choose[lang]}
          </p>
          <button
            type="button"
            role="menuitem"
            onClick={() => handleDownload("id")}
            className="block w-full px-4 py-2.5 text-left font-mono text-[0.68rem] uppercase tracking-[0.08em] text-espresso transition-colors hover:bg-amber/10"
          >
            🇮🇩 {ui.langId[lang]}
          </button>
          <button
            type="button"
            role="menuitem"
            onClick={() => handleDownload("en")}
            className="block w-full px-4 py-2.5 text-left font-mono text-[0.68rem] uppercase tracking-[0.08em] text-espresso transition-colors hover:bg-amber/10"
          >
            🇬🇧 {ui.langEn[lang]}
          </button>
        </div>
      )}
    </div>
  )
}

function DownloadIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  )
}

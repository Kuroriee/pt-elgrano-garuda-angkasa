"use client"

import type React from "react"
import { useState } from "react"
import { useLanguage, translations as t } from "@/lib/i18n"

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xbdnjvww"

export function Contact() {
  const { lang } = useLanguage()
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")
  const f = t.contact.fields
  const details = t.contact.details[lang]

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("sending")

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      })

      if (response.ok) {
        setStatus("success")
        form.reset()
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <section id="contact" className="bg-mint px-6 py-28 md:px-12">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <span className="mb-4 block font-mono text-[0.68rem] uppercase tracking-[0.2em] text-amber">
            {t.contact.eyebrow[lang]}
          </span>
          <h2 className="mb-4 font-heading text-4xl font-medium text-espresso">{t.contact.title[lang]}</h2>
          <p className="mb-8 max-w-md text-sm leading-relaxed text-coffee/80">{t.contact.body[lang]}</p>
          <div className="space-y-4">
            {details.map((detail) => (
              <div key={detail.label} className="flex gap-4">
                <span className="min-w-20 pt-0.5 font-mono text-[0.65rem] uppercase tracking-[0.1em] text-amber">
                  {detail.label}
                </span>
                <span className="text-sm leading-relaxed text-espresso">{detail.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          {status === "success" ? (
            <div className="flex h-full min-h-64 flex-col items-start justify-center border border-amber/30 bg-cream p-8">
              <p className="mb-2 font-heading text-2xl text-amber">{t.contact.successTitle[lang]}</p>
              <p className="text-sm leading-relaxed text-coffee/80">{t.contact.successBody[lang]}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label={f.company[lang]}>
                  <input required name="perusahaan" type="text" className={inputClass} placeholder={f.companyPh[lang]} />
                </Field>
                <Field label={f.name[lang]}>
                  <input required name="nama_kontak" type="text" className={inputClass} placeholder={f.namePh[lang]} />
                </Field>
              </div>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label={f.email[lang]}>
                  <input required name="email" type="email" className={inputClass} placeholder={f.emailPh[lang]} />
                </Field>
                <Field label={f.country[lang]}>
                  <input required name="negara" type="text" className={inputClass} placeholder={f.countryPh[lang]} />
                </Field>
              </div>
              <div className="mt-4">
                <Field label={f.product[lang]}>
                  <select name="produk" required className={inputClass} defaultValue="">
                    <option value="" disabled>
                      {f.productPh[lang]}
                    </option>
                    {t.contact.productOptions[lang].map((opt) => (
                      <option key={opt}>{opt}</option>
                    ))}
                  </select>
                </Field>
              </div>
              <div className="mt-4">
                <Field label={f.message[lang]}>
                  <textarea name="pesan" rows={4} className={`${inputClass} resize-none`} placeholder={f.messagePh[lang]} />
                </Field>
              </div>

              {status === "error" && (
                <p className="mt-4 text-sm text-red-600">
                  {lang === "id"
                    ? "Terjadi kesalahan saat mengirim. Silakan coba lagi."
                    : "Something went wrong. Please try again."}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-6 w-full bg-amber py-4 font-mono text-xs uppercase tracking-[0.15em] text-cream transition-opacity hover:opacity-90 disabled:opacity-60"
              >
                {status === "sending" ? (lang === "id" ? "Mengirim..." : "Sending...") : t.contact.submit[lang]}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

const inputClass =
  "w-full border border-amber/30 bg-cream px-4 py-3 font-sans text-sm text-espresso outline-none transition-colors placeholder:text-coffee/40 focus:border-amber"

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block font-mono text-[0.65rem] uppercase tracking-[0.1em] text-amber">{label}</span>
      {children}
    </label>
  )
}

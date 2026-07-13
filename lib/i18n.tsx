"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

export type Lang = "id" | "en"

type Dict = typeof translations

export const translations = {
  nav: {
    story: { id: "Kisah Kami", en: "Our Story" },
    production: { id: "Produksi", en: "Production" },
    products: { id: "Produk", en: "Products" },
    sustainability: { id: "Keberlanjutan", en: "Sustainability" },
    inquiry: { id: "Permintaan Ekspor", en: "Export Inquiry" },
    inquiryShort: { id: "Permintaan", en: "Inquiry" },
  },
  hero: {
    location: { id: "Sumatra, Indonesia — Sejak 2004", en: "Sumatra, Indonesia — Est. 2004" },
    titleA: { id: "Dari Dataran Tinggi Vulkanik ", en: "From the Volcanic Highlands of " },
    titleEm: { id: "Sumatra", en: "Sumatra" },
    titleB: { id: " — Hingga ke Cangkir Anda.", en: " — To Your Cup." },
    body: {
      id: "Arabika dan Robusta kelas specialty, bersumber dari 500+ petani kecil, diproses dengan presisi, dan diekspor ke pembeli pilihan di lebih dari 30 negara.",
      en: "Specialty-grade Arabica and Robusta, sourced from 500+ smallholder farmers, processed with precision, and exported to discerning buyers across 30+ countries.",
    },
    cta: { id: "Mulai Kemitraan Ekspor →", en: "Begin Export Partnership →" },
    quote: {
      id: "\u201CKopi terkaya di bumi tidak datang dari mesin. Ia datang dari tanah, kesabaran, dan Sumatra.\u201D",
      en: "\u201CThe richest coffee on earth doesn't come from a machine. It comes from soil, patience, and Sumatra.\u201D",
    },
    quoteBy: {
      id: "Haji Surya Darma, Kepala Produksi · PT Elgrano Garuda Angkasa",
      en: "Haji Surya Darma, Head of Production · PT Elgrano Garuda Angkasa",
    },
  },
  ticker: {
    items: {
      id: [
        "Specialty Grade 1",
        "Proses Giling Basah",
        "Perdagangan Langsung",
        "FOB / CIF Tersedia",
        "Tersertifikasi Q-Grader",
        "Fair Trade",
        "30+ Pasar Ekspor",
        "500+ Petani Mitra",
      ],
      en: [
        "Grade 1 Specialty",
        "Wet-Hulled Process",
        "Direct Trade",
        "FOB / CIF Available",
        "Q-Grader Certified",
        "Fair Trade",
        "30+ Export Markets",
        "500+ Farmer Partners",
      ],
    },
  },
  stats: {
    items: {
      id: [
        { num: "20+", label: "Tahun Produksi" },
        { num: "500+", label: "Kemitraan Petani" },
        { num: "30+", label: "Tujuan Ekspor" },
        { num: "2.400t", label: "Kapasitas Ekspor Tahunan" },
      ],
      en: [
        { num: "20+", label: "Years of Production" },
        { num: "500+", label: "Farmer Partnerships" },
        { num: "30+", label: "Export Destinations" },
        { num: "2,400t", label: "Annual Export Capacity" },
      ],
    },
  },
  story: {
    eyebrow: { id: "Kisah Kami", en: "Our Story" },
    titleA: { id: "Kami tidak mengekspor ", en: "We don't export " },
    titleEm: { id: "kopi.", en: "coffee." },
    titleB: { id: " Kami mengekspor kisah tanah Sumatra.", en: " We export the story of Sumatran soil." },
    quote: {
      id: "\u201CSetiap biji menyimpan ingatan tentang tanah vulkanik, kabut dataran tinggi, dan tangan yang memanennya.\u201D",
      en: "\u201CEvery bean carries the memory of volcanic earth, highland mist, and the hands that harvested it.\u201D",
    },
    p1: {
      id: "PT Elgrano Garuda Angkasa didirikan atas satu keyakinan sederhana: kopi terbaik dunia tumbuh di dataran tinggi Sumatra — ia hanya membutuhkan jembatan menuju para roaster terbaik dunia.",
      en: "PT Elgrano Garuda Angkasa was founded on a simple conviction: the world's finest coffee grows in Sumatra's highlands — it simply needed a bridge to the world's best roasters.",
    },
    p2: {
      id: "Selama lebih dari dua dekade, kami membangun hubungan langsung dengan petani kecil di Aceh, Tapanuli Utara, dan Sumatra Barat, menciptakan rantai pasok yang dapat dilacak dan menguntungkan setiap tangan yang menyentuhnya.",
      en: "Over two decades, we've built direct relationships with smallholder farmers across Aceh, North Tapanuli, and West Sumatra, creating a traceable supply chain that benefits every hand it touches.",
    },
    p3: {
      id: "Kini, kami memasok roaster specialty, importir, dan rumah dagang di Eropa, Amerika Utara, Asia-Pasifik, dan Timur Tengah — bukan sebagai pemasok komoditas, tetapi sebagai mitra produksi jangka panjang.",
      en: "Today, we supply specialty roasters, importers, and trading houses across Europe, North America, Asia-Pacific, and the Middle East — not as a commodity supplier, but as a long-term production partner.",
    },
  },
  process: {
    eyebrow: { id: "Dari Kebun ke Pengiriman", en: "From Farm to Shipment" },
    title: { id: "Perjalanan Produksi", en: "The Production Journey" },
    steps: {
      id: [
        { title: "Penanaman", text: "Ditanam di bawah naungan pada ketinggian 1.200–1.600m. Tanah vulkanik, curah hujan sepanjang tahun. Bermitra dengan petani kecil bersertifikat standar GAP." },
        { title: "Panen Selektif", text: "Hanya ceri merah matang yang dipetik dengan tangan saat musim puncak. Tanpa strip harvesting. Beberapa kali petik per pohon menjaga konsistensi grade." },
        { title: "Proses Basah", text: "Ceri dikupas dalam 12 jam setelah panen. Tangki fermentasi mengatur perkembangan rasa untuk profil cangkir yang bersih dan kompleks." },
        { title: "Giling Basah", text: "Giling Basah — proses khas Sumatra. Penggilingan pada kadar air tinggi menciptakan karakter full-body dan rendah asam yang khas." },
        { title: "Penjemuran", text: "Biji dijemur di atas para-para hingga kadar air 11–12%. Dibalik manual untuk pengeringan merata dan karakter earthy khas Sumatra." },
        { title: "Sortir & Grading", text: "Meja densitas, ukuran saringan, dan sortir tangan menghilangkan cacat. Q-Grader meng-cupping setiap lot untuk menyertifikasi kualitas Grade 1 specialty." },
        { title: "Pengemasan & Penyimpanan", text: "Dikemas vakum atau karung goni berlapis GrainPro di gudang berpendingin untuk menjaga kesegaran hingga pengiriman." },
        { title: "Ekspor & Pengiriman", text: "Syarat FOB dan CIF ke 30+ pasar. Dokumentasi lengkap, keterlacakan, dan pemuatan kontainer dari Pelabuhan Belawan." },
      ],
      en: [
        { title: "Cultivation", text: "Shade-grown at 1,200–1,600m altitude. Volcanic soil, year-round rainfall. Partnered with certified smallholders using GAP standards." },
        { title: "Selective Harvest", text: "Only red-ripe cherries hand-picked during peak season. No strip harvesting. Multiple passes per tree ensure grade consistency." },
        { title: "Wet Processing", text: "Cherries pulped within 12 hours of harvest. Fermentation tanks control flavor development for clean, complex cup profiles." },
        { title: "Wet Hulling", text: "Giling Basah — Sumatra's signature process. Hulling at high moisture creates the distinctive full-body, low-acid character." },
        { title: "Sun Drying", text: "Beans dried on raised patios to 11–12% moisture. Hand-raked for even drying and the deep, earthy Sumatran character." },
        { title: "Sorting & Grading", text: "Density tables, screen sizing, and hand-sorting remove defects. Q-Graders cup every lot to certify Grade 1 specialty quality." },
        { title: "Bagging & Storage", text: "Vacuum-packed or GrainPro-lined jute bags in climate-controlled warehouses to preserve freshness until shipment." },
        { title: "Export & Shipment", text: "FOB and CIF terms to 30+ markets. Full documentation, traceability, and container loading from the Port of Belawan." },
      ],
    },
  },
  products: {
    eyebrow: { id: "Koleksi", en: "The Collection" },
    title: { id: "Asal yang Kami Ekspor", en: "Origins We Export" },
    readMore: { id: "Baca Penjelasan Lengkap", en: "Read Full Profile" },
    readLess: { id: "Tutup", en: "Show Less" },
    labels: {
      profile: { id: "Profil Rasa", en: "Flavor Profile" },
      process: { id: "Proses & Asal", en: "Process & Origin" },
      brewing: { id: "Rekomendasi Penyajian", en: "Brewing Recommendation" },
    },
    items: {
      id: [
        {
          origin: "Aceh, Dataran Tinggi Gayo",
          name: "Gayo Arabika",
          grade: "Grade 1",
          notes: "Body sirup dengan nuansa cokelat hitam, gula merah, dan aftertaste herbal menyerupai cedar. Asam rendah, bersih.",
          profile:
            "Gayo Arabika menghadirkan cangkir yang tebal dan bersirup dengan kemanisan gula merah yang dalam, lapisan cokelat hitam, dan rempah hangat. Keasamannya rendah dan lembut, ditutup dengan aftertaste herbal menyerupai cedar yang panjang dan menenangkan — ciri khas kopi dataran tinggi Gayo yang dicari roaster specialty dunia.",
          process:
            "Ditanam di bawah naungan pada ketinggian 1.400m di tanah vulkanik Gayo. Dipetik selektif hanya pada ceri merah matang, lalu diproses dengan metode Giling Basah khas Sumatra yang memberi karakter full-body. Disertifikasi cupping SCA 84+ oleh Q-Grader kami, dengan keterlacakan penuh hingga ke desa petani.",
          brewing:
            "Ideal untuk pour-over dan French press di mana body dan kemanisannya bersinar. Juga sangat baik sebagai basis espresso single-origin untuk crema yang kaya dan aftertaste cokelat yang panjang.",
          tags: ["Giling Basah", "1.400m", "SCA 84+"],
        },
        {
          origin: "Tapanuli Utara",
          name: "Mandheling",
          grade: "Grade 1",
          notes: "Profil khas Sumatra — full-body, earthy dan pedas dengan nuansa tembakau dan kakao gelap. Berani dan persisten.",
          profile:
            "Mandheling adalah definisi kopi Sumatra klasik: berani, full-body, dan earthy. Nuansa tembakau, kakao gelap, dan rempah tanah berpadu dengan keasaman yang sangat rendah, menghasilkan cangkir yang berat dan persisten dengan aftertaste yang melekat lama di langit-langit.",
          process:
            "Berasal dari petani kecil di Tapanuli Utara pada ketinggian 1.200m. Diproses Giling Basah pada kadar air tinggi — teknik yang menciptakan karakter rendah asam dan body penuh yang menjadi ciri khasnya. Setiap lot di-cupping untuk menyertifikasi kualitas SCA 83+.",
          brewing:
            "Paling kuat pada metode immersion seperti French press dan tubruk yang menonjolkan body-nya. Pilihan utama untuk blend espresso gelap yang membutuhkan kedalaman dan kepekatan.",
          tags: ["Giling Basah", "1.200m", "SCA 83+"],
        },
        {
          origin: "Lintong, Sumatra Barat",
          name: "Lintong Green",
          grade: "Green Spec",
          notes: "Green bean specialty mentah untuk craft roaster. Manis seimbang, asam stone-fruit, dan body berat yang halus.",
          profile:
            "Green bean specialty mentah yang dirancang untuk craft roaster yang ingin mengontrol penuh profil sangrai mereka. Berpotensi menghasilkan kemanisan seimbang, keasaman stone-fruit yang cerah, dan body berat namun halus saat disangrai dengan tepat.",
          process:
            "Ditanam di ketinggian 1.500m di kawasan Lintong, Sumatra Barat. Triple-picked — disortir tiga kali untuk menghilangkan cacat sebelum dikemas. Dikirim sebagai green bean dalam karung berlapis GrainPro untuk menjaga kadar air dan kesegaran selama pengiriman.",
          brewing:
            "Ditujukan untuk roaster: tampil baik dari sangrai light hingga medium. Light roast menonjolkan keasaman stone-fruit, sementara medium roast memperkuat body dan kemanisan karamel.",
          tags: ["Green Bean", "1.500m", "Triple-Picked"],
        },
        {
          origin: "Lampung & Bengkulu",
          name: "Fine Robusta",
          grade: "Grade 1",
          notes: "Robusta washed premium dengan crema tebal, intensitas nutty-cokelat, dan kepahitan rendah. Ideal untuk blend espresso.",
          profile:
            "Bukan Robusta komoditas biasa — ini Fine Robusta yang diproses dengan standar specialty. Menghasilkan crema yang sangat tebal, intensitas nutty dan cokelat yang dalam, dengan kepahitan yang jauh lebih rendah dari Robusta pada umumnya. Kandungan kafein tinggi memberi tendangan yang kuat.",
          process:
            "Dari Lampung dan Bengkulu pada ketinggian sekitar 800m. Diproses Washed (basah penuh) — tidak seperti Robusta biasa — untuk membersihkan rasa dan menghilangkan nuansa kasar. Disertifikasi sebagai Fine Robusta Grade 1.",
          brewing:
            "Bahan rahasia untuk blend espresso: menambah body, crema, dan daya tahan rasa dalam susu. Ideal dipadukan dengan Arabika untuk kopi susu dan blend komersial premium.",
          tags: ["Washed", "800m", "Fine Robusta"],
        },
      ],
      en: [
        {
          origin: "Aceh, Gayo Highlands",
          name: "Gayo Arabica",
          grade: "Grade 1",
          notes: "Syrupy body with notes of dark chocolate, brown sugar, and a herbaceous, cedar-like finish. Low acidity, clean aftertaste.",
          profile:
            "Gayo Arabica delivers a thick, syrupy cup with deep brown-sugar sweetness, layers of dark chocolate, and warm spice. Its acidity is low and gentle, closing with a long, soothing herbaceous, cedar-like finish — the signature of Gayo highland coffee sought after by specialty roasters worldwide.",
          process:
            "Shade-grown at 1,400m in Gayo's volcanic soil. Selectively picked at peak ripeness, then wet-hulled using Sumatra's signature Giling Basah method that gives it a full body. Certified SCA 84+ in cupping by our Q-Graders, with full traceability down to the farmer's village.",
          brewing:
            "Ideal for pour-over and French press where its body and sweetness shine. Also excellent as a single-origin espresso base for rich crema and a long chocolate finish.",
          tags: ["Wet-Hulled", "1,400m", "SCA 84+"],
        },
        {
          origin: "North Tapanuli",
          name: "Mandheling",
          grade: "Grade 1",
          notes: "The classic Sumatran profile — full-bodied, earthy and spicy with tobacco and dark cocoa. Bold and lingering.",
          profile:
            "Mandheling is the definition of classic Sumatran coffee: bold, full-bodied, and earthy. Notes of tobacco, dark cocoa, and earthy spice combine with very low acidity to produce a heavy, lingering cup with an aftertaste that clings to the palate.",
          process:
            "Sourced from smallholder farmers in North Tapanuli at 1,200m. Wet-hulled at high moisture — the technique that creates its hallmark low-acid, full-bodied character. Every lot is cupped to certify SCA 83+ quality.",
          brewing:
            "Strongest in immersion methods like French press and tubruk that emphasize its body. A top pick for dark espresso blends that need depth and intensity.",
          tags: ["Wet-Hulled", "1,200m", "SCA 83+"],
        },
        {
          origin: "Lintong, West Sumatra",
          name: "Lintong Green",
          grade: "Green Spec",
          notes: "Unroasted specialty greens for craft roasters. Balanced sweetness, stone-fruit acidity, and a smooth heavy body.",
          profile:
            "Unroasted specialty greens designed for craft roasters who want full control of their roast profile. Capable of balanced sweetness, bright stone-fruit acidity, and a heavy yet smooth body when roasted with precision.",
          process:
            "Grown at 1,500m in the Lintong region of West Sumatra. Triple-picked — sorted three times to remove defects before bagging. Shipped as green beans in GrainPro-lined sacks to protect moisture and freshness in transit.",
          brewing:
            "Aimed at roasters: performs well from light to medium roast. Light roast highlights the stone-fruit acidity, while medium roast amplifies body and caramel sweetness.",
          tags: ["Green Beans", "1,500m", "Triple-Picked"],
        },
        {
          origin: "Lampung & Bengkulu",
          name: "Fine Robusta",
          grade: "Grade 1",
          notes: "Premium washed Robusta with deep crema, nutty-chocolate intensity, and low bitterness. Ideal for espresso blends.",
          profile:
            "Not your ordinary commodity Robusta — this is Fine Robusta processed to specialty standards. It produces an exceptionally thick crema, deep nutty and chocolate intensity, with far lower bitterness than typical Robusta. Its high caffeine content delivers a powerful kick.",
          process:
            "From Lampung and Bengkulu at around 800m. Fully washed — unlike standard Robusta — to clean up the flavor and remove harsh notes. Certified as Grade 1 Fine Robusta.",
          brewing:
            "The secret ingredient for espresso blends: it adds body, crema, and flavor persistence through milk. Ideal blended with Arabica for milk-based coffees and premium commercial blends.",
          tags: ["Washed", "800m", "Fine Robusta"],
        },
      ],
    },
  },
  certs: {
    eyebrow: { id: "Kredensial", en: "Credentials" },
    title: { id: "Tersertifikasi di setiap langkah.", en: "Certified at every step." },
    subtitle: {
      id: "Diaudit secara independen dan dapat dilacak dari ceri hingga kontainer — kualitas yang dapat Anda dokumentasikan untuk pembeli Anda.",
      en: "Independently audited and traceable from the cherry to the container — quality you can document for your buyers.",
    },
    items: {
      id: ["Fair Trade Certified", "Rainforest Alliance", "Organik (USDA / EU)", "Tersertifikasi Q-Grader", "ISO 22000", "HACCP", "UTZ / RFA", "Direct Trade Verified"],
      en: ["Fair Trade Certified", "Rainforest Alliance", "Organic (USDA / EU)", "Q-Grader Certified", "ISO 22000", "HACCP", "UTZ / RFA", "Direct Trade Verified"],
    },
  },
  sustain: {
    eyebrow: { id: "Keberlanjutan", en: "Sustainability" },
    title: {
      id: "Kopi yang memberi kembali kepada dataran tinggi asalnya.",
      en: "Coffee that gives back to the highlands it came from.",
    },
    pillars: {
      id: [
        { title: "Kesejahteraan Petani", text: "Pembayaran langsung di atas harga pasar, pembiayaan pra-panen, dan kontrak jangka panjang yang memungkinkan 500+ keluarga petani kecil berinvestasi pada lahan dan masa depan mereka." },
        { title: "Lahan Regeneratif", text: "Penanaman di bawah naungan yang melindungi keanekaragaman hayati dataran tinggi, mencegah erosi di lereng vulkanik, dan menjaga tanah tetap hidup untuk generasi mendatang." },
        { title: "Keterlacakan Penuh", text: "Setiap lot dipetakan ke desa dan pengepulnya. Pembeli menerima dokumentasi asal lengkap, dari koordinat GPS hingga skor cupping." },
      ],
      en: [
        { title: "Farmer Prosperity", text: "Above-market direct payments, pre-harvest financing, and long-term contracts that let 500+ smallholder families invest in their land and futures." },
        { title: "Regenerative Land", text: "Shade-grown cultivation that protects highland biodiversity, prevents erosion on volcanic slopes, and keeps soils alive for generations." },
        { title: "Full Traceability", text: "Every lot is mapped to its village and collector. Buyers receive complete origin documentation, from GPS coordinates to cupping scores." },
      ],
    },
    imgQuote: {
      id: "\u201CKetika petani sejahtera, cangkir mengikuti. Kami mengukur keberhasilan satu keluarga pada satu waktu.\u201D",
      en: "\u201CWhen the farmer thrives, the cup follows. We measure success one family at a time.\u201D",
    },
  },
  contact: {
    eyebrow: { id: "Permintaan Ekspor", en: "Export Inquiry" },
    title: { id: "Mari bangun kemitraan.", en: "Let's build a partnership." },
    body: {
      id: "Beri tahu kami tentang kebutuhan volume, pasar tujuan, dan syarat yang Anda inginkan. Tim ekspor kami merespons permintaan yang memenuhi syarat dalam dua hari kerja.",
      en: "Tell us about your volume requirements, target markets, and preferred terms. Our export team responds to qualified inquiries within two business days.",
    },
    details: {
      id: [
        { label: "Kantor", value: "Jl. Bromo Ujung Gg. Sedar No. 9A, Binjai, Kec. Medan Denai, Kota Medan, Sumatera Utara 20228" },
        { label: "Email", value: "elgranogaruda@gmail.com" },
        { label: "Telepon", value: "+62 813 9604 1308" },
        { label: "Pelabuhan", value: "Belawan International Container Terminal" },
      ],
      en: [
        { label: "Office", value: "Jl. Bromo Ujung Gg. Sedar No. 9A, Binjai, Medan Denai, Medan City, North Sumatra 20228" },
        { label: "Email", value: "elgranogaruda@gmail.com" },
        { label: "Phone", value: "+62 813 9604 1308" },
        { label: "Port", value: "Belawan International Container Terminal" },
      ],
    },
    fields: {
      company: { id: "Perusahaan", en: "Company" },
      companyPh: { id: "Nama perusahaan Anda", en: "Your company" },
      name: { id: "Nama Kontak", en: "Contact Name" },
      namePh: { id: "Nama lengkap", en: "Full name" },
      email: { id: "Email", en: "Email" },
      emailPh: { id: "anda@perusahaan.com", en: "you@company.com" },
      country: { id: "Negara", en: "Country" },
      countryPh: { id: "Pasar tujuan", en: "Destination market" },
      product: { id: "Produk yang Diminati", en: "Product Interest" },
      productPh: { id: "Pilih produk", en: "Select a product" },
      message: { id: "Pesan", en: "Message" },
      messagePh: { id: "Estimasi volume, syarat (FOB/CIF), dan tenggat waktu...", en: "Estimated volume, terms (FOB/CIF), and timeline..." },
    },
    productOptions: {
      id: ["Gayo Arabika", "Mandheling", "Lintong Green Bean", "Fine Robusta", "Beberapa / Blend"],
      en: ["Gayo Arabica", "Mandheling", "Lintong Green Beans", "Fine Robusta", "Multiple / Blend"],
    },
    submit: { id: "Kirim Permintaan Ekspor", en: "Submit Export Inquiry" },
    successTitle: { id: "Permintaan diterima.", en: "Inquiry received." },
    successBody: {
    id: "Terima kasih atas minat Anda pada PT Elgrano Garuda Angkasa. Tim ekspor kami akan menghubungi Anda dalam dua hari kerja.",
    en: "Thank you for your interest in PT Elgrano Garuda Angkasa. Our export team will be in touch within two business days.",
    },
  },
  footer: {
    rights: { id: "Medan, Sumatra, Indonesia", en: "Medan, Sumatra, Indonesia" },
    story: { id: "Kisah Kami", en: "Our Story" },
    products: { id: "Produk", en: "Products" },
    contact: { id: "Kontak", en: "Contact" },
  },
} as const

type LangContext = {
  lang: Lang
  setLang: (l: Lang) => void
  toggle: () => void
}

const LanguageContext = createContext<LangContext | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("id")
  const toggle = () => setLang((prev) => (prev === "id" ? "en" : "id"))
  return <LanguageContext.Provider value={{ lang, setLang, toggle }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider")
  return ctx
}

export type { Dict }

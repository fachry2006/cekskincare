import React from "react";

// Tailwind-first, single-file React component
// Drop into your project and render <SkincareLanding />

export default function SkincareLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-amber-50 text-zinc-800">
      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-zinc-200">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <a href="#hero" className="font-extrabold tracking-tight text-xl sm:text-2xl">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-amber-600">Glow</span>
            Guide
          </a>
          <ul className="hidden md:flex gap-6 text-sm font-medium text-zinc-700">
            <li><a className="hover:text-rose-600" href="#pengertian">Pengertian</a></li>
            <li><a className="hover:text-rose-600" href="#jenis-kulit">Jenis Kulit</a></li>
            <li><a className="hover:text-rose-600" href="#rutinitas">Rutinitas</a></li>
            <li><a className="hover:text-rose-600" href="#bahan-aktif">Bahan Aktif</a></li>
            <li><a className="hover:text-rose-600" href="#faq">FAQ</a></li>
          </ul>
          <a href="#cta" className="hidden md:inline-flex items-center gap-2 rounded-xl px-4 py-2 bg-zinc-900 text-white text-sm font-semibold shadow-sm hover:shadow md:active:scale-[.99] transition">
            Mulai Gratis
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section id="hero" className="relative overflow-hidden">
        <div className="absolute -top-32 -left-20 h-72 w-72 rounded-full bg-rose-200/60 blur-3xl" />
        <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-amber-200/60 blur-3xl" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid md:grid-cols-2 items-center gap-10">
            <div>
              <p className="inline-flex items-center rounded-full border border-rose-200 bg-white px-3 py-1 text-xs font-medium text-rose-700 shadow-sm">Skincare 101</p>
              <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">
                Skincare itu apa sih?
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-amber-600">Perawatan kulit, simpel & efektif.</span>
              </h1>
              <p className="mt-4 text-base sm:text-lg text-zinc-600">
                Skincare adalah rangkaian perawatan untuk menjaga kesehatan <em>skin barrier</em>, mengatasi masalah kulit, dan mencegah kerusakan jangka panjang (terutama dari matahari).
                Kuncinya: konsisten, sesuai jenis kulit, dan tidak berlebihan.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a href="#rutinitas" className="inline-flex justify-center rounded-xl bg-rose-600 px-5 py-3 text-white font-semibold shadow hover:shadow-md active:scale-[.99] transition">Lihat Rutinitas Dasar</a>
                <a href="#bahan-aktif" className="inline-flex justify-center rounded-xl border border-zinc-300 bg-white px-5 py-3 text-zinc-800 font-semibold hover:border-zinc-400 active:scale-[.99] transition">Pelajari Bahan Aktif</a>
              </div>
              <p className="mt-3 text-xs text-zinc-500">Butuh ringkas? Ikuti langkah 3—4—5: cuci muka, lembapkan, sunscreen.</p>
            </div>

            <div className="relative md:h-[420px]">
              <div className="absolute inset-0 -rotate-2 rounded-3xl bg-gradient-to-br from-white to-rose-50 border border-zinc-200 shadow-xl" />
              <div className="relative m-2 rounded-3xl border border-zinc-200 bg-white/80 backdrop-blur p-6 shadow-xl">
                <div className="grid grid-cols-3 gap-3">
                  {[
                    {title: "Hydrating", desc: "Kulit terasa kenyal & lembap."},
                    {title: "Brightening", desc: "Tona lebih merata & cerah."},
                    {title: "Soothing", desc: "Reda kemerahan & iritasi."},
                    {title: "Oil-Control", desc: "Mengurangi kilap berlebih."},
                    {title: "Anti-Aging", desc: "Haluskan garis halus."},
                    {title: "Barrier Care", desc: "Perbaiki lapisan pelindung."},
                  ].map((c, i) => (
                    <div key={i} className="rounded-2xl border border-zinc-200 p-4 hover:shadow-sm transition">
                      <p className="text-xs font-semibold text-rose-600">{c.title}</p>
                      <p className="mt-1 text-xs text-zinc-600">{c.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 rounded-2xl bg-amber-50 border border-amber-200 p-4">
                  <p className="text-sm font-semibold">Golden rule</p>
                  <p className="text-xs text-zinc-600">Sunscreen tiap pagi, reapply 2—3 jam. Ini fondasi anti-aging terbaik.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pengertian */}
      <section id="pengertian" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-bold">Pengertian Skincare</h2>
            <p className="mt-3 text-zinc-600">
              Skincare mencakup kebiasaan harian untuk membersihkan, menutrisi, dan melindungi kulit. Tujuannya menjaga <strong>keseimbangan minyak–air</strong>,
              memperkuat <strong>skin barrier</strong>, dan mencegah kerusakan akibat sinar UV, polusi, serta stres. Rutinitas yang baik tidak harus rumit—yang penting <strong>konsisten</strong> dan <strong>tepat sasaran</strong>.
            </p>
            <ul className="mt-4 grid sm:grid-cols-3 gap-3 text-sm">
              {[
                "Bersihkan kotoran & sunscreen",
                "Hidrasi & kunci kelembapan",
                "Lindungi dari sinar UV",
              ].map((b, i) => (
                <li key={i} className="flex items-center gap-2 rounded-xl border border-zinc-200 bg-rose-50/40 px-3 py-2"><span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-rose-600 text-white text-[11px] font-bold">{i+1}</span>{b}</li>
              ))}
            </ul>
          </div>
          <aside className="rounded-3xl border border-rose-200 bg-rose-50 p-6 shadow-sm">
            <p className="text-sm font-semibold text-rose-700">Catatan singkat</p>
            <p className="mt-1 text-sm text-rose-800/80">Gunakan produk baru satu per satu (patch test), beri jeda 2–3 minggu untuk melihat hasilnya.</p>
          </aside>
        </div>
      </section>

      {/* Jenis kulit */}
      <section id="jenis-kulit" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <h2 className="text-2xl sm:text-3xl font-bold">Kenali Jenis Kulit</h2>
        <p className="mt-2 text-sm text-zinc-600">Pilih produk sesuai kondisi kulit agar hasilnya optimal.</p>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            {name: "Normal", tip: "Seimbang. Pakai rutinitas dasar + sunscreen."},
            {name: "Kering", tip: "Cari humektan (HA) + emolien (ceramide)."},
            {name: "Berminyak", tip: "Gunakan gel-cream, BHA untuk pori.", badge: "Sebum"},
            {name: "Kombinasi", tip: "Rawat T-zone berminyak, pipi kering terpisah."},
            {name: "Sensitif", tip: "Minim bahan aktif, fokus soothing (centella)."},
          ].map((k, i) => (
            <div key={i} className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="font-semibold">{k.name}</p>
                {k.badge && <span className="text-[10px] rounded-full bg-amber-100 px-2 py-1 border border-amber-200 text-amber-700">{k.badge}</span>}
              </div>
              <p className="mt-2 text-xs text-zinc-600">{k.tip}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Rutinitas Dasar */}
      <section id="rutinitas" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <h2 className="text-2xl sm:text-3xl font-bold">Rutinitas Dasar (Pagi & Malam)</h2>
            <a href="#cta" className="inline-flex items-center rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold hover:border-zinc-400">Unduh Checklist</a>
          </div>
          <div className="mt-6 grid md:grid-cols-5 gap-4">
            {[
              {num: 1, title: "Cleanser", note: "Pagi & malam. Pilih gentle."},
              {num: 2, title: "Hydrator/Toner", note: "Pulihkan pH & hidrasi."},
              {num: 3, title: "Serum", note: "Sasaran: jerawat, kusam, aging."},
              {num: 4, title: "Moisturizer", note: "Kunci hidrasi, perbaiki barrier."},
              {num: 5, title: "Sunscreen (AM)", note: "SPF 30+ broad spectrum."},
            ].map((s) => (
              <div key={s.num} className="rounded-2xl border border-zinc-200 bg-rose-50/40 p-4">
                <div className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-rose-600 text-white text-xs font-bold">{s.num}</div>
                <p className="mt-3 font-semibold">{s.title}</p>
                <p className="text-sm text-zinc-600">{s.note}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-zinc-500">Malam hari ganti sunscreen dengan treatment (mis. retinol) sesuai kebutuhan & toleransi.</p>
        </div>
      </section>

      {/* Bahan aktf */}
      <section id="bahan-aktif" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <h2 className="text-2xl sm:text-3xl font-bold">Bahan Aktif Populer</h2>
        <p className="mt-2 text-sm text-zinc-600">Sesuaikan bahan aktif dengan target masalah kulit.</p>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {[
            {name: "Niacinamide", work: "Meratakan warna kulit, atur sebum, menenangkan.", fit: "Hampir semua jenis kulit."},
            {name: "Salicylic Acid (BHA)", work: "Eksfoliasi dalam pori, kurangi komedo.", fit: "Kulit berminyak/berjerawat."},
            {name: "Hyaluronic Acid", work: "Tarik & tahan air di kulit.", fit: "Kulit kering atau dehidrasi."},
            {name: "Retinol", work: "Stimulasi kolagen, haluskan tekstur & garis.", fit: "Anti-aging, malam hari, bertahap."},
            {name: "Vitamin C", work: "Antioksidan, cerahkan & lindungi dari radikal bebas.", fit: "Pagi hari, SPF wajib."},
            {name: "Ceramide", work: "Perkuat barrier, kurangi TEWL.", fit: "Kulit kering/sensitif."},
          ].map((b, i) => (
            <div key={i} className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold">{b.name}</p>
              <p className="mt-1 text-sm text-zinc-600">Cara kerja: {b.work}</p>
              <p className="mt-1 text-xs text-zinc-500">Cocok untuk: {b.fit}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm">
          <p className="font-semibold">Tips kombinasi aman</p>
          <p className="text-zinc-700">Hindari menumpuk terlalu banyak aktif sekaligus. Contoh: kenalkan retinol bertahap; jangan langsung dipasangkan dengan AHA/BHA tiap malam.</p>
        </div>
      </section>

      {/* Mitos vs Fakta */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <h2 className="text-2xl sm:text-3xl font-bold">Mitos vs Fakta</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-4">
          {[
            {m: "Kulit berminyak tidak butuh moisturizer", f: "Tetap butuh! Pilih gel-cream ringan agar barrier terjaga."},
            {m: "Semakin tinggi SPF, tak perlu reapply", f: "Reapply tetap penting tiap 2–3 jam saat siang/terpapar matahari."},
            {m: "Retinol bikin kulit tipis", f: "Pemakaian benar justru menebalkan dermis & tingkatkan kolagen."},
            {m: "Produk mahal pasti lebih bagus", f: "Yang penting formulasi tepat & cocok untuk kulitmu."},
          ].map((x, i) => (
            <div key={i} className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold text-rose-600">Mitos</p>
              <p className="text-sm">{x.m}</p>
              <p className="mt-3 text-xs font-semibold text-emerald-700">Fakta</p>
              <p className="text-sm text-zinc-700">{x.f}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <h2 className="text-2xl sm:text-3xl font-bold">Pertanyaan yang Sering Ditanya</h2>
        <div className="mt-6 space-y-3">
          {[
            {q: "Urutan skincare yang benar?", a: "Pagi: Cleanser—Hydrator—Serum—Moisturizer—Sunscreen. Malam: Cleanser—Hydrator—Treatment—Moisturizer."},
            {q: "Berapa banyak sunscreen?", a: "Sekitar dua jari untuk wajah & leher. Reapply tiap 2–3 jam."},
            {q: "Kapan lihat hasil?", a: "Umumnya 4–8 minggu konsisten, tergantung masalah dan produk."},
            {q: "Boleh campur banyak aktif?", a: "Mulai satu per satu, dengarkan kulit. Prioritaskan barrier & SPF."},
          ].map((f, i) => (
            <details key={i} className="group rounded-2xl border border-zinc-200 bg-white p-4 open:shadow-sm">
              <summary className="cursor-pointer list-none font-semibold">
                <span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full border border-zinc-300 text-[11px] group-open:rotate-45 transition">+</span>
                {f.q}
              </summary>
              <p className="mt-2 text-sm text-zinc-600">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
        <div className="rounded-3xl border border-zinc-200 bg-gradient-to-br from-rose-100 to-amber-100 p-6 sm:p-10 text-center shadow-sm">
          <h3 className="text-2xl sm:text-3xl font-bold">Siap kulit sehat & glowing?</h3>
          <p className="mt-2 text-sm text-zinc-700">Dapatkan checklist PDF & rekomendasi rutin sesuai jenis kulitmu.</p>
          <form onSubmit={(e)=>e.preventDefault()} className="mt-6 mx-auto max-w-md flex gap-3">
            <input type="email" required placeholder="Email kamu" className="flex-1 rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm outline-none focus:border-rose-400" />
            <button className="rounded-xl bg-zinc-900 px-5 py-3 text-white text-sm font-semibold hover:shadow active:scale-[.99]">Dapatkan</button>
          </form>
          <p className="mt-2 text-[11px] text-zinc-500">Dengan menekan “Dapatkan”, kamu setuju dengan kebijakan privasi kami.</p>
        </div>
      </section>

      <footer className="border-t border-zinc-200 bg-white/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-zinc-600">
          <p>© {new Date().getFullYear()} GlowGuide. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-rose-600">Kebijakan Privasi</a>
            <a href="#" className="hover:text-rose-600">Ketentuan Layanan</a>
            <a href="#hero" className="hover:text-rose-600">Kembali ke atas</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

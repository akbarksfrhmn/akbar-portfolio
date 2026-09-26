# Akbar Portfolio

Portofolio Muhammad Akbar Kasyfurrahman menggunakan Next.js App Router, React, dan TypeScript. Mempertahankan desain bento, kartu semi-3D, dukungan layar kecil, dan preferensi pengurangan animasi.

## Menjalankan lokal

Gunakan Node.js 22 atau lebih baru.

```bash
npm ci
npm run dev
```

Buka http://localhost:3000.

## Validasi produksi

```bash
npm run typecheck
npm run build
npm start
```

## Deploy ke Vercel

1. Pada Vercel, pilih **Add New → Project** lalu impor repository `akbar-portfolio` dari GitHub.
2. Gunakan Framework Preset **Next.js** dan Root Directory **.**.
3. Pertahankan pengaturan build/output bawaan. Tidak diperlukan environment variable.
4. Klik **Deploy**. Push berikutnya ke branch produksi akan memicu deployment otomatis.

Referensi: https://vercel.com/docs/frameworks/full-stack/nextjs

## Mengubah konten

- `components/about.tsx`: profil, pendidikan, dan ringkasan.
- `components/projects.tsx`: empat proyek pilihan.
- `components/experience.tsx`: pengalaman kerja dan organisasi.
- `components/skills.tsx`: keahlian dan bahasa.
- `components/contact.tsx`: email, telepon, dan tautan sosial.
- `app/globals.css`: warna, layout, responsivitas, dan animasi.
- `components/tilt-card.tsx`: interaksi perspektif kartu.
- `app/layout.tsx`: metadata halaman.
- `public/cv-akbar.pdf`: CV yang dapat diunduh.

Konten utama dirender menggunakan Server Components; hanya efek kartu dan tahun footer menggunakan Client Components. Tidak ada backend, database, atau layanan Sites yang diperlukan. Font Google dimuat melalui CSS dengan font cadangan sistem.

Informasi dan CV pada folder `public/` ikut tersedia untuk pengunjung ketika proyek diterbitkan.

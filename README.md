# React Onboarding — Day 1 & Day 2
| Teknologi | Versi | Fungsi |
|---|---|---|
| React | 19.2.7 | Library utama untuk membangun UI |
| TypeScript | ~6.0.2 | Nambahin type-safety ke JavaScript |
| Vite | 8.1.1 | Dev server & build tool |
| Oxlint | 1.71.0 | Linter, buat jagain kualitas kode |

## 🗂️ Struktur Folder

```
├── react-onboarding-day-2/
    └── src/
        ├── App.tsx                  → tampilan utama Day 2
        ├── components/
        │   ├── Header.tsx           → komponen judul halaman
        │   ├── ProfileCard.tsx      → kartu profil siswa
        │   └── LearningCard.tsx     → kartu progres materi
        ├── main.tsx
        └── index.css
```

## 🛠️ Prasyarat

Sebelum install, pastikan sudah ada:

| Tools | Versi Minimal | Cek dengan |
|---|---|---|
| Node.js | 20.19+ atau 22.12+ | `node -v` |
| npm | Otomatis ikut Node.js | `npm -v` |

> Belum punya Node.js? Download di [nodejs.org](https://nodejs.org), pilih versi **LTS** biar paling stabil. Project ini pakai Vite 8 yang memang butuh Node versi cukup baru — kalau versi Node-nya terlalu lama, nanti muncul warning atau malah error pas install.

## 📦 Cara Install

**Day 2:**
```bash
cd react-onboarding-day-2
npm install
```

`npm install` bakal mengunduh semua library yang dibutuhkan (React, Vite, TypeScript, dll) ke folder `node_modules`. Cukup dilakukan sekali di awal, atau setiap kali ada perubahan dependency.

## ▶️ Cara Menjalankan

```bash
npm run dev
```

Terminal bakal menampilkan link, biasanya `http://localhost:5173` — buka link itu di browser, dan aplikasinya langsung bisa dicoba. Setiap kali file disimpan, halaman otomatis refresh sendiri (hot reload), jadi nggak perlu restart manual.

Perintah lain yang tersedia:

| Perintah | Fungsi |
|---|---|
| `npm run dev` | Jalankan mode development, dengan hot reload |
| `npm run build` | Build untuk production, hasilnya masuk folder `dist/` |
| `npm run preview` | Lihat hasil build production secara lokal |
| `npm run lint` | Cek kualitas kode dengan Oxlint |

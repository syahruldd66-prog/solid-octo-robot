# REELSTORM — Pinterest Reels Cover Finder

Website statis untuk mencari referensi sampul Instagram Reels dari Pinterest berdasarkan empat kategori.

## Fitur
- Empat kategori: Tokoh parfum, Motor, Cafe malam dengan makanan/minuman, dan Akhol di pantai.
- Pengguna memilih jumlah referensi (1–20).
- Membuka pencarian Pinterest sesuai kategori.
- Tampilan responsif untuk ponsel dan desktop.
- Tidak memerlukan API key atau database.

## Cara menjalankan
1. Ekstrak ZIP.
2. Buka `index.html` di browser, atau jalankan folder ini dengan Live Server di VS Code.
3. Klik kategori, atur jumlah, lalu tekan **Cari di Pinterest**.

## Deploy ke Vercel
1. Upload folder project ke GitHub.
2. Di Vercel pilih **Add New → Project** lalu impor repository.
3. Karena ini website statis tanpa build step, biarkan Framework Preset sebagai **Other** dan deploy.

## Catatan sumber gambar
Website mengarahkan pengguna ke hasil pencarian Pinterest; ia tidak melakukan scraping, hotlink, atau mengunduh Pin secara otomatis. Pinterest dapat membatasi embedding atau akses otomatis, jadi pencarian dibuka di tab baru. Jumlah yang dipilih merupakan preferensi pencarian, bukan jaminan Pinterest akan menampilkan tepat sejumlah gambar tersebut.

## Struktur
- `index.html` — struktur halaman
- `style.css` — desain dan responsif
- `app.js` — pemilihan kategori dan pencarian Pinterest

# PABW — Nabil Farrely — 25523145

Repo ini memuat pekerjaan mata kuliah Pengembangan Aplikasi Berbasis Web, satu folder untuk setiap pertemuan.

## Pertemuan 4 — Halaman profil saya

Arah visual halaman profil saya: tenang dan akademik.

- Warna utama: Biru tua #1D4D8F, diambil dari latar ilustrasi rak buku yang tersedia.
- Warna netral terang: #F7FAFC
- Warna netral gelap: #13213A
- Ukuran teks isi: 1rem
- Ukuran judul bagian: 1.5rem
- Ukuraån judul halaman: 2.25rem
- Skala jarak: 0.25rem, 0.5rem, 0.75rem, 1rem, 1.5rem
- Radius: 0.5rem
- Bayangan: 0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.1)

### Design token halaman profil

- Berkas gaya yang akan dibuat: `tokens.css`, `base.css`, `layout.css`, `komponen.css`, dan `tema.css`.
- Warna utama: `#1D4D8F`, digunakan untuk tombol, tautan, penanda, dan elemen utama.
- Warna latar: `#F7FAFC`.
- Warna teks utama: `#13213A`.
- Radius utama: `0.5rem`.
- Jarak standar: `1rem`.
- Ukuran teks isi: `1rem`.
- Ukuran judul bagian: `1.5rem`.
- Ukuran judul halaman: `2.25rem`.

Kriteria selesai: perubahan nilai `--color-primary` pada `tokens.css` harus dapat mengubah warna utama halaman tanpa perlu mengubah nilai warna secara langsung pada berkas CSS lainnya.

### Tujuan struktur tambahan

#### Tanya jawab
Bagian Tanya jawab menggunakan elemen `<details>` dan `<summary>` untuk menampilkan pertanyaan dan jawaban yang dapat dibuka dan ditutup oleh pengguna. Bagian ini ditujukan untuk pembaca yang ingin mengetahui informasi singkat mengenai hal yang sedang saya pelajari dan alat yang saya gunakan.

#### Perjalanan saya
Bagian Perjalanan saya menggunakan elemen `<ol>` untuk menyajikan perjalanan belajar saya secara berurutan berdasarkan waktu. Bagian ini ditujukan untuk pembaca yang ingin mengetahui perkembangan studi dan pembelajaran saya dari waktu ke waktu.

#### Keterampilan
Bagian Keterampilan menggunakan elemen `<dl>`, `<dt>`, dan `<dd>` untuk menyajikan keterampilan yang sedang saya pelajari beserta penjelasannya. Bagian ini ditujukan untuk pembaca yang ingin mengetahui kemampuan dan teknologi yang sedang saya pelajari.

### Catatan penggunaan AI

Dalam pengerjaan Pertemuan 4, saya menggunakan ChatGPT sebagai alat bantu untuk memahami instruksi worksheet dan memberi saran dalam pengerjaan kode. Implementasi dan keputusan akhir halaman tetap dikerjakan dan diperiksa saya sendiri.

## Pertemuan 5 — Layout Modern: Flexbox dan Grid

### Rencana kerangka halaman

- Baris halaman: `auto 1fr auto`
- Kolom isi: `16rem 1fr`
- Kepala halaman: flex
- Isi dua kolom: grid
- Galeri kartu: grid
- Isi dalam kartu: flex

### Sketsa kerangka halaman

Kerangka halaman yang saya gunakan terdiri dari tiga baris:

```text
┌──────────────────────────────────────────┐
│                 HEADER                   │
│             Nabil Farrely                │
│     tagline + tema + NAVBAR              │
├──────────────────────────────────────────┤
│                  MAIN                    │
│                KONTEN                    │
│                                          │
│  Tentang saya                            │
│  Karya saya                              │
│  Kontak                                  │
│  Tanya jawab                             │
│  Perjalanan                              │
│  Keterampilan                            │
├──────────────────────────────────────────┤
│                 FOOTER                   │
└──────────────────────────────────────────┘
```

### Hasil pemeriksaan

- Kerangka halaman menggunakan CSS Grid.
- Navbar menggunakan Flexbox.
- Galeri kartu menggunakan Grid dengan `repeat(auto-fit, minmax(...))`.
- Tidak menggunakan `float`.
- Pengujian dilakukan pada lebar 360 px dan 1280 px.
- Tidak ditemukan elemen yang meluber keluar kotak.

### Catatan implementasi

Beberapa bagian worksheet belum diterapkan secara langsung karena struktur HTML yang ada berbeda dengan selector contoh pada worksheet. Implementasi yang sudah dibuat disesuaikan dengan struktur HTML Pertemuan 4.

## Pertemuan 8 — JavaScript Modern ES6+, Struktur Data, dan Array Methods

### Catatan penggunaan AI

Pada Pertemuan 8, saya menggunakan ChatGPT sebagai pendamping belajar untuk memahami konsep JavaScript, seperti variabel, object, fungsi murni, array methods, dan debugging. AI juga saya gunakan untuk membantu mencari kesalahan pada kode dan memahami hasil yang muncul di Console. Kode dan pengujian yang digunakan pada halaman saya lakukan sendiri, kemudian hasil akhirnya saya periksa kembali.

## Pertemuan 9 — DOM, Event, dan Interaktivitas

### Daftar elemen yang akan saya isi

| Bagian halaman | Pemilih yang saya pakai | Diisi apa | Nama variabel |
|---|---|---|---|
| Daftar proyek | `#daftar` | daftar kartu proyek | `wadah` |
| Baris tombol filter | `#filter` | tombol filter kategori | `barisFilter` |
| Pesan daftar kosong | `#pesan-kosong` | pesan saat tidak ada proyek pada kategori yang dipilih | `kosong` |
| Form dan tiap kolomnya | `form`, `#nama`, `#email`, `#nim`, `#pesan` | validasi input form | `form`, `inputNama`, `inputEmail`, `inputNim`, `inputPesan` |

### Catatan penggunaan AI

Pada Pertemuan 9, saya menggunakan ChatGPT untuk membantu memahami materi seperti DOM, `querySelector`, `createElement`, `textContent`, event listener, event delegation, render, filter, dan validasi form. Saya juga menggunakannya saat mengalami error untuk membantu mencari penyebab dan memahami cara memperbaikinya.

Untuk penulisan kode, pengujian, pengecekan lewat Console dan DevTools, screenshot, dan hasil akhirnya tetap saya kerjakan dan cek sendiri.
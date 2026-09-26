## Pertemuan 4 — Halaman profil saya

Arah visual halaman profil saya: tenang dan akademik.

- Warna utama: Biru tua #1D4D8F, diambil dari latar ilustrasi rak buku yang tersedia.
- Warna netral terang: #F7FAFC
- Warna netral gelap: #13213A
- Ukuran teks isi: 1rem
- Ukuran judul bagian: 1.5rem
- Ukuran judul halaman: 2.25rem
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

Dalam pengerjaan Pertemuan 4, saya menggunakan ChatGPT sebagai alat bantu untuk memahami instruksi worksheet dan memberi saran dalam pengerjaan kode. Implementasi dan final decision halaman tetap dikerjakan dan diperiksa saya sendiri.
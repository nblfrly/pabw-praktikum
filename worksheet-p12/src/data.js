export const profil = {
  nama: "Nabil Farrely",
  peran: "Mahasiswa Informatika",
  keahlian: ["HTML", "CSS", "JavaScript"],
  jumlahProyek: 3,
};

export const daftarProyek = [
  {
    id: "praktikum-pabw",
    judul: "Praktikum PABW",
    deskripsi: "Tugas perkuliahan HTML Semantik dan CSS Responsif.",
    tahun: 2026,
    selesai: false,
    kategori: "web",
  },
  {
    id: "proyek-kampus",
    judul: "Proyek Aplikasi Kampus",
    deskripsi: "Tugas pengembangan aplikasi dalam perkuliahan.",
    tahun: 2026,
    selesai: false,
    kategori: "web",
  },
  {
    id: "makalah-kuliah",
    judul: "Makalah Kuliah",
    deskripsi: "Tugas penulisan dan penyusunan materi perkuliahan.",
    tahun: 2026,
    selesai: true,
    kategori: "data",
  },
];

export function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

export const formatKeahlian = (daftar) => daftar.join(" · ");

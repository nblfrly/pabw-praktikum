const profil = {
  nama: "Nabil Farrely",
  peran: "Mahasiswa Informatika",
  keahlian: ["HTML", "CSS", "JavaScript"],
  jumlahProyek: 3,
};

export const daftarProyek = [
  {
    judul: "Praktikum PABW", deskripsi: "Tugas perkuliahan HTML Semantik dan CSS Responsif.", tahun: 2026, selesai: false,
  },
  {
    judul: "Proyek Aplikasi Kampus", deskripsi: "Tugas pengembangan aplikasi dalam perkuliahan.", tahun: 2026, selesai: false,
  },
  {
    judul: "Makalah Kuliah", deskripsi: "Tugas penulisan dan penyusunan materi perkuliahan.", tahun: 2026, selesai: true,
  },
];

console.table(profil.keahlian);
console.table(daftarProyek);

const selesai = daftarProyek.filter((proyek) => proyek.selesai);
console.table(selesai);

const proyek = daftarProyek.find(
  (proyek) => proyek.judul === "Proyek Aplikasi Kampus"
);
console.log(proyek);

const judulProyek = daftarProyek.map((proyek) => proyek.judul);
console.log(judulProyek);

const urut = [...daftarProyek].sort((a, b) =>
  a.judul.localeCompare(b.judul)
);

console.table(urut);
console.table(daftarProyek);

const kalimat = `Nama saya ${profil.nama}, saya ${profil.peran}, dan saya memiliki ${profil.jumlahProyek} proyek.`;

console.log(profil);
console.log(kalimat);
console.log(typeof profil.nama);
console.log(typeof profil.jumlahProyek);

// Menyusun kalimat perkenalan dari satu object (fungsi deklarasi)
function buatPerkenalan({ nama, peran }) {

  return `${nama} — ${peran}`;
}

// Merapikan daftar keahlian menjadi satu baris teks (arrow function)
const formatKeahlian = (daftar) => daftar.join(" · ");

console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));

const elemen = document.querySelector("#kelincahan");

if (elemen) {
  console.log(elemen.textContent);
}
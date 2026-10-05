const profil = {
  nama: "Nabil Farrely",
  peran: "Mahasiswa Informatika",
  keahlian: ["HTML", "CSS", "JavaScript"],
  jumlahProyek: 3,
};

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
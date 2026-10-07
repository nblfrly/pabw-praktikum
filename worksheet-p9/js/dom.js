import { daftarProyek } from "./app.js";

const wadah = document.querySelector("#daftar");
const kosong = document.querySelector("#pesan-kosong");

function buatKartu(proyek) {
  const li = document.createElement("li");
  li.className = "kartu";

  const judul = document.createElement("h3");
  judul.textContent = proyek.judul;

  const deskripsi = document.createElement("p");
  deskripsi.textContent = proyek.deskripsi;

  li.append(judul, deskripsi);

  return li;
}

// daftarProyek.forEach((proyek) => wadah.append(buatKartu(proyek)));

function render(data) {
  wadah.textContent = "";

  data.forEach((proyek) => {
    wadah.append(buatKartu(proyek));
  });
}

render(daftarProyek);
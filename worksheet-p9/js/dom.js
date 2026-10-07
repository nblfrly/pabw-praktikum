import { daftarProyek } from "./app.js";

const wadah = document.querySelector("#daftar");
const kosong = document.querySelector("#pesan-kosong");

// B.1 – buat kartu
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

// D.1 – render
function render(data) {
  wadah.textContent = "";
  kosong.hidden = data.length !== 0;
  if (data.length === 0) {
    kosong.hidden = false;
    return;
  }

  kosong.hidden = true;

  data.forEach((proyek) => {
    wadah.append(buatKartu(proyek));
  });
}

// C.1 – filter dengan event delegation
const barisFilter = document.querySelector("#filter");

barisFilter.addEventListener("click", (event) => {
  const tombol = event.target.closest("button");
  if (!tombol) return;

  const kategori = tombol.dataset.kategori;
  const terpilih = daftarProyek.filter(
    (proyek) => kategori === "semua" || proyek.kategori === kategori
  );

  render(terpilih);
  tandaiTombolAktif(tombol);
});

render(daftarProyek);

// C.2 – tombol aktif
function tandaiTombolAktif(tombolAktif) {
  document.querySelectorAll("#filter button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol === tombolAktif);
  });
}

// D.2 – validasi form
const form = document.querySelector("form");

const inputNama = document.querySelector("#nama");
const inputEmail = document.querySelector("#email");
const inputNim = document.querySelector("#nim");
const inputPesan = document.querySelector("#pesan");

const tombolKirim = form.querySelector('button[type="submit"]');

// 1. periksa satu kolom
function periksaKolom(input, pesan) {
  const nilai = input.value.trim();
  const wadahKolom = input.parentElement;
  const pesanGalat = wadahKolom.querySelector(".pesan-galat");

  let sah = true;
  if (nilai === "") {
    sah = false;
  } else if (input === inputEmail && !input.validity.valid) {
    sah = false;
  } else if (input === inputNim && !input.validity.valid) {
    sah = false;
  }

  if (!sah) {
    input.setAttribute("aria-invalid", "true");
    pesanGalat.textContent = pesan;
  } else {
    input.setAttribute("aria-invalid", "false");
    pesanGalat.textContent = "";
  }

  return sah;
}

// 2. fungsi khusus untuk menentukan tombol aktif/nonaktif
function perbaruiTombol() {
  const sahNama = inputNama.value.trim() !== "";
  const sahEmail =
    inputEmail.value.trim() !== "" && inputEmail.validity.valid;
  const sahNim =
    inputNim.value.trim() !== "" && inputNim.validity.valid;
  const sahPesan = inputPesan.value.trim() !== "";
  const sah = sahNama && sahEmail && sahNim && sahPesan;

  tombolKirim.disabled = !sah;
}

// 3. periksa semua kolom
function periksaSemuaKolom() {
  const sahNama = periksaKolom(
    inputNama,
    "Nama lengkap wajib diisi."
  );

  const sahEmail = periksaKolom(
    inputEmail,
    "Masukkan alamat email yang valid."
  );

  const sahNim = periksaKolom(
    inputNim,
    "NIM harus terdiri dari 8 digit angka."
  );

  const sahPesan = periksaKolom(
    inputPesan,
    "Pesan wajib diisi."
  );

  const sah = sahNama && sahEmail && sahNim && sahPesan;
  tombolKirim.disabled = !sah;

  return sah;
}

[inputNama, inputEmail, inputNim, inputPesan].forEach((input) => {
  input.addEventListener("input", () => {
    // hanya cek field yang lagi diubah
    if (input === inputNama) {
      periksaKolom(inputNama, "Nama lengkap wajib diisi.");
    }

    if (input === inputEmail) {
      periksaKolom(inputEmail, "Masukkan alamat email yang valid.");
    }

    if (input === inputNim) {
      periksaKolom(inputNim, "NIM harus terdiri dari 8 digit angka.");
    }

    if (input === inputPesan) {
      periksaKolom(inputPesan, "Pesan wajib diisi.");
    }

    // tombol tetap ngecek keseluruhan form
    perbaruiTombol();
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const sah = periksaSemuaKolom();
  if (!sah) {
    const kolomBermasalah = [
      inputNama,
      inputEmail,
      inputNim,
      inputPesan,
    ].find((input) => input.getAttribute("aria-invalid") === "true");

    if (kolomBermasalah) {
      kolomBermasalah.focus();
    }

    return;
  }

  console.log("Form valid dan siap dikirim.");
});
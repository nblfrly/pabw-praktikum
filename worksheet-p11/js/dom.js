const wadah = document.querySelector("#daftar");
const kosong = document.querySelector("#pesan-kosong");
const barisFilter = document.querySelector("#filter");
const form = document.querySelector("form");
const inputNama = document.querySelector("#nama");
const inputEmail = document.querySelector("#email");
const inputNim = document.querySelector("#nim");
const inputPesan = document.querySelector("#pesan");
const tombolKirim = form.querySelector('button[type="submit"]');

export const elemen = {
  barisFilter,
  form,
  inputNama,
  inputEmail,
  inputNim,
  inputPesan,
  inputForm: [inputNama, inputEmail, inputNim, inputPesan],
  tombolKirim,
};

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
export function render(data) {
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

export function tandaiTombolAktif(tombolAktif) {
  document.querySelectorAll("#filter button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol === tombolAktif);
  });
}

export function periksaKolom(input, pesan) {
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
export function perbaruiTombol() {
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
export function periksaSemuaKolom() {
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


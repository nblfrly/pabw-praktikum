import { pilihKategori } from "./state.js";
import {
  elemen,
  perbaruiTombol,
  periksaKolom,
  periksaSemuaKolom,
} from "./dom.js";

export function pasangPendengar() {
  elemen.barisFilter.addEventListener("click", (event) => {
    const tombol = event.target.closest("button");
    if (!tombol) return;

    pilihKategori(tombol.dataset.kategori);
  });

  elemen.inputForm.forEach((input) => {
    input.addEventListener("input", () => {
      if (input === elemen.inputNama) {
        periksaKolom(elemen.inputNama, "Nama lengkap wajib diisi.");
      }

      if (input === elemen.inputEmail) {
        periksaKolom(elemen.inputEmail, "Masukkan alamat email yang valid.");
      }

      if (input === elemen.inputNim) {
        periksaKolom(elemen.inputNim, "NIM harus terdiri dari 8 digit angka.");
      }

      if (input === elemen.inputPesan) {
        periksaKolom(elemen.inputPesan, "Pesan wajib diisi.");
      }

      perbaruiTombol();
    });
  });

  elemen.form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!periksaSemuaKolom()) {
      const kolomBermasalah = elemen.inputForm.find(
        (input) => input.getAttribute("aria-invalid") === "true"
      );

      if (kolomBermasalah) {
        kolomBermasalah.focus();
      }

      return;
    }

    console.log("Form valid dan siap dikirim.");
  });
}

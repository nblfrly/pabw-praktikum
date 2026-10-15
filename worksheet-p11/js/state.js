import { daftarProyek } from "./data.js";
import { render } from "./dom.js";
import { hapusSimpanan, muat, simpan } from "./storage.js";

const simpanan = muat();
const kategoriAwal = simpanan === null ? "semua" : simpanan.kategoriAktif;

export const state = {
  daftarProyek,
  kategoriAktif: kategoriAwal,
};

export function gantiDaftarProyek(daftarBaru) {
  state.daftarProyek = daftarBaru;
  render(state);
}

export function pilihKategori(nilai) {
  state.kategoriAktif = nilai;
  simpan(state);
  render(state);
}

export function aturUlang() {
  hapusSimpanan();
  state.kategoriAktif = "semua";
  render(state);
}

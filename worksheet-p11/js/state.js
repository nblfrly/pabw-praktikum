import { daftarProyek } from "./data.js";

export const state = {
  daftarProyek,
};

export function gantiDaftarProyek(daftarBaru) {
  state.daftarProyek = daftarBaru;
}

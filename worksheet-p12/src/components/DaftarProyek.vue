<script setup>
import { computed } from 'vue'
import { state } from '../state.js'
const proyekTampil = computed(() =>
  state.daftarProyek.filter(
    (proyek) => state.kategoriAktif === 'semua' || proyek.kategori === state.kategoriAktif,
  ),
)
</script>

<template>
  <ul id="daftar" class="katalog">
    <li v-for="proyek in proyekTampil" :key="proyek.id" class="kartu">
      <h3>{{ proyek.judul }}</h3>
      <p>{{ proyek.deskripsi }}</p>
    </li>
  </ul>
  <p v-if="proyekTampil.length === 0" id="pesan-kosong">
    Tidak ada proyek pada kategori itu.
  </p>
</template>

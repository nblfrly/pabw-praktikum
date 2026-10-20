<script setup>
import { inject } from 'vue'

const state = inject('projectState')
const kategori = [
  { nilai: 'semua', label: 'Semua' },
  { nilai: 'web', label: 'Web' },
  { nilai: 'data', label: 'Data' },
]

function pilihKategori(nilai) {
  state.kategoriAktif = nilai
}
</script>

<template>
  <div id="filter">
    <button
      v-for="item in kategori"
      :key="item.nilai"
      type="button"
      :class="{ aktif: state.kategoriAktif === item.nilai }"
      @click="pilihKategori(item.nilai)"
    >
      {{ item.label }}
    </button>
  </div>
</template>

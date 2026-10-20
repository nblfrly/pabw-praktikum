<script setup>
import { pilihKategori, state } from '../state.js'

const kategori = [
  { nilai: 'semua', label: 'Semua' },
  { nilai: 'web', label: 'Web' },
  { nilai: 'data', label: 'Data' },
]

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

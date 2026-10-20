<script setup>
const props = defineProps({
  profil: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <header class="kepala">
    <div class="header-baris">
      <input id="tema" type="checkbox" class="pengalih-tema">
      <label for="tema" class="tombol-tema">Tema gelap</label>
      <h1>{{ props.profil.nama }}</h1>
      <p class="tagline">{{ props.profil.peran }}</p>
      <nav aria-label="Navigasi utama">
        <ul>
          <li><a href="#tentang">Tentang</a></li>
          <li><a href="#karya">Karya</a></li>
          <li><a href="#kontak">Kontak</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { computed, reactive, ref } from 'vue'

const nama = ref('')
const email = ref('')
const nim = ref('')
const pesan = ref('')
const disentuh = reactive({ nama: false, email: false, nim: false, pesan: false })
const namaSah = computed(() => nama.value.trim() !== '')
const emailSah = computed(() => /^\S+@\S+\.\S+$/.test(email.value))
const nimSah = computed(() => /^\d{8}$/.test(nim.value))
const pesanSah = computed(() => pesan.value.trim() !== '')
const formulirSah = computed(() => namaSah.value && emailSah.value && nimSah.value && pesanSah.value)

function kirim() {
  if (!formulirSah.value) return

  nama.value = ''
  email.value = ''
  nim.value = ''
  pesan.value = ''
  Object.assign(disentuh, { nama: false, email: false, nim: false, pesan: false })
}
</script>

<template>
  <section id="kontak">
    <h2>Hubungi saya</h2>
    <p>Isi formulir berikut. Semua kolom bertanda wajib harus diisi.</p>

    <form novalidate @submit.prevent="kirim">
      <fieldset>
        <legend>Data pengirim</legend>

        <p class="form-kolom">
          <label for="nama">Nama lengkap</label>
          <input id="nama" v-model="nama" name="nama" type="text" autocomplete="name" required :aria-invalid="disentuh.nama && !namaSah" @input="disentuh.nama = true">
          <span class="pesan-galat">Nama lengkap wajib diisi.</span>
        </p>

        <p class="form-kolom">
          <label for="email">Email</label>
          <input id="email" v-model="email" name="email" type="email" autocomplete="email" required :aria-invalid="disentuh.email && !emailSah" @input="disentuh.email = true">
          <span class="pesan-galat">Masukkan alamat email yang valid.</span>
        </p>

        <p class="form-kolom">
          <label for="nim">NIM</label>
          <input id="nim" v-model="nim" name="nim" type="text" inputmode="numeric" pattern="[0-9]{8}" aria-describedby="nim-bantuan" required :aria-invalid="disentuh.nim && !nimSah" @input="disentuh.nim = true">
          <span id="nim-bantuan">Delapan digit angka, contoh 25523145.</span>
          <span class="pesan-galat">NIM harus terdiri dari 8 digit angka.</span>
        </p>

        <p class="form-kolom">
          <label for="pesan">Pesan</label>
          <textarea id="pesan" v-model="pesan" name="pesan" rows="4" required :aria-invalid="disentuh.pesan && !pesanSah" @input="disentuh.pesan = true"></textarea>
          <span class="pesan-galat">Pesan wajib diisi.</span>
        </p>

        <button type="submit" :disabled="!formulirSah">Kirim</button>
      </fieldset>
    </form>
  </section>
</template>

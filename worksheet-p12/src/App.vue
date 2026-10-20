<script setup>
import { onMounted, watch } from 'vue'
import { profil } from './data.js'
import { state } from './state.js'
import { aturUlang, muat, simpan } from './simpanan.js'
import KepalaProfil from './components/KepalaProfil.vue'
import TombolFilter from './components/TombolFilter.vue'
import DaftarProyek from './components/DaftarProyek.vue'
import FormKontak from './components/FormKontak.vue'

onMounted(() => {
  const isi = muat()
  if (isi) state.kategoriAktif = isi.kategoriAktif
})

watch(state, (nilai) => simpan(nilai), { deep: true })

function aturUlangPilihan() {
  aturUlang()
  state.kategoriAktif = 'semua'
  simpan(state)
}
</script>

<template>
  <a class="lewati" href="#utama">Lewati ke konten utama</a>

  <KepalaProfil :profil="profil" />

  <main id="utama">
    <section id="tentang">
      <h2>Tentang saya</h2>

      <figure class="foto">
        <img
          src="/foto-profil1.jpg"
          alt="Foto diri Nabil Farrely memakai jas almameter biru."
          width="480"
          height="480"
          loading="lazy"
        >
      </figure>

      <p>
        Saya Nabil Farrely, mahasiswa Informatika Universitas Islam Indonesia.
        Saya tertarik mempelajari pengembangan web, terutama cara membuat tampilan
        yang konsisten, mudah dirawat, dan nyaman dipakai pada berbagai ukuran layar.
      </p>

      <div class="table-wrap">
        <table>
          <caption>Kegiatan belajar yang saya ikuti semester ini</caption>
          <thead>
            <tr>
              <th scope="col">Kegiatan</th>
              <th scope="col">Peran</th>
              <th scope="col">Waktu</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Praktikum PABW</th>
              <td>Peserta</td>
              <td><time datetime="2026-09">September 2026</time></td>
            </tr>
            <tr>
              <th scope="row">Belajar HTML dan CSS</th>
              <td>Peserta</td>
              <td><time datetime="2026-10">Oktober 2026</time></td>
            </tr>
            <tr>
              <th scope="row">Belajar Sistem dan Jaringan Komputer</th>
              <td>Peserta</td>
              <td><time datetime="2026">2026</time></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section id="karya">
      <h2>Karya saya</h2>
      <div class="kontrol-proyek">
        <TombolFilter />
        <button id="atur-ulang" type="button" @click="aturUlangPilihan">
          Atur ulang pilihan
        </button>
      </div>
      <DaftarProyek />
    </section>

    <FormKontak />

    <section id="tanya-jawab">
      <h2>Tanya jawab</h2>
      <details>
        <summary>Apa yang sedang saya pelajari?</summary>
        <p>CSS dan cara menyusun tampilan yang konsisten melalui design token.</p>
      </details>
      <details>
        <summary>Alat apa yang saya gunakan saat belajar?</summary>
        <p>Editor kode, peramban, dan DevTools untuk memeriksa struktur serta tampilan halaman.</p>
      </details>
    </section>

    <section id="perjalanan">
      <h2>Perjalanan saya</h2>
      <ol class="lini">
        <li><time datetime="2025-09">September 2025</time> - memulai studi Informatika di UII.</li>
        <li><time datetime="2025-09">September 2025</time> - mulai mempelajari bahasa pemrograman Python hingga akhir tahun.</li>
        <li><time datetime="2026-01">Februari 2026</time> - mulai mempelajari bahasa pemrograman Java hingga Agustus 2026.</li>
        <li><time datetime="2026-09">September 2026</time> - mulai mempelajari HTML dan CSS dalam perkuliahan PABW.</li>
      </ol>
    </section>

    <section id="keterampilan">
      <h2>Keterampilan</h2>
      <dl class="keterampilan">
        <dt>Python</dt>
        <dd>Mempelajari dasar pemrograman menggunakan bahasa Python.</dd>
        <dt>Java</dt>
        <dd>Mempelajari pemrograman Java dan menggunakannya dalam tugas perkuliahan.</dd>
        <dt>HTML dan CSS</dt>
        <dd>Mempelajari struktur HTML semantik, styling CSS, layout, dan design token.</dd>
        <dt>UI/UX</dt>
        <dd>Mempelajari perancangan antarmuka dan membuat prototype.</dd>
      </dl>
    </section>
  </main>

  <footer class="kaki">
    <p>Nabil Farrely - 25523145 - <time datetime="2026">2026</time></p>
  </footer>
</template>

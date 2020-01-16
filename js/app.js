const logomuseum = {
  template:'#logomuseum',
  data: function(){
    return{

      judul : 'Arti & makna logo Deli Serdang',
      gambar: 'img/logo-min.png',
      point :[
        {no:1, deskripsi:'Bintang bersudut lima melambangkan Ketuhanan Yang Maha Esa dan berfalsafat Pancasila'},
        {no:2, deskripsi:'17 kuntum bunga kapas, 5 daun sirih, 3 buah pinang, 45 butir padi melambangkan catatan sejarah, tanggal, bulan dan tahun kemerdekaan RI, dimana rakyat Deli Serdang turut memberi dharma bhaktinya dalam kemerdekaan Republik Indonesia.'},
        {no:3, deskripsi:'Sedangkan padi berbuah 11, seekor ikan melambangkan penduduk Kabupaten Deli Serdang sebagian besar terdiri dari petani dan nelayan.'},
        {no:4, deskripsi:'Gunung menunjukkan geografi Deli Serdang yang terdiri dari pegunungan, daratan rendah dan pantai.'},
        {no:5, deskripsi:'Lima gelombang ombak melambangkan bahwa Deli Serdang di airi oleh sungai besar dan kecil yang membawa kemakmuran rakyat.'},
        {no:6, deskripsi:'Matahari terbit yang sedang naik melambangkan masa depan yang gemilang azcita-cita yang tinggi serta kegairahan bekerja yang penuh semangat dan keyakinan.'},
        {no:7, deskripsi:'Pohon kelapa sawit, karet, tembakau melambangkan daerah Deli Serdang adalah daerah perkebunan yang menghasilkan devisa.'},
        {no:8, deskripsi:'Roda mesin bergigi melambangkan cita-cita modernisasi dari mekanisme kehidupan rakyat serta lambang kerajinan tangan.'},
        {no:9, deskripsi:'Sirih, pinang dan puan melambangkan kebudayaan asli, dimana sirih dan pinang merupakan alat pembuka kata dalam segala upacara serta lambang persaudaraan dan toleransi.'},
        {no:10, deskripsi:'lima helai daun sirih melambangkan tiga hukum yang dijunjung tinggi, yaitu hukum politik, hukum adat dan hukum negara'},
      ],

    }
  },

  methods: {
          goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
      }

    },
}

const visimisi = {
  template:'#visimisi',
  data: function(){
    return{

      judul : 'Visi & Misi Museum Daerah Deli Serdang',
      gambar : 'img/visimisi.png'

    }
  },

  methods: {
          goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
      }

    },
}

const gambarmuseum = {
  template:'#gambarmuseum',
  data: function(){
    return{

      judul : 'Gambar Museum Daerah Deli Serdang',
      gambar : [
        {link:'img/museum/museum.jpg'},
        {link:'img/museum/2.jpg'},
        {link:'img/museum/3.jpg'},
        ],

    }
  },

  methods: {
          goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
      }

    },
}

const strukturorganisasi = {
  template:'#strukturorganisasi',
  data: function(){
    return{

      judul : 'Struktur Organisasi Museum Daerah Deli Serdang',
      isi : 'Museum Daerah Deli Serdang diresmikan oleh Menteri Pendidikan dan Kebudayaan (Mendikbud) Prof. Dr. Muhadjir Effendy, M.A.P. bersama Gubernur Sumatra Utara (Sumut) Edy Rahmayadi dan Bupati Deli Serdang, H. Ashari Tambunan di Lubuk Pakam pada hari Sabtu, tanggal 8 September 2018. Peresmian museum yang letaknya persis di depan kantor Bupati Deli Serdang itu ditandai dengan pemotongan pita oleh Ketua PKK Sumatera Utara Nawal Lubis Edy Rahmayadi, dan penandatanganan prasasti oleh Mendikbud, Gubernur Sumut dan Bupati Deli Serdang.',
      gambar : 'img/struktur.png',

    }
  },

  methods: {
          goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
      }

    },
}

const peresmian = {
  template:'#peresmian',
  data: function(){
    return{

      judul : 'Peresmian Museum Daerah Deli Serdang',
      isi : 'Museum Daerah Deli Serdang diresmikan oleh Menteri Pendidikan dan Kebudayaan (Mendikbud) Prof. Dr. Muhadjir Effendy, M.A.P. bersama Gubernur Sumatra Utara (Sumut) Edy Rahmayadi dan Bupati Deli Serdang, H. Ashari Tambunan di Lubuk Pakam pada hari Sabtu, tanggal 8 September 2018. Peresmian museum yang letaknya persis di depan kantor Bupati Deli Serdang itu ditandai dengan pemotongan pita oleh Ketua PKK Sumatera Utara Nawal Lubis Edy Rahmayadi, dan penandatanganan prasasti oleh Mendikbud, Gubernur Sumut dan Bupati Deli Serdang.',
      gambar : [
        {link:'img/Peresmian/peresmian.png'},
        {link:'img/Peresmian/peresmian2.png'},
        {link:'img/Peresmian/peresmian3.png'},
        {link:'img/Peresmian/peresmian4.png'},
        ],

    }
  },

  methods: {
          goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
      }

    },
}

const kunjungan = {
  template:'#kunjungan',
  data: function(){
    return{

      isi :'Banyak sekolah mulai dari tingkat SD-SLTA, Mahasiswa Perguruan Tinggi Negeri/Swasta, Instansi Pemerintahan, Tokoh-tokoh penting dan juga masyarakat umum  sudah mengunjungi museum yang menyimpan benda koleksi dan literatur sejarah ini. Jika dihitung jumlahnya sudah mencapai puluhan ribu pengunjung sejak diresmikan.',
      judul : 'Kunjungan Masyarakat ke Museum Daerah Deli Serdang',
      gambar : [
        {link:'img/kunjungan/1.jpg', small:'img/kunjungan/small/1.jpg', deskripsi : 'Kunjungan Yayasan Swadaya Dian Khatulistiwa, Pontianak, Kalimantan Barat ke Museum Daerah Deli Serdang. Jum’at, 13 Sept 2019'},
        {link:'img/kunjungan/2.jpg', small:'img/kunjungan/small/2.jpg', deskripsi : 'Kunjungan Team Jelajah Nusantara ke Museum Daerah Deli Serdang'},
        {link:'img/kunjungan/3.jpg', small:'img/kunjungan/small/3.jpg', deskripsi : 'Kunjungan Adik-adik SMA di Museum Daerah Deli Serdang'},
      ]

    }
  },

  methods: {
          goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
      }

    },
}

const kegiatan = {
  template:'#kegiatan',
  data: function(){
    return{

      judul : 'Kegiatan',
      gambar : [
        {link:'img/kegiatan/1.jpg', small :'img/kegiatan/small/1.jpg', deskripsi : 'Kunjungan Pemkab Kepahyang, Bengkulu dalam rangka Study Tiru ke Museum Daerah Deli Serdang. Selasa, 17 Des 2019'},
        {link:'img/kegiatan/2.jpg', small : 'img/kegiatan/small/2.jpg', deskripsi : 'Kasi Museum Daerah Deli Serdang menerima Kunjungan Sekolah Ar-Rahman Fullday School Medan di Museum Daerah Del Serdang. Selasa, 17 Des 2019'},
      ]

    }
  },

  methods: {
          goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
      }

    },
}

const program = {
  template:'#program',
  data: function(){
    return{

      gambar : '',
      judul : 'Program Museum Daerah Deli Serdang',
      subjudul : 'Kenang Lemu',
      isi : 'Kenang Lemu (Kenali Deli Serdang Lewat Museum) adalah program kerja untuk mengenali Kabupaten Deli Serdang melalui museum. Pada Museum Daerah Deli Serdang yang telah diresmikan pada tanggal 8 September 2018 oleh Menteri Pendidikan dan Kebudayaan, pengunjung bisa mendapatkan informasi seputar sejarah Kabupaten Deli Serdang termasuk budayanya. Sejarah Kabupaten Deli Serdang yang ditampilkan mulai dari zaman prasejarah sampai zaman setelah kemerdekaan Indonesia. Tak hanya itu, pada Museum Daerah Deli Serdang, pengunjung antara lain bisa belajar tarian daerah yakni Simalungun, Melayu, dan Karo, belajar bahasa asing, musik melayu, belajar sejarah, serta mengikuti kegiatan lainnya.',

    }
  },

  methods: {
          goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
      }

    },
}

const peraturan = {
  template:'#peraturan',
  data: function(){
    return{

      judul : 'Peraturan & Tata Tertib Museum Daerah Deli Serdang',
      point :[
        {no:1, deskripsi:'Pengunjung wajib mengisi buku tamu'},
        {no:2, deskripsi:'Mohon berbicara dengan lembut dan berjalan dengan tenang'},
        {no:3, deskripsi:'Dilarang menyentuh benda koleksi/karya Museum'},
        {no:4, deskripsi:'Atur ponsel ke mode senyap dan hindari menelpon di area ruang pameran'},
        {no:5, deskripsi:'Dilarang memotret menggunakan kilat'},
        {no:6, deskripsi:'Barang berukuran besar/tas, topi, jaket harap dititipkan'},
        {no:7, deskripsi:'Dilarang membawa, mengkonsumsi makanan dan minuman di area ruang pameran'},
        {no:8, deskripsi:'Dilarang berlari dan menggunakan sepatu roda'},
        {no:9, deskripsi:'Mengikuti petunjuk arah sesuai dengan panduan atau navigasi'},
      ],
      perhatian: 'Staf dan pengunjung museum berhak atas lingkungan yang aman dan bebas dari kekerasan, penganiayaan dan perilaku mengancam. Pengunjung yang tidak mentaati peraturan dapat dikeluarkan oleh Staf Museum.',

    }
  },

  methods: {
          goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
      }

    },
}



const utama = {
  template:'#utama',
  data: function(){
    return{

    }
  }
}




// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: utama },
  { path: '/logomuseum', component: logomuseum },
  { path: '/visimisi', component: visimisi },
  { path: '/gambarmuseum', component: gambarmuseum },
  { path: '/strukturorganisasi', component: strukturorganisasi },
  { path: '/peresmian', component: peresmian },
  { path: '/kunjungan', component: kunjungan },
  { path: '/kegiatan', component: kegiatan },
  { path: '/program', component: program },
  { path: '/peraturan', component: peraturan },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
})

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
const app = new Vue({
  router,
  data: function () {
  return {

    }
  },

  mounted() {

  }
})

.$mount('#app')

// Now the app has started!
<template>
   <div class="flex flex-col text-black">
      <!-- HERO -->
      <div class="text-white bg-primary">
         <div class="container relative p-2 mx-auto space-x-5">
            <div
               class="flex flex-col items-center mx-auto xl:flex-row xl:max-w-screen-xl"
               >
               <div class="flex-1 py-5 px-4 space-y-6 xl:py-20">
                  <h1 class="mx-auto text-3xl font-bold leading-normal md:text-5xl">
                     Upgrade karyawanmu Upgrade bisnismu
                  </h1>
                  <p class="pb-16 text-xl leading-7">
                     Kembangkan SDM dan bisnis anda dengan KPI menggunakan software HR
                     terbaik. Capai target perusahaan dan evaluasi karyawan terbaik
                     anda.
                  </p>
                  <router-link
                     to="https://wa.link/qylmml" blank
                     class="px-8 py-5 my-10 font-bold text-white uppercase rounded bg-yellow-500 hover:bg-yellow-400  "
                     >
                     hubungi kami
                  </router-link>
               </div>
               <div class="flex items-center justify-center flex-1">
                  <img
                     class="hidden mt-48 mr-28 xl:block xl:absolute"
                     style="height: 730px"
                     src="@/assets/img/home/hero.png"
                     alt=""
                     />
               </div>
            </div>
         </div>
      </div>
       <!-- FEATURES -->
      <div class="py-20 md:pb-20 md:pt-40">
         <div class="container mx-auto space-y-16">
            <div class="px-12 space-y-5 text-center">
               <div class="flex mt-5 items-center justify-center max-w-screen-xl mx-auto">
                  <div
                     class="flex flex-col items-center space-x-10 md:flex-row "
                     data-aos="fade-left"
                     >
                     <div class="mt-16 space-y-5 rounded-lg text-center">
                        <p class="text-xl leading-10 text-gray-500">
                           Point adalah software HR yang dapat memantau kinerja karyawan,
                           kehadiran dan penjualan dengan perangkat yang anda miliki.
                        </p>
                        <h2 class="text-4xl font-extrabold uppercase">
                           COBA GRATIS SEKARANG!
                        </h2>
                     </div>
                  </div>
               </div>
            </div>
            <!-- OPTIONS -->
            <div
               class="flex flex-col justify-center w-full p-4 mx-auto sm:flex-row sm:space-x-5"
               >
               <button
                  @click="showFeature = 'kpi'"
                  class="flex items-center px-4 py-2 space-x-3 font-extrabold border rounded-lg md:justify-center"
                  >
                  <img src="@/assets/img/product/kpi.png" alt="" class="w-12 h-10" />
                  <p>KPI</p>
               </button>
               <button
                  @click="showFeature = 'sales-visitation'"
                  class="flex items-center px-4 py-2 space-x-3 font-extrabold border rounded-lg md:justify-center"
                  >
               <img
                  src="@/assets/img/product/sales_visitation.png"
                  alt=""
                  class="w-12 h-10"
                  />
               <span>SALES VISITATION</span>
               </button>
               <button
                  @click="showFeature = 'absensi'"
                  class="flex items-center px-4 py-2 space-x-3 font-extrabold border rounded-lg md:justify-center"
                  >
               <img
                  src="@/assets/img/product/absensi.png"
                  alt=""
                  class="w-12 h-10"
                  />
               <span>ABSENSI</span>
               </button>
               <button
                  @click="showFeature = 'checkin'"
                  class="flex items-center px-4 py-2 space-x-3 font-extrabold border rounded-lg md:justify-center"
                  >
               <img
                  src="@/assets/img/product/checkin.png"
                  alt=""
                  class="w-12 h-10"
                  />
               <span>CHECKIN</span>
               </button>
            </div>
            <!-- KPI -->
            <div
               data-aos="fade-up"
               class="flex flex-col items-center max-w-screen-lg px-4 mx-auto md:flex-row"
               v-if="showFeature == 'kpi'"
               >
               <div class="flex-1 space-y-5">
                  <div class="p-4 space-y-5 border border-gray-300 rounded-lg">
                     <h2 class="text-xl font-extrabold text-gray-600">
                        1. Monitoring kinerja karyawan dan target bisnis tanpa ribet
                     </h2>
                     <p class="f-leading-8 text-gray-400 text-sm">
                        Pantau performa karyawan dalam mencapai target secara transparan
                        dan detail. Bukti pekerjaan dan laporan dapat terpantau lebih
                        mudah dengan Point KPI. Dilengkapi fitur feedback untuk
                        peningkatan dan perbaikan kinerja.
                     </p>
                  </div>
                  <div class="p-4 space-y-5 border border-gray-300 rounded-lg">
                     <h2 class="text-xl font-extrabold text-gray-600">
                        2. Untuk segala jenis bisnis
                     </h2>
                     <p class="text-lg leading-8 text-gray-400">
                        Template KPI dapat disesuaikan dengan posisi pekerjaan atau
                        spesifik perseorangan. Jika anda memiliki lebih dari satu badan
                        usaha, Point KPI dapat digunakan di banyak cabang atau usaha
                        yang anda miliki.
                     </p>
                  </div>
                  <div class="p-4 space-y-5 border border-gray-300 rounded-lg">
                     <h2 class="text-xl font-extrabold text-gray-600">
                        3. Data karyawan bukan milik kita bersama
                     </h2>
                     <p class="text-lg leading-8 text-gray-400">
                        Data karyawan mudah diakses namun anda tetap dapat membatasi
                        izin akses database karyawan anda.
                     </p>
                  </div>
                  <div class="py-4">
                     <router-link
                        to="https://wa.link/qylmml" blank
                        class="px-8 py-5  font-bold text-white uppercase rounded bg-yellow-500 hover:bg-yellow-400  "
                        >
                        coba sekarang
                     </router-link>
                  </div>
               </div>
               <div class="flex-1 md:ml-10">
                  <img
                     class="w-full"
                     src="@/assets/img/home/kpi.png"
                     alt=""
                     />
               </div>
            </div>
            <!-- SALES VISITATION -->
        <div
          data-aos="fade-up"
          class="flex flex-col items-center max-w-screen-lg px-4 mx-auto md:flex-row"
          v-if="showFeature == 'sales-visitation'"
        >
          <div class="flex-1 space-y-5">
            <div class="p-4 space-y-5 border border-gray-300 rounded-lg">
              <h2 class="text-xl font-extrabold text-gray-600">
                1. Cegah kekeliruan penghitungan data sales
              </h2>
              <p class="text-lg leading-8 text-gray-400">
                Mencegah kekeliruan dan kecurangan penghitungan kas masuk dan
                jumlah stok dengan data realtime.
              </p>
            </div>
            <div class="p-4 space-y-5 border border-gray-300 rounded-lg">
              <h2 class="text-xl font-extrabold text-gray-600">
                2. Fitur survey untuk meningkatkan kualitas penjualan
              </h2>
              <p class="text-lg leading-8 text-gray-400">
                Anda dapat mendata pendapat dari pembeli tentang produk yang
                anda jual, guna meningkatkan atau memperbaiki kualitas produk.
              </p>
            </div>
            <div class="p-4 space-y-5 border border-gray-300 rounded-lg">
              <h2 class="text-xl font-extrabold text-gray-600">
                3. Bukti sales visit lebih cepat dan akurat
              </h2>
              <p class="text-lg leading-8 text-gray-400">
                Laporan kunjungan lebih teratur dan tidak perlu menunggu
                seharian untuk mengetahui data sales setiap harinya. Selain itu,
                terdapat juga fitur pengambilan foto dan GPS saat tiba di
                lokasi.
              </p>
            </div>
            <div class="py-4">
               <router-link
                  to="https://wa.link/qylmml" blank
                  class="px-8 py-5  font-bold text-white uppercase rounded bg-yellow-500 hover:bg-yellow-400  "
                  >
                  coba sekarang
               </router-link>
            </div>
          </div>
          <div class="flex-1 md:ml-10">
            <img
              class="w-full"
              src="@/assets/img/home/product-sales-visitation.png"
              alt=""
            />
          </div>
        </div>
            <!-- ABSENSI -->
            <div
               data-aos="fade-up"
               class="flex flex-col items-center max-w-screen-lg px-4 mx-auto md:flex-row"
               v-if="showFeature == 'absensi'"
               >
               <div class="flex-1 space-y-5">
                  <div class="p-4 space-y-5 border border-gray-300 rounded-lg">
                     <h2 class="text-xl font-extrabold text-gray-600">
                        1. Kerja di mana saja, tetap butuh absensi
                     </h2>
                     <p class="text-lg leading-8 text-gray-400">
                        Tinggalkan absensi lama dan dapatkan data akurat lokasi absensi
                        karyawan. Tidak pusing lagi untuk karyawan dengan shift yang
                        berbeda-beda; jadwal juga dapat lebih terorganisir dan tepat
                        waktu.
                     </p>
                  </div>
                  <div class="p-4 space-y-5 border border-gray-300 rounded-lg">
                     <h2 class="text-xl font-extrabold text-gray-600">
                        2. Dapat diakses dari perangkat apapun yang anda punya
                     </h2>
                     <p class="text-lg leading-8 text-gray-400">
                        Absen lewat ponsel lebih praktis dan cepat tanpa harus membawa
                        laptop ke mana-mana. Cocok untuk pekerja mobile dan lapangan.
                     </p>
                  </div>
                  <div class="p-4 space-y-5 border border-gray-300 rounded-lg">
                     <h2 class="text-xl font-extrabold text-gray-600">
                        3. Notifikasi kontrak
                     </h2>
                     <p class="text-lg leading-8 text-gray-400">
                        Disertai pemberitahuan kontrak karyawan yang telah anda input.
                        Tidak khawatir lagi kontrak akan terlewat dan kapan harus
                        memperpanjang.
                     </p>
                  </div>
                  <div class="py-4">
                     <router-link
                        to="https://wa.link/qylmml" blank
                        class="px-8 py-5  font-bold text-white uppercase rounded bg-yellow-500 hover:bg-yellow-400  "
                        >
                        coba sekarang
                     </router-link>
                  </div>
               </div>
               <div class="flex-1 md:ml-10">
                  <img
                     class="w-full"
                     src="@/assets/img/home/absensi.png"
                     alt=""
                     />
               </div>
            </div>
            <div
               data-aos="fade-up"
               class="flex flex-col items-center max-w-screen-lg px-4 mx-auto md:flex-row"
               v-if="showFeature == 'checkin'"
               >
               <div class="flex-1 space-y-5">
                  <div class="p-4 space-y-5 border border-gray-300 rounded-lg">
                     <h2 class="text-xl font-extrabold text-gray-600">
                        1. Absensi dari mana saja
                     </h2>
                     <p class="text-lg leading-8 text-gray-400">
                        Memudahkan proses absensi mulai dari karyawan kantor, driver,
                        hingga SPG. Point Checkin dirancang untuk memahami kebutuhan
                        kamu yang berbeda-beda. Check-in dengan Point dari mana saja,
                        GRATIS!
                     </p>
                  </div>
                  <div class="p-4 space-y-5 border border-gray-300 rounded-lg">
                     <h2 class="text-xl font-extrabold text-gray-600">
                        2. Keakuratan Data
                     </h2>
                     <p class="text-lg leading-8 text-gray-400">
                        Absen dengan foto terkini dan lokasi tempat check-in.
                     </p>
                  </div>
                  <div class="py-4">
                     <router-link
                        to="https://wa.link/qylmml" blank
                        class="px-8 py-5  font-bold text-white uppercase rounded bg-yellow-500 hover:bg-yellow-400  "
                        >
                        coba sekarang
                     </router-link>
                  </div>
               </div>
               <div class="flex-1 md:ml-10">
                  <img
                     class="w-full"
                     src="@/assets/img/home/checkin.png"
                     alt=""
                     />
               </div>
            </div>
         </div>
      </div>
         
     
      <!-- ADIL -->
      <div class="bg-gray-50 content-3-2 my-16 flex lg:flex-row flex-col items-center" style="font-family: 'Poppins', sans-serif">
         <!-- Left Column -->
         <div class="w-full lg:w-1/2 md:pl-28 justify-left flex lg:mb-0 mb-12">
               <img
                  data-aos="fade-right"
                  class="h-64"
                  src="@/assets/img/home/1-01.png"
                  alt=""
                  />
         </div>
         <!-- Right Column -->
         <div class="w-full flex flex-col lg:items-start items-center lg:text-left lg:mr-48">
               <div class="p-4 space-y-5 rounded-lg text-left" data-aos="fade-left">
                  <h2 class="text-3xl font-extrabold uppercase">
                     Bos senang, karyawan senang
                  </h2>
                  <p class="text-xl leading-10 text-gray-500">
                     Keadilan bagi pemilik usaha dan karyawan. Dengan monitoring
                     kinerja dan produktivitas karyawan, membantu target perusahaan
                     tercapai dan karyawan bisa mendapat upah sesuai hasil kerja
                     mereka. Win-win solution, ‘kan?
                  </p>
                  <div class="py-4">
                     <router-link
                        to="https://wa.link/qylmml" blank
                        class="px-8 py-5  font-bold text-white uppercase rounded bg-yellow-500 hover:bg-yellow-400  "
                        >
                        coba sekarang
                     </router-link>
                  </div>
               </div>
         </div>
      </div>

      <!-- MODUKAR -->
      <div class="content-3-2 my-16 flex lg:flex-row flex-col items-center" style="font-family: 'Poppins', sans-serif">
         <!-- left Column -->
         <div class="w-full flex flex-col lg:items-start items-center text-left lg:text-right pl-28">
               <div class="p-4 space-y-5 rounded-lg text-left lg:text-right" data-aos="fade-right">
                  <h2 class="text-3xl font-extrabold uppercase">
                     Pilih fitur apa saja yang kamu butuh
                  </h2>
                  <p class="text-xl leading-10 text-gray-500">
                     Kamu bisa pilih salah satu atau beberapa fitur sesuai yang
                           anda butuhkan. Mau pilih satu saja? Tentu bisa!
                  </p>
                  <div class="py-4">
                     <router-link
                        to="https://wa.link/qylmml" blank
                        class="px-8 py-5  font-bold text-white uppercase rounded bg-yellow-500 hover:bg-yellow-400  "
                        >
                        coba sekarang
                     </router-link>
                  </div>
               </div>
         </div>
         <!-- right Column -->
         <div class="w-full lg:w-1/2 justify-left flex lg:mb-0 mb-12 ml-14">
               <img
                  data-aos="fade-left"
                  class="h-64"
                  src="@/assets/img/home/2-01.png"
                  alt=""
                  />
         </div>
         
      </div>
      <!-- INTEGRASI -->
      <div class="bg-gray-50 content-3-2 my-16 flex lg:flex-row flex-col items-center" style="font-family: 'Poppins', sans-serif">
         <!-- Left Column -->
         <div class="w-full lg:w-1/2 pl-28 justify-left flex lg:mb-0 mb-12">
               <img
                  data-aos="fade-right"
                  class="h-64"
                  src="@/assets/img/home/1-01.png"
                  alt=""
                  />
         </div>
         <!-- Right Column -->
         <div class="w-full flex flex-col lg:items-start items-center lg:text-left lg:mr-48">
               <div class="p-4 space-y-5 rounded-lg text-left" data-aos="fade-left">
                  <h2 class="text-3xl font-extrabold uppercase">
                     Integrasikan dengan software HR yang anda punya
                  </h2>
                  <p class="text-xl leading-10 text-gray-500">
                     Ingin pakai software KPI Point namun sudah memakai software
                           HRIS lain? Semua data dapat terhubung dengan PointHR
                  </p>
                  <div class="py-4">
                     <router-link
                        to="https://wa.link/qylmml" blank
                        class="px-8 py-5  font-bold text-white uppercase rounded bg-yellow-500 hover:bg-yellow-400  "
                        >
                        coba sekarang
                     </router-link>
                  </div>
               </div>
         </div>
      </div>

      <!-- TESTIMONI -->
      <div class="py-20">
        <div class="container mx-auto space-y-20">
          <div class="px-4 space-y-5 text-center">
            <h1
              class="text-2xl text-center text-gray-900 uppercase sm:text-3xl md:text-2xl"
            >
              Testimoni
            </h1>
            <span class="text-4xl font-extrabold text-center uppercase">
              Apa Kata Para Pengguna PointHR ?
            </span>
          </div>
          <div
            class="flex flex-col justify-center px-4 space-x-0 space-y-10 md:space-y-0 md:space-x-10 md:flex-row"
            data-aos="fade-up"
          >
            <div
              class="flex flex-col justify-between px-4 py-2 border rounded-lg md:w-1/3"
            >
              <p class="p-2">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="quote-right"
                  class="h-6"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"
                  ></path>
                </svg>
                Saya terapkan sistem KPI ini di kantor saya. Walaupun tim saya
                cuman 10 orang, tapi karena KPI otomatis ini saya jadi bisa
                pantau hasil kerja tim saya dari rumah saat masa masa WFH
              </p>
              <p class="font-bold text-right">Stefany W</p>
            </div>
            <div
              class="flex flex-col justify-between px-4 py-2 border rounded-lg md:w-1/3"
            >
              <p class="p-2">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="quote-right"
                  class="h-6"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"
                  ></path>
                </svg>
                Sangat bagus,karena itu setiap ada kebutuhan untuk pemakaian
                cabang baru,selalu menjadi pilihan saya
              </p>
              <p class="font-bold text-right">Hendra</p>
            </div>
            <div
              class="flex flex-col justify-between px-4 py-2 border rounded-lg md:w-1/3"
            >
              <p class="p-2">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="quote-right"
                  class="h-6"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"
                  ></path>
                </svg>
                Pabrik baru saya jadi terbantu karena saat-saat seperti ini
                paling penting untuk tau karyawan mana yang perlu dipertahankan
                dan mana yang tidak sesuai dengan perusahaan.
              </p>
              <p class="font-bold text-right">T. Yudha Permana</p>
            </div>
          </div>
        </div>
      </div>
   </div>
   
<callout></callout>
</template>
<script>
import Callout from "./_/Callout.vue";
export default {
  components: {
    Callout
  },
  data() {
    return {
      showFeature: "kpi"
    };
  }
};
</script>

<template>
  <div
    class="fixed bottom-0 right-0 flex flex-col items-end justify-end w-48 h-48 pb-10 pr-5 m-auto "
  >
    <a
      href="javascript:void(0)"
      data-aos="fade-up"
      @click="open()"
      class="font-extrabold text-center bg-gray-100 rounded-full shadow-lg w-36 h-36"
    >
      <div class="flex items-center justify-center w-full">
        <img
          src="@/assets/img/product/checkin.png"
          class="absolute z-0 self-center w-32 h-32 mt-20"
        />
        <div
          class="absolute z-10 flex flex-col items-center justify-center mt-48 text-center"
        >
          <p class="text-3xl text-gray-900">GRATIS</p>
          <p class="text-xs">APLIKASI</p>
          <p class="text-xs">CHECKIN</p>
        </div>
      </div>
    </a>
  </div>
  <div v-if="isOpen" class="fixed inset-0 bg-gray-800 opacity-75" />
  <div
    v-if="isOpen"
    data-aos="fade-up"
    class="fixed inset-0 flex flex-col justify-center w-full h-full max-w-screen-sm p-20 m-auto"
  >
    <div
      class="flex flex-col w-full max-w-screen-sm p-4 space-y-3 bg-white rounded-md"
    >
      <div class="flex items-start justify-between">
        <span></span>
        <button @click="close()" class="font-bold">X</button>
      </div>
      <div class="flex flex-col py-0 space-y-4">
        <div class="flex flex-col space-y-1">
          <div
            class="flex flex-col items-center flex-1 p-4 space-y-3 rounded shadow bg-gray-50"
          >
            <a
              href="javascript:void(0)"
              class="flex items-center justify-center w-full px-3 py-8"
            >
              <img src="@/assets/img/product/checkin.png" alt="" class="h-32" />
            </a>

            <h2 class="text-black uppercase heading-1">GRATIS</h2>
            <h2 class="text-2xl text-black ">
              Aplikasi Checkin
            </h2>
            <div class="space-y-1 text-lg text-center">
              <p>
                Program "Tag Lokasi" menggunakan
              </p>
              <p>Photo & Geolokasi (GPS)</p>
            </div>
          </div>
        </div>
        <div class="flex space-x-2">
          <a
            href="https://checkin.pointhub.net/signup"
            class="flex-1 px-8 py-3 font-bold text-center uppercase rounded-md btn-primary"
          >
            Coba Sekarang
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    open() {
      this.isOpen = true;
    },
    close() {
      this.isOpen = false;
    }
  }
};
</script>

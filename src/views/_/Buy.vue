<template>
  <div v-if="isOpen" class="fixed inset-0 bg-gray-800 opacity-75" />
  <div
    v-if="isOpen"
    class="fixed inset-0 flex flex-col justify-center w-full h-full max-w-screen-sm p-4 m-auto"
  >
    <div
      class="flex flex-col w-full max-w-screen-sm p-4 space-y-3 bg-white rounded-md"
    >
      <div class="flex items-start justify-between">
        <h2 class="uppercase heading-3">Cara Pembayaran</h2>
      </div>
      <div class="flex flex-col py-0 space-y-4">
        <div class="flex flex-col space-y-1">
          <p class="font-bold uppercase">
            Transfer
          </p>
          <p>Nama bank : CV. Bumi Ananta</p>
          <p>No rek. : 0043300997</p>
          <p>Bank : Sinarmas</p>
        </div>
        <div class="flex space-x-2">
          <button
            class="w-full px-4 py-2 uppercase rounded-md btn-primary"
            @click="close()"
          >
            Ok
          </button>
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

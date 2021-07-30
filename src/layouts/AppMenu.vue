<template>
  <div class="h-10">
    <div
      class="items-center  hidden space-x-6 pt-2 pr-24 text-sm font-bold text-gray-100 uppercase sm:flex "
    >
      <router-link  to="/">Home</router-link>
      <router-link  to="/product">Product</router-link>
    
    </div>
    <div
      class="flex items-center space-x-6 text-sm text-gray-800 uppercase sm:hidden"
    >
      <button @click="isMenuOpen = !isMenuOpen">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fal"
          data-icon="bars"
          class="w-5 h-5"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M442 114H6a6 6 0 0 1-6-6V84a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6z"
          ></path>
        </svg>
      </button>
    </div>
  </div>

  <div
    v-if="isMenuOpen"
    class="absolute left-0 z-20 flex flex-col w-full p-4 mt-5 space-y-3 bg-white shadow-md"
  >
    <router-link @click="isMenuOpen = false" to="/">Home</router-link>
    <router-link @click="isMenuOpen = false" to="/product">Product</router-link>
    <router-link @click="isMenuOpen = false" to="/product">KPI</router-link>
    <router-link @click="isMenuOpen = false" to="/">Sales Visitation</router-link>
    <router-link @click="isMenuOpen = false" to="/product">Absensi</router-link>
    <router-link @click="isMenuOpen = false" to="/product">Chekin</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false
    };
  },
  methods: {}
};
</script>

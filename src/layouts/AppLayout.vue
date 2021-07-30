<template>
  <!-- Header -->
  <app-header></app-header>
  <!-- Content -->
  <router-view />
  <!-- Footer -->
  <app-footer></app-footer>
</template>

<script>
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";

export default {
  components: {
    AppHeader,
    AppFooter
  },
  mounted() {}
};
</script>

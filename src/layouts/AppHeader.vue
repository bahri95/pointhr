<template>
  <div class="shadow-md">
    <div class="container relative flex justify-between px-4 py-5 mx-auto">
      <div class="flex items-center">
        <a href="/">
          <img src="@/assets/logo.png" alt="Point Hub" class="h-16 py-1" />
        </a>
      </div>
      <div class="p-4 ">
        <app-menu></app-menu>
      </div>
    </div>
  </div>
</template>

<script>
import AppMenu from "./AppMenu";

export default {
  components: {
    AppMenu
  }
};
</script>

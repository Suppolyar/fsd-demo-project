<script setup lang="ts">
import { INavLink } from "./types.ts";
defineOptions({
  name: "NavBar",
});
const props = defineProps<{
  navLinks: INavLink[];
}>();
</script>

<template>
  <div class="flex justify-center gap-4">
    <router-link
      v-for="(link, index) in props.navLinks"
      :key="index"
      :to="link.to"
    >
      {{ link.name }}
    </router-link>
  </div>
</template>

<style scoped></style>

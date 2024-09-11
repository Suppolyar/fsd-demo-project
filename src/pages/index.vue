<script setup lang="ts">
import { useNavigationLinks } from "@entities/navigation-links";
import { NavBar } from "@shared/ui/navbar";
const { links } = useNavigationLinks();
</script>

<template>
  <NavBar :nav-links="links" />
  <main>
    <router-view />
  </main>
</template>

<style scoped></style>

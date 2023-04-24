
<template>
  <v-app theme="dark" width="100%">
    <TopBar />

    <RouterView />
  </v-app>
</template>

<style scoped></style>

  <script setup>
  import { RouterView } from 'vue-router'
  import TopBar from './components/TopBar.vue'

  </script>
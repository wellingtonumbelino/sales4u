<template>
  <MainMenu />

  <aside class="app-content">
    <h1>Bem-Vindo ao Sales4U!</h1>

    <main>
      <RouterView />
    </main>
  </aside>
</template>

<script setup>
import { RouterView } from "vue-router";
</script>

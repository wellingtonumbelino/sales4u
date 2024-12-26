<template>
  <h1>Bem-Vindo ao Sales4U!</h1>

  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/product">Produtos</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

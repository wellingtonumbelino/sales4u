<template>
  <div class="product">
    <h2>Cadastrar Produto</h2>
    <form>
      <InputText placeholder="Inserir nome do Produto" />
    </form>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Product",
});
</script>

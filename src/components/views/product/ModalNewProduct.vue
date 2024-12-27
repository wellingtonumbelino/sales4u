<template>
  <Dialog header="Novo Produto" modal v-model:visible="display">
    <div class="form-new-product">
      <div class="p-input">
        <label for="">Nome</label>
        <InputText
          placeholder="Insira o nome do produto"
          v-model="newProductModel.name"
        />
      </div>
      <div class="p-input">
        <label for="">Preço</label>
        <InputNumber
          currency="BRL"
          locale="pt-BR"
          mode="currency"
          v-model="newProductModel.price"
          :min="0"
        />
      </div>
      <div class="p-input">
        <label for="">Quantidade</label>
        <InputNumber v-model="newProductModel.stock" :min="0" />
      </div>
      <Button label="Cadastrar" />
      <Button label="Fechar" />
    </div>
  </Dialog>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ModalNewProduct",
  setup() {
    let display = ref(false);
    const newProductModel = ref({
      name: "",
      price: 0.0,
      stock: 0,
    });

    const open = () => {
      display.value = true;
    };

    return {
      display,
      newProductModel,
      open,
    };
  },
});
</script>

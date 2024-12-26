<template>
  <div class="product">
    <h2>Register New Product</h2>
    <div class="form-new-product">
      <div>
        <label for="">Product Name</label>
        <InputText
          placeholder="Insert a product name"
          v-model="newProductModel.name"
        />
      </div>
      <div>
        <label for="">Price</label>
        <InputNumber
          currency="BRL"
          locale="pt-BR"
          mode="currency"
          v-model="newProductModel.price"
          :min="0"
        />
      </div>
      <div>
        <label for="">Stock</label>
        <InputNumber v-model="newProductModel.stock" :min="0" />
      </div>
      <Button label="Create" @click="onProductSubmit" />
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Product",
  setup() {
    const newProductModel = {
      name: "",
      price: 0.0,
      stock: 0,
    };

    const onProductSubmit = () => {
      console.log(newProductModel);
    };

    return {
      newProductModel,
      onProductSubmit,
    };
  },
});
</script>

<template>
  <div class="product">
    <HeaderTitle title="Produtos" />

    <DataTable removableSort :loading="loading" :value="products">
      <template #header>
        <div class="data-table-header">
          <div class="header-left"></div>
          <div class="header-right">
            <Button icon="pi pi-plus" label="Novo Produto" />
          </div>
        </div>
      </template>
      <Column
        v-for="(col, index) in columns"
        :sortable="col.field !== 'created_at'"
        :field="col.field"
        :header="col.header"
        :key="index"
      >
        <template #body="{ data }">
          <span v-if="col.field === 'created_at'">
            {{ $datePlugin.formatDateDefault(data[col.field]) }}
          </span>
          <span v-else>{{ data[col.field] }}</span>
        </template>
      </Column>
    </DataTable>

    <!-- <div class="form-new-product">
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
    </div> -->
  </div>
</template>
<script>
import { defineComponent, onMounted, ref } from "vue";
import columns from "../data/ProductTableColumns";

export default defineComponent({
  name: "Product",
  setup() {
    let loading = ref(false);
    let products = ref([]);

    const newProductModel = {
      name: "",
      price: 0.0,
      stock: 0,
    };

    onMounted(() => {
      requestGetProducts();
    });

    const onProductSubmit = () => {
      console.log("chamou");
      window.api.registerProduct(newProductModel);
    };

    const requestGetProducts = async () => {
      try {
        loading = true;
        products.value = await window.api.getProducts();
      } catch {
        products.value = [];
      } finally {
        loading = false;
      }
    };

    return {
      columns,
      loading,
      newProductModel,
      onProductSubmit,
      products,
    };
  },
});
</script>

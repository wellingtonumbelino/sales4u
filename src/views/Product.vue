<template>
  <div class="product">
    <HeaderTitle title="Produtos" />

    <ModalNewProduct ref="modalNewProduct" />

    <DataTable removableSort :loading="loading" :value="products">
      <template #header>
        <div class="data-table-header">
          <div class="header-left"></div>
          <div class="header-right">
            <Button
              icon="pi pi-plus"
              label="Novo Produto"
              @click="$refs.modalNewProduct.open()"
            />
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
  </div>
</template>
<script>
import { defineComponent, onMounted, ref } from "vue";
import columns from "@data/ProductTableColumns";

import ModalNewProduct from "@components/product/ModalNewProduct.vue";

export default defineComponent({
  name: "Product",
  components: { ModalNewProduct },
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

<template>
  <Menu :model="items" />
</template>

<script>
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "MainMenu",
  setup() {
    const router = useRouter();

    const items = ref([
      {
        label: "Home",
        icon: "pi pi-home",
        command: () => {
          router.push("/");
        },
      },
      {
        label: "Produtos",
        icon: "pi pi-list",
        command: () => {
          router.push("/product");
        },
      },
    ]);

    return {
      items,
    };
  },
});
</script>

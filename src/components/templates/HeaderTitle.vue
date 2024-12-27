<template>
  <h2 class="header-title">{{ title }}</h2>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "HeaderTitle",
  props: {
    title: {
      type: String,
      default: "",
    },
  },
});
</script>

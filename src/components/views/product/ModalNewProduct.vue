<template>
  <Dialog
    header="Novo Produto"
    modal
    v-model:visible="display"
    :style="{ width: '20rem' }"
  >
    <Form
      class="flex-column"
      v-slot="$form"
      :initialValue="initialValue"
      :resolver="resolver"
      @submit="onFormSubmit"
    >
      <div class="p-input">
        <label for="inputTextProductName">Nome</label>
        <InputText
          id="inputTextProductName"
          name="name"
          placeholder="Insira o nome do produto"
        />
        <Message
          v-if="$form.name?.invalid"
          severity="error"
          size="small"
          variant="simple"
          >{{ $form.name.error?.message }}</Message
        >
      </div>
      <div class="p-input">
        <label for="inputNumberProductPrice">Preço</label>
        <InputNumber
          currency="BRL"
          id="inputNumberProductPrice"
          locale="pt-BR"
          mode="currency"
          name="price"
          :min="0"
        />
        <Message
          v-if="$form.price?.invalid"
          severity="error"
          size="small"
          variant="simple"
          >{{ $form.price.error?.message }}</Message
        >
      </div>
      <div class="p-input">
        <label for="inputNumberProductStock">Quantidade</label>
        <InputNumber id="inputNumberProductStock" name="quantity" :min="0" />
        <Message
          v-if="$form.quantity?.invalid"
          severity="error"
          size="small"
          variant="simple"
          >{{ $form.quantity.error?.message }}</Message
        >
      </div>

      <div class="flex-buttons">
        <Button label="Cadastrar" type="submit" />
        <Button class="p-button-outlined" label="Fechar" @click="hide" />
      </div>
    </Form>
  </Dialog>
</template>

<script>
import { zodResolver } from "@primevue/forms/resolvers/zod";
import { defineComponent, ref } from "vue";
import { z } from "zod";

export default defineComponent({
  name: "ModalNewProduct",
  setup() {
    let display = ref(false);
    const initialValue = ref({
      name: "",
      price: 0.0,
      quantity: 0,
    });
    const resolver = ref(
      zodResolver(
        z.object({
          name: z
            .string()
            .min(2, { message: "O nome do produto é obrigatório" }),
          price: z
            .number()
            .min(0, { message: "O preço do produto é obrigatório" }),
          quantity: z
            .number()
            .min(0, { message: "A quantidade do produto é obrigatória" }),
        })
      )
    );

    const open = () => {
      display.value = true;
    };

    const hide = () => {
      display.value = false;
    };

    const onFormSubmit = ({ valid, values }) => {
      if (!valid) return;

      console.log(values);
    };

    return {
      display,
      hide,
      initialValue,
      onFormSubmit,
      open,
      resolver,
    };
  },
});
</script>

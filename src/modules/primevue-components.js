import Button from "primevue/button";
import InputNumber from "primevue/inputnumber";
import InputText from "primevue/inputtext";

export function setPrimeVueComponents(app) {
  app.component("Button", Button);
  app.component("InputNumber", InputNumber);
  app.component("InputText", InputText);
}

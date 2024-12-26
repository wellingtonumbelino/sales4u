import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";
import "primeicons/primeicons.css";
import "./index.css";

import router from "./router/router";

import { setPrimeVueComponents } from "./modules/primevue-components";

const app = createApp(App);

app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});
app.use(router);

setPrimeVueComponents(app);

app.mount("#app");

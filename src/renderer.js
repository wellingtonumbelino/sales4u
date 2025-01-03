import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";
import "primeicons/primeicons.css";
import "./index.css";
import "./assets/scss/layout.scss";

import router from "./router/router";
import ToastService from "primevue/toastservice";

import { setComponents } from "./modules/components";
import { setPlugins } from "./modules/plugins";
import { setPrimeVueComponents } from "./modules/primevue-components";

const app = createApp(App);

app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});
app.use(router);
app.use(ToastService);

setComponents(app);
setPlugins(app);
setPrimeVueComponents(app);

app.mount("#app");

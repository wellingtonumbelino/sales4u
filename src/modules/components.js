import HeaderTitle from "@template/HeaderTitle.vue";
import MainMenu from "@layout/MainMenu.vue";

export function setComponents(app) {
  app.component("HeaderTitle", HeaderTitle);
  app.component("MainMenu", MainMenu);
}

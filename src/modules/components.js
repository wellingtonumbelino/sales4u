import HeaderTitle from "../components/templates/HeaderTitle.vue";
import MainMenu from "../components/templates/MainMenu.vue";

export function setComponents(app) {
  app.component("HeaderTitle", HeaderTitle);
  app.component("MainMenu", MainMenu);
}

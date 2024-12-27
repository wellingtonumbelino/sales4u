import Button from "primevue/button";
import Column from "primevue/column";
import DataTable from "primevue/datatable";
import Dialog from "primevue/dialog";
import InputNumber from "primevue/inputnumber";
import InputText from "primevue/inputtext";
import Menu from "primevue/menu";

export function setPrimeVueComponents(app) {
  app.component("Button", Button);
  app.component("Column", Column);
  app.component("DataTable", DataTable);
  app.component("Dialog", Dialog);
  app.component("InputNumber", InputNumber);
  app.component("InputText", InputText);
  app.component("Menu", Menu);
}

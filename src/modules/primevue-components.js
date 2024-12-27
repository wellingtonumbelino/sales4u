import Button from "primevue/button";
import Column from "primevue/column";
import DataTable from "primevue/datatable";
import InputNumber from "primevue/inputnumber";
import InputText from "primevue/inputtext";

export function setPrimeVueComponents(app) {
  app.component("Button", Button);
  app.component("Column", Column);
  app.component("DataTable", DataTable);
  app.component("InputNumber", InputNumber);
  app.component("InputText", InputText);
}

import datePlugin from "@plugin/datePlugin";
import notificationPlugin from "@plugin/notificationPlugin";

export function setPlugins(app) {
  app.use(datePlugin);
  app.use(notificationPlugin);
}

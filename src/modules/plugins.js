import datePlugin from "../plugins/datePlugin";

export function setPlugins(app) {
  app.use(datePlugin);
}

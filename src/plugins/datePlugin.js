export default {
  install(app) {
    app.config.globalProperties.$datePlugin = {
      formatDateDefault(date) {
        const options = { day: "2-digit", month: "short", year: "numeric" };
        const formatter = new Intl.DateTimeFormat("pt-BR", options);
        return formatter.format(new Date(date)).replace(".", "");
      },
    };
  },
};

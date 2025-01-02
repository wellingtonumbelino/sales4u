export default {
  install(app) {
    app.config.globalProperties.$notification = {
      success(message, title = "") {
        app.config.globalProperties.$toast.add({
          severity: "success",
          summary: title ? title : "Sucesso",
          detail: message,
          life: 3000,
        });
      },
      error(message, title = "") {
        app.config.globalProperties.$toast.add({
          severity: "error",
          summary: title ? title : "Sucesso",
          detail: message,
          life: 3000,
        });
      },
      errorMessage() {
        return "Um erro inexperado ocorreu. Por favor, contate o suporte.";
      },
    };
  },
};

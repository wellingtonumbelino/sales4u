import { contextBridge, ipcRenderer } from "electron";

// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
contextBridge.exposeInMainWorld("api", {
  registerProduct: (data) => ipcRenderer.invoke("register-product", data),
  getProducts: () => ipcRenderer.invoke("get-products"),
  inactiveProduct: (id) => ipcRenderer.invoke("inactive-product", id),
});

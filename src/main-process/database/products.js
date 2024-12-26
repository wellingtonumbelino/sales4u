import { ipcMain } from "electron";
import db from "../../database/database";

ipcMain.handle("get-products", () => {
  const stmt = db.prepare("SELECT * FROM products WHERE active = 1");
  return stmt.all();
});

ipcMain.handle("inactive-product", (event, id) => {
  const stmt = db.prepare(
    "UPDATE products SET active = 0, inactive_at = CURRENT_TIMESTAMP WHERE id = ?"
  );
  stmt.run(id);
  return { success: true };
});

ipcMain.on("register-product", (event, product) => {
  console.log(product);
});

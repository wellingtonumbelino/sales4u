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

ipcMain.handle("register-product", (event, product) => {
  const { name, price, quantity } = product;
  const stmt = db.prepare(
    "INSERT INTO products (name, price, quantity, active) VALUES (?, ?, ?, 1)"
  );

  try {
    const result = stmt.run(name, price, quantity);
    return { id: result.lastInsertRowid, name };
  } catch (error) {
    console.error("Error inserting product: ", error);

    throw {
      message: "Falha ao registrar o produto.",
      code: "REGISTER_PRODUCT_ERROR",
      details: error.message,
    };
  }
});

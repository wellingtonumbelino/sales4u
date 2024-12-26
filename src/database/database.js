const Database = require("better-sqlite3");
const path = require("path");

const db = new Database(path.join(__dirname, "sales4u.db"));

db.exec(`
  CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    price REAL NOT NULL,
    quantity INTEGER NOT NULL,
    active BOOLEAN NOT NULL DEFAULT 1,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    inactive_at TEXT
  );
`);

function populateDatabase() {
  const insert = db.prepare(`
    INSERT INTO products (name, price, quantity, active) VALUES (?, ?, ?, ?)
  `);

  const products = [
    ["Cimento", 20.5, 100, 1],
    ["Tijolo", 0.5, 1000, 1],
    ["Barra de Ferro", 15.0, 50, 1],
    ["Telha", 0.7, 1000, 1],
    ["Cerâmica", 30.0, 150, 1],
  ];

  for (const product of products) {
    insert.run(...product);
  }

  console.log("Database populated with sample products.");
}

populateDatabase();

export default db;

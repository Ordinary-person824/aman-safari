import sqlite3 from "sqlite3";

const db = new sqlite3.Database("bookings.db");

db.run(`
CREATE TABLE IF NOT EXISTS bookings (
id INTEGER PRIMARY KEY AUTOINCREMENT,
name TEXT,
email TEXT,
phone TEXT,
park TEXT,
date TEXT,
people INTEGER,
message TEXT
)
`);

export default db;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_postgres_1 = require("drizzle-orm/node-postgres");
const pg_1 = require("pg");
const migrator_1 = require("drizzle-orm/node-postgres/migrator");
require("dotenv").config();
const client = new pg_1.Client({
    host: "127.0.0.1",
    port: 5432,
    user: "postgres",
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});
const connect = async () => {
    try {
        await client.connect();
        console.log("Connected to database");
    }
    catch (error) {
        console.error(error);
    }
};
connect();
const db = (0, node_postgres_1.drizzle)(client);
const migrateTables = async () => {
    try {
        console.log("Migration started...");
        await (0, migrator_1.migrate)(db, { migrationsFolder: "drizzle" });
        console.log("Migration ended...");
        process.exit(0);
    }
    catch (error) {
        console.error(error);
    }
};
migrateTables();
//# sourceMappingURL=migrate.js.map
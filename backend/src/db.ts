import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";
require("dotenv").config()
import * as schema from "../src/schemas/schema"

const client = new Client({
    host: "127.0.0.1",
    port: 5432,
    user: "postgres",
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

client.connect();

export const db = drizzle(client,{schema});
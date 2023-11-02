
import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";
import{ migrate } from "drizzle-orm/node-postgres/migrator"
require("dotenv").config()

const client = new Client({
    host: "127.0.0.1",
    port: 5432,
    user: "postgres",
    password: process.env.DB_PASSWORD,
    database: "todo",
  });

const connect = async () => {
    try { 
        await client.connect();
        console.log("Connected to database");
        
    } catch (error) {
        console.error(error);   
    }
    
}

connect();
const db = drizzle(client);

const migrateTables = async () => {
    try {
        console.log("Migration started...");
        await migrate(db,{migrationsFolder: "drizzle"});
    } catch (error) {
        console.error(error);
    }
   
}

migrateTables();


 



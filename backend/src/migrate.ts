import{ migrate } from "drizzle-orm/node-postgres/migrator"
import { db } from "./db";

const migrateTables = async () => {
    try {
        console.log("Migration started...");
        await migrate(db,{migrationsFolder: "drizzle"});
        console.log("Migration ended...");
        process.exit(0);

    } catch (error) {
        console.error(error);
    }
   
}

migrateTables();


 



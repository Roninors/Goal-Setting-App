import {DataSource} from "typeorm"
require("dotenv").config()


const connect = async () => {
    const sourceConnection = new DataSource({
        type: "postgres",
        host: "localhost",
        username: "postgres",
        port: 5432,
        password: process.env.DB_PASSWORD,
        database: "todo"
    });

    try {
        await sourceConnection.initialize();
        console.log("Data source connection initialized");
        
    } catch (error) {
        console.error(error);   
    }
    
}

connect();
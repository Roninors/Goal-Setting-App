import express from "express"
import {router as userRoutes} from "./routes/userRoutes"

require("dotenv").config()

const app = express();
app.use(express.json());

try {
    app.listen(process.env.PORT_NUM, ()=>{
        console.log("Listening on port", process.env.PORT_NUM );
    });
}   catch (error) {
    console.error(error)
}

app.use("/users",userRoutes);








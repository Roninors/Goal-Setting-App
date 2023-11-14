import express from "express"
import {router as userRoutes} from "./routes/userRoutes"
import {router as goalRoutes} from "./routes/goalRoutes"
import { Request, Response,NextFunction } from "express";
require("dotenv").config()

const app = express();
app.use(express.json());

app.use((req: Request,res: Response ,next: NextFunction)=>{
    console.log(req.path,req.method);
    next();
})



try {
    app.listen(process.env.PORT_NUM, ()=>{
        console.log("Listening on port", process.env.PORT_NUM );
    });
}   catch (error) {
    console.error(error)
}
app.use("/users",userRoutes);
app.use("/goals",goalRoutes);







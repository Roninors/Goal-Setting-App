import express from "express"
import { getAllUsers } from "./queries";
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

app.get("/users",async(req,res)=>{
    try {
        const allUsers = await getAllUsers();
        res.status(200).json(allUsers)
    } catch (error) {
        res.status(404).json({msg: error})
    }

    
     
})






import { db } from "../db";
import { users } from "../schemas/schema";
import { Request, Response } from "express";

export async function getAllUsers(req:Request,res:Response){
    try {
        const allUsers = await db.select().from(users);
        res.status(200).json(allUsers)
    } catch (error) {
        res.status(400).json({msg: error})
    }

}

import { Request, Response } from "express";
import { insertUser, selectAllUsers, selectOneUser } from "../userQueries";
import * as jwt from 'jsonwebtoken'
import { User } from "../schemas/schema";

function generateToken(userId:number){
    return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "3d" })
}

export async function getAllUsers(req:Request,res:Response){
    try {
        const allUsers:User[] = await selectAllUsers();
        res.status(200).json(allUsers);
    } catch (error) {
        res.status(500).json({msg: error});
    }

}

export async function getUser(req:Request,res:Response){
    const {id} = req.params;
    try {
        const user:User = await selectOneUser(Number(id));
        if(!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({msg: error});
    }
}


export async function registerUser(req:Request,res:Response){
    const newUser:User = req.body;
    try {
        const userId:number =  await insertUser(newUser);
        const token:string =  generateToken(userId);
        res.cookie("token",token, {
            httpOnly : true
        });
        res.status(200).json({msg : "successfuly registered user"});
    } catch (error) {
        res.status(500).json({msg: error});
    }
}

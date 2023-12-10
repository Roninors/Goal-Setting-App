
import { Request, Response } from "express";
import { insertUser, selectAllUsers, selectOneUser } from "../userQueries";

export async function getAllUsers(req:Request,res:Response){
    try {
        const allUsers = await selectAllUsers();
        res.status(200).json(allUsers);
    } catch (error) {
        res.status(500).json({msg: error});
    }

}

export async function getUser(req:Request,res:Response){
    const {id} = req.params;
    try {
        const user = await selectOneUser(Number(id));
        if(!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({msg: error});
    }
}


export async function registerUser(req:Request,res:Response){
    const newUser = req.body;
    try {
        await insertUser(newUser);
        res.status(200).json({msg: "User successfuly registered to database."})
    } catch (error) {
        res.status(500).json({msg: error});
    }
}

import { getUserGoals } from "../goalQueries";
import { Request, Response } from "express";


export async function getGoals(req:Request,res:Response){
    const {id} = req.params;
    try {
        const goals = await getUserGoals(Number(id));
        if(!goals) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(goals)
    } catch (error) {
        res.status(500).json({msg: error});
    }
}
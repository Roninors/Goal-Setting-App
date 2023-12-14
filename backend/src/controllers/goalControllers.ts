import { insertGoal, selectManyGoals, selectGoal } from "../goalQueries";
import { Request, Response } from "express";
import { Goal } from "../schemas/schema";

export async function getGoals(req:Request,res:Response){
    const {id} = req.params;
    try {
        const goals:Goal[] = await selectManyGoals(Number(id));
        if(!goals) {
            return res.status(404).json({ msg: 'No Goals found for this user.'});
        }
        res.status(200).json(goals)
    } catch (error) {
        res.status(500).json({msg: error});
    }
}

export async function addGoal(req:Request,res:Response){
    const newGoal:Goal = req.body;
    try {
        await insertGoal(newGoal);
        res.status(200).json({msg: "Goal successfuly added to database."})
    } catch (error) {
        res.status(500).json({msg: error});
    }
}

export async function getSingleGoal(req:Request,res:Response){
    const {id} = req.params;
    try {
        const goals:Goal = await selectGoal(Number(id));
        if(!goals) {
            return res.status(404).json({ msg: 'Goal not found' });
        }
        res.status(200).json(goals)
    } catch (error) {
        res.status(500).json({msg: error});
    }
}
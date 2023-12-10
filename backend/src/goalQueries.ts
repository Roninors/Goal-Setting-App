import { eq } from "drizzle-orm";
import { db } from "./db";
import { Goal, goals } from "./schemas/schema";

export async function selectManyGoals(id:number){
    const goals = await db.query.goals.findMany({
        where : (goals)=> eq(goals.owner_id, Number(id))})  
    return goals;
}

export async function insertGoal(goal:Goal){
  const newGoal =  await db.insert(goals).values(goal);
    return newGoal;
}
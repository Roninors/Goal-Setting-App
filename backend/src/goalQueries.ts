import { eq } from "drizzle-orm";
import { db } from "./db";

export async function getUserGoals(id:number){
    const goals = await db.query.goals.findMany({
        where : (goals)=> eq(goals.owner_id, Number(id))})  
    return goals;
}


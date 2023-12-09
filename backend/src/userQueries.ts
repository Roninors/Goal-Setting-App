import { eq } from "drizzle-orm";
import { db } from "./db";
import { User, users } from "./schemas/schema";

export async function getAllUsersQuery(){
    const allUsers = await db.query.users.findMany({
        
        with: {
            goals : true
        }
    })
    return allUsers
} 


export async function getOneUser(id:number){
    const oneUser = await db.query.users.findFirst({
        where : (users)=> eq(users.user_id, Number(id)),
        
        with: {
            goals:true
        }
    })  
    return oneUser;
}


export async function getUserGoals(id:number){
    const goals = await db.query.goals.findMany({
        where : (goals)=> eq(goals.owner_id, Number(id))})  
    return goals;
}

export async function insertUser(newUser:User){
    await db.insert(users).values(newUser);
}
import { db } from "./db";
import { users } from "./schemas/schema";

export async function getAllUsers(){
    const allUsers = await db.select().from(users);
    
    return allUsers;
}
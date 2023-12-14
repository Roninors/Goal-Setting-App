import { eq } from "drizzle-orm";
import { db } from "./db";
import { User, users } from "./schemas/schema";
interface InsertedUser {
    insertedId : number
}
export async function selectAllUsers(){
    const allUsers = await db.query.users.findMany({
        with: {
            goals : true
        }
    })
    return allUsers
} 

export async function selectOneUser(id:number){
    const oneUser = await db.query.users.findFirst({
        where : (users)=> eq(users.user_id, Number(id)),
        with: {
            goals:true
        }
    })  
    return oneUser;
}

export async function insertUser(newUser:User){
    const insertedUser:InsertedUser[] = await db.insert(users).values(newUser).returning({ insertedId: users.user_id });
    return insertedUser[0].insertedId;
}
import { eq } from "drizzle-orm";
import { db } from "./db";

export async function getAllUsersQuery(){
    const allUsers = await db.query.users.findMany({
        //remove lang ang 'with' if goals are not required
        with: {
            goals : true
        }
    })
    return allUsers
} 


export async function getOneUser(id:number){
    const oneUser = await db.query.users.findFirst({
        where : (users)=> eq(users.user_id, Number(id)),
        //remove lang ang 'with' if goals are not required
        with: {
            goals:true
        }
    })  
    return oneUser;
}


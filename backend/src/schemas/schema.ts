import { pgSchema,text,varchar,bigserial,timestamp,bigint,boolean,integer } from "drizzle-orm/pg-core";
import { relations, sql } from "drizzle-orm";

export const mainSchema = pgSchema("mainSchema");

export const users = mainSchema.table('users',{
  user_id: bigserial("user_id", { mode: 'number' }).primaryKey(),
  username: varchar("username",{length:50}).notNull(),
  password: varchar("password",{length:50}).notNull(),
  email: varchar("email",{length:50}).notNull(),
  createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`),
})

export const usersRelation = relations(users,({many})=>({
  goals: many(goals)
}))

export const goals = mainSchema.table('goals',{
  goal_id: bigserial("goal_id", { mode: 'number' }).primaryKey(),
  goal_name: text("goal_name").notNull(),
  goal_savings: bigint("goal_savings",{mode:'number'}).notNull(),
  current_savings: bigint("current_savings",{mode:'number'}).default(0),
  goal_completed: boolean("goal_completed").default(false),
  owner_id: bigint("owner_id", { mode: 'number' }).notNull().references(()=>users.user_id),
  createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`)
})

export const goalsRelation = relations(goals,({one})=>({
  goal_owner: one(users,{
    fields:[goals.owner_id],
    references: [users.user_id]
  })
}))






  
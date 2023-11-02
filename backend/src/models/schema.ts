import { pgSchema,serial,text,pgTable } from "drizzle-orm/pg-core";

export const mySchema = pgSchema("mySchema");

export const mySchemaUsers = mySchema.table('users', {
    id: serial('id').primaryKey(),
    name: text('name'),
  });
CREATE SCHEMA "mySchema";
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "mySchema"."users" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text
);

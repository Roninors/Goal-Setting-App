CREATE SCHEMA "anotherSchema";
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "anotherSchema"."clients" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL
);

CREATE SCHEMA "mainSchema";
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "mainSchema"."goals" (
	"goal_id" bigserial PRIMARY KEY NOT NULL,
	"goal_name" text NOT NULL,
	"goal_savings" bigint NOT NULL,
	"current_savings" bigint DEFAULT 0,
	"goal_completed" boolean DEFAULT false,
	"owner_id" bigserial NOT NULL,
	"created_at" timestamp DEFAULT CURRENT_TIMESTAMP
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "mainSchema"."users" (
	"user_id" bigserial PRIMARY KEY NOT NULL,
	"username" varchar(50) NOT NULL,
	"password" varchar(50) NOT NULL,
	"email" varchar(50) NOT NULL,
	"created_at" timestamp DEFAULT CURRENT_TIMESTAMP
);

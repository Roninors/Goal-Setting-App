ALTER TABLE "mainSchema"."goals" DROP CONSTRAINT "goals_owner_id_users_user_id_fk";
--> statement-breakpoint
ALTER TABLE "mainSchema"."goals" ALTER COLUMN "owner_id" SET DATA TYPE bigint;
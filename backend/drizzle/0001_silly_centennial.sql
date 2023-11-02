ALTER TABLE "mySchema"."users" ALTER COLUMN "name" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "mySchema"."users" ADD COLUMN "email" text NOT NULL;
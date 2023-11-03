DO $$ BEGIN
 ALTER TABLE "mainSchema"."goals" ADD CONSTRAINT "goals_owner_id_users_user_id_fk" FOREIGN KEY ("owner_id") REFERENCES "mainSchema"."users"("user_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

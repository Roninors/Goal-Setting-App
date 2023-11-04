"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.goalsRelation = exports.goals = exports.usersRelation = exports.users = exports.mainSchema = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const drizzle_orm_1 = require("drizzle-orm");
exports.mainSchema = (0, pg_core_1.pgSchema)("mainSchema");
exports.users = exports.mainSchema.table('users', {
    user_id: (0, pg_core_1.bigserial)("user_id", { mode: 'number' }).primaryKey(),
    username: (0, pg_core_1.varchar)("username", { length: 50 }).notNull(),
    password: (0, pg_core_1.varchar)("password", { length: 50 }).notNull(),
    email: (0, pg_core_1.varchar)("email", { length: 50 }).notNull(),
    createdAt: (0, pg_core_1.timestamp)("created_at").default((0, drizzle_orm_1.sql) `CURRENT_TIMESTAMP`),
});
exports.usersRelation = (0, drizzle_orm_1.relations)(exports.users, ({ many }) => ({
    posts: many(exports.goals)
}));
exports.goals = exports.mainSchema.table('goals', {
    goal_id: (0, pg_core_1.bigserial)("goal_id", { mode: 'number' }).primaryKey(),
    goal_name: (0, pg_core_1.text)("goal_name").notNull(),
    goal_savings: (0, pg_core_1.bigint)("goal_savings", { mode: 'number' }).notNull(),
    current_savings: (0, pg_core_1.bigint)("current_savings", { mode: 'number' }).default(0),
    goal_completed: (0, pg_core_1.boolean)("goal_completed").default(false),
    owner_id: (0, pg_core_1.bigint)("owner_id", { mode: 'number' }).notNull().references(() => exports.users.user_id),
    createdAt: (0, pg_core_1.timestamp)("created_at").default((0, drizzle_orm_1.sql) `CURRENT_TIMESTAMP`)
});
exports.goalsRelation = (0, drizzle_orm_1.relations)(exports.goals, ({ one }) => ({
    goal_owner: one(exports.users, {
        fields: [exports.goals.owner_id],
        references: [exports.users.user_id]
    })
}));
//# sourceMappingURL=schema.js.map
import {  mysqlTable, bigint, text, varchar, timestamp } from 'drizzle-orm/mysql-core';
 
export const users = mysqlTable('users', {
  id: bigint('id', { mode: 'number' }).primaryKey().autoincrement(),
  firstName: text('first_name').notNull(),
  lastName: text('last_name').notNull(),
  username: varchar('username', { length: 100 }).unique().notNull(),
  email: varchar('email', { length: 256 }).unique().notNull(),
  password: varchar('password', { length: 256 }).notNull(),
  createdAt: timestamp('createdAt').defaultNow(),
  updatedAt: timestamp('updatedAt').defaultNow(),
});

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;

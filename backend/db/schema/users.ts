import {  mysqlTable, bigint, text, varchar, timestamp } from 'drizzle-orm/mysql-core';
 
export const users = mysqlTable('users', {
  id: bigint('id', { mode: 'number' }).primaryKey().autoincrement(),
  firstName: text('first_name'),
  lastName: text('last_name'),
  username: text('username'),
  email: varchar('email', { length: 256 }),
  password: varchar('password', { length: 256 }),
  createdAt: timestamp('createdAt').defaultNow(),
  updatedAt: timestamp('updatedAt').defaultNow(),
});

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;

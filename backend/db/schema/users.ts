import {  mysqlTable, bigint, text, varchar } from 'drizzle-orm/mysql-core';
 
export const users = mysqlTable('users', {
  id: bigint('id', { mode: 'number' }).primaryKey().autoincrement(),
  firstName: text('first_name'),
  lastName: text('last_name'),
  email: varchar('email', { length: 256 }),
  password: varchar('password', { length: 256 }),
});

export type Users = typeof users.$inferSelect;
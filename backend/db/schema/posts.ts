import {  mysqlTable, bigint, text, int } from 'drizzle-orm/mysql-core';
import { users } from './users';
 
export const posts = mysqlTable('posts', {
	id:  int('id').primaryKey().autoincrement(),
	description: text('description'),
	userId: int('user_id')
});

export type Post = typeof posts.$inferSelect;

import {  mysqlTable, text, int, datetime, timestamp, boolean } from 'drizzle-orm/mysql-core';
 
export const posts = mysqlTable('posts', {
	id:  int('id').primaryKey().autoincrement(),
	description: text('description'),
	userId: int('user_id'),
	archived: boolean('archived').default(false),
	createdAt: timestamp('createdAt').defaultNow(),
	updatedAt: timestamp('updatedAt').defaultNow(),
});

export type Post = typeof posts.$inferSelect;
export type NewPost = typeof posts.$inferInsert;
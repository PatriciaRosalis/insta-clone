ALTER TABLE `posts` MODIFY COLUMN `createdAt` timestamp DEFAULT (now());--> statement-breakpoint
ALTER TABLE `posts` MODIFY COLUMN `updatedAt` timestamp DEFAULT (now());--> statement-breakpoint
ALTER TABLE `users` MODIFY COLUMN `createdAt` timestamp DEFAULT (now());--> statement-breakpoint
ALTER TABLE `users` MODIFY COLUMN `updatedAt` timestamp DEFAULT (now());--> statement-breakpoint
ALTER TABLE `posts` ADD `archived` boolean DEFAULT false;
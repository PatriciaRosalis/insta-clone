ALTER TABLE `users` MODIFY COLUMN `first_name` text NOT NULL;--> statement-breakpoint
ALTER TABLE `users` MODIFY COLUMN `last_name` text NOT NULL;--> statement-breakpoint
ALTER TABLE `users` MODIFY COLUMN `username` varchar(100) NOT NULL;--> statement-breakpoint
ALTER TABLE `users` MODIFY COLUMN `email` varchar(256) NOT NULL;--> statement-breakpoint
ALTER TABLE `users` MODIFY COLUMN `password` varchar(256) NOT NULL;
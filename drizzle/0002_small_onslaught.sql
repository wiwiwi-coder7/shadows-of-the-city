CREATE TABLE `localized_story_overrides` (
	`id` varchar(96) NOT NULL,
	`locale` enum('fa') NOT NULL DEFAULT 'fa',
	`sceneTitle` text NOT NULL,
	`blocks` json NOT NULL,
	`choiceLabels` json NOT NULL,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `localized_story_overrides_id` PRIMARY KEY(`id`)
);

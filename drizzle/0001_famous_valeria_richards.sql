CREATE TABLE `admin_sessions` (
	`id` varchar(96) NOT NULL,
	`credentialId` int NOT NULL,
	`tokenHash` varchar(128) NOT NULL,
	`expiresAt` timestamp NOT NULL,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `admin_sessions_id` PRIMARY KEY(`id`),
	CONSTRAINT `admin_sessions_tokenHash_unique` UNIQUE(`tokenHash`)
);
--> statement-breakpoint
CREATE TABLE `audio_assets` (
	`id` varchar(96) NOT NULL,
	`name` varchar(255) NOT NULL,
	`category` enum('music','ambience','sfx') NOT NULL,
	`url` text NOT NULL,
	`durationSeconds` int,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `audio_assets_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `audio_assignments` (
	`id` varchar(96) NOT NULL,
	`audioAssetId` varchar(96) NOT NULL,
	`targetType` enum('chapter','scene','node') NOT NULL,
	`targetId` varchar(96) NOT NULL,
	`volume` int NOT NULL DEFAULT 70,
	`loop` int NOT NULL DEFAULT 0,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `audio_assignments_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `editorial_content` (
	`id` varchar(96) NOT NULL,
	`kind` enum('story-node','codex','character','configuration') NOT NULL,
	`title` varchar(255) NOT NULL,
	`chapter` int,
	`status` enum('draft','published') NOT NULL DEFAULT 'draft',
	`payload` json NOT NULL,
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `editorial_content_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `owner_credentials` (
	`id` int AUTO_INCREMENT NOT NULL,
	`identifier` varchar(96) NOT NULL,
	`passwordSalt` varchar(128) NOT NULL,
	`passwordHash` varchar(256) NOT NULL,
	`isActive` int NOT NULL DEFAULT 1,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `owner_credentials_id` PRIMARY KEY(`id`),
	CONSTRAINT `owner_credentials_identifier_unique` UNIQUE(`identifier`)
);
--> statement-breakpoint
CREATE TABLE `telemetry_events` (
	`id` varchar(96) NOT NULL,
	`installationId` varchar(96) NOT NULL,
	`eventType` enum('game_start','node_view','choice_selected','chapter_reached','game_complete') NOT NULL,
	`chapter` int,
	`nodeId` varchar(96),
	`choiceId` varchar(128),
	`locale` varchar(12) NOT NULL DEFAULT 'en',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `telemetry_events_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `users` MODIFY COLUMN `role` enum('admin','user') NOT NULL DEFAULT 'user';